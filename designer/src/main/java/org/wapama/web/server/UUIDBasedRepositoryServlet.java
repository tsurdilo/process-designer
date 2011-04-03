/***************************************
 * Copyright (c) Intalio, Inc 2010
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
****************************************/
package org.wapama.web.server;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.StringWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.UnavailableException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.framework.BundleContext;
import org.osgi.framework.BundleReference;
import org.osgi.framework.ServiceReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wapama.web.profile.IDiagramProfile;
import org.wapama.web.profile.IDiagramProfileService;
import org.wapama.web.profile.impl.DefaultProfileImpl;
import org.wapama.web.profile.impl.ProfileServiceImpl;
import org.wapama.web.repository.DiagramValidationException;
import org.wapama.web.repository.IUUIDBasedRepository;
import org.wapama.web.repository.IUUIDBasedRepositoryService;
import org.wapama.web.repository.impl.UUIDBasedFileRepository;



/**
 * @author Antoine Toulme
 * a file based repository that uses the UUID element to save models
 * using a repository, which may be passed by a backend in an OSGi environment
 * or saved to file system.
 *
 */
public class UUIDBasedRepositoryServlet extends HttpServlet {

    /**
     * Serializable comes with this field.
     */
    private static final long serialVersionUID = 1433687917432938596L;

    /**
     * da logger
     */
    private static final Logger _logger = LoggerFactory.getLogger(UUIDBasedRepositoryServlet.class);
    
    /**
     * The class name of the default repository.
     */
    private static final String DEFAULT_REPOSITORY = UUIDBasedFileRepository.class.getName();
    /**
     * The default factory for creation of repositories.
     * 
     * The factory uses the initialization parameter repositoryClass
     * to know which class to instantiate.
     * The class is loaded using the current thread context class loader,
     * or the UUIDBasedRepositoryServlet class loader if none is set.
     */
    private static IUUIDBasedRepositoryService _factory = new IUUIDBasedRepositoryService() {

        /**
         * @param config
         *   the servlet config to help create the repository
         * @return a new IUUIDBasedRepository object
         */
        @SuppressWarnings("rawtypes")
        public IUUIDBasedRepository createRepository(ServletConfig config) 
            throws ServletException {
            ClassLoader cl = Thread.currentThread().getContextClassLoader();
            if (cl == null) {
                cl = UUIDBasedRepositoryServlet.class.getClassLoader();
            }
            String className = config.getInitParameter("repositoryClass");
            if (className == null) {
                _logger.debug("Defaulting the repository to the default class");
                className = DEFAULT_REPOSITORY;
            }
            try {
                Class clazz = cl.loadClass(className);
                return (IUUIDBasedRepository) clazz.newInstance();
            } catch (Exception e) {
                throw new IllegalArgumentException(e.getMessage(), e);
            }
           
        }
        
    };
    
    /**
     * The factory used in an OSGi context.
     * 
     * The factory looks for a registered IUUIDBasedRepositoryService using
     * the current BundleContext. 
     * If none is found, it will throw a UnavailableException.
     * The first one found will otherwise be used to create the repository.
     */
    private static IUUIDBasedRepositoryService _osgiFactory = new IUUIDBasedRepositoryService() {
        
        /**
         * @param config
         *   the servlet config to help create the repository
         * @return a new IUUIDBasedRepository object
         * @throws ServletException 
         */
        public IUUIDBasedRepository createRepository(ServletConfig config) throws ServletException {
            BundleContext bundleContext = ((BundleReference) getClass().
                    getClassLoader()).getBundle().getBundleContext();
            ServiceReference ref = bundleContext.getServiceReference(
                    IUUIDBasedRepositoryService.class.getName());
            if (ref == null) {
                _logger.info("No service registered for IUUIDBasedRepositoryService");
                throw new UnavailableException(
                        "No service registered for IUUIDBasedRepositoryService", 0);
            }
            IUUIDBasedRepositoryService service = (IUUIDBasedRepositoryService) 
                bundleContext.getService(ref);
            return service.createRepository(config);
        }
    };
    
    /**
     * The repository used to save and load models.
     */
    private IUUIDBasedRepository _repository;
    
    
    /**
     * Initiates the repository servlet.
     * 
     * The behavior is based on the initialization parameters read from web.xml
     * 
     * repositoryServiceType:
     * -null
     * The classloader of the class is investigated to see if we are operating
     * in a OSGi context. If yes we use osgi.
     * -default
     * We will use the _factory static field to create the repository.
     * -osgi
     * We will use the _osgiFactory to create the repository.
     * 
     * Please refer to the documentation of both fields for further information.
     * 
     */
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        try {
            String repoType = config.getInitParameter("repositoryServiceType");
            if (repoType == null) {
                // look up the current class loader
                if (UUIDBasedRepositoryServlet.class.getClassLoader() 
                        instanceof BundleReference) {
                    repoType = "osgi";
                } else {
                    repoType = "default";
                }
            }
            if ("default".equals(repoType)) {
                _repository = _factory.createRepository(config);
            } else if ("osgi".equals(repoType)){
                _repository = _osgiFactory.createRepository(config);
            } else {
                throw new IllegalArgumentException("Invalid value for init " +
                		"parameter repositoryServiceType : " + repoType);
            }
            
            _repository.configure(this);
        } catch (Exception e) {
            if (e instanceof ServletException) {
                throw (ServletException) e;
            }
            throw new ServletException(e);
        }
        
    }
    
    /**
     * This method populates the response with the contents of the model.
     * It expects two parameters to be passed via the request, uuid and profile.
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (resp.isCommitted()) {
        	return;//called twice... need to clean-up the FilterChainImpl that is quite wrong.
        }
    	String uuid = req.getParameter("uuid");
        if (uuid == null) {
            throw new ServletException("uuid parameter required");
        }
        IDiagramProfile profile = getProfile(req, req.getParameter("profile"));
        ByteArrayInputStream input = new ByteArrayInputStream(
            _repository.load(req, uuid, profile.getSerializedModelExtension()));
        byte[] buffer = new byte[4096];
        int read;

        while ((read = input.read(buffer)) != -1) {
            resp.getOutputStream().write(buffer, 0, read);
        }
    }

    /**
     * This method saves the model contents based on the json sent as the
     * body of the request.
     * 
     * The json should look like:
     * 
     * { "data" : ....,
     *   "svg" : <svg>...</svg>,
     *   "uuid" : "1234",
     *   "profile" : "default"
     * }
     * 
     * The data is the json representation of the model.
     * The svg represents the graphical model as a SVG format.
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
        throws ServletException, IOException {
        if (resp.isCommitted()) {
        	return;//called twice... need to clean-up the FilterChainImpl that is quite wrong.
        }
        
        BufferedReader reader = req.getReader();
        StringWriter reqWriter = new StringWriter();
        char[] buffer = new char[4096];
        int read;
        while ((read = reader.read(buffer)) != -1) {
            reqWriter.write(buffer, 0, read);
        }
        
        String data = reqWriter.toString();
        try {
            JSONObject jsonObject = new JSONObject(data);
            
            String json = (String) jsonObject.get("data");
            String svg = (String) jsonObject.get("svg");
            String uuid = (String) jsonObject.get("uuid");
            String profileName = (String) jsonObject.get("profile");
            boolean autosave = jsonObject.getBoolean("savetype");
            
            json = json.replaceAll("<", "&lt;");

            if (_logger.isDebugEnabled()) {
                _logger.debug("Calling UUIDBasedRepositoryServlet doPost()...");
                _logger.debug("autosave: " + autosave);
            }
            
            IDiagramProfile profile = getProfile(req, profileName);
            if (_logger.isDebugEnabled()) {
                _logger.debug("Begin saving the diagram");
            }
            _repository.save(req, uuid, json, svg, profile, autosave);
            if (_logger.isDebugEnabled()) {
                _logger.debug("Finish saving the diagram");
            }
        } catch (JSONException e1) {
            throw new ServletException(e1);
        } catch (DiagramValidationException e) {
            // set the error JSON to response
            resp.setCharacterEncoding("utf-8");
            resp.getWriter().write(e.getErrorJsonStr());
        }
    }
    
    /**
     * FIXME this needs to go as it duplicates part of the functionality for
     * profiles resolution. We should only write this code once.
     */
    private IDiagramProfile getProfile(HttpServletRequest req, String profileName) {
        IDiagramProfile profile = null;
        // get the profile, either through the OSGi DS or by using the default one:
        if (getClass().getClassLoader() instanceof BundleReference) {
            BundleContext bundleContext = ((BundleReference) getClass().getClassLoader()).getBundle().getBundleContext();
            ServiceReference ref = bundleContext.getServiceReference(IDiagramProfileService.class.getName());
            if (ref == null) {
                throw new IllegalArgumentException(profileName + " is not registered");
            }
            IDiagramProfileService service = (IDiagramProfileService) bundleContext.getService(ref);
            profile = service.findProfile(req, profileName);
        } else if ("default".equals(profileName)) {
            profile = new DefaultProfileImpl(getServletContext(), false);
        } else {
            // check w/o BundleReference
            IDiagramProfileService service = new ProfileServiceImpl();
            service.init(getServletContext());
            profile = service.findProfile(req, profileName);
            if(profile == null) {
                throw new IllegalArgumentException("Cannot determine the profile to use for interpreting models");
            }
        }
        return profile;
    }
    
}
