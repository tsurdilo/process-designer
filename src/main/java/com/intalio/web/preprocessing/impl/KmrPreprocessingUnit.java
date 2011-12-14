/**
 * *************************************
 * Copyright (c) Intalio, Inc 2010
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
***************************************
 */
package com.intalio.web.preprocessing.impl;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;

import org.antlr.stringtemplate.StringTemplate;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.drools.process.core.ParameterDefinition;
import org.drools.process.core.impl.ParameterDefinitionImpl;
import org.jbpm.process.workitem.WorkDefinitionImpl;
import org.drools.process.core.datatype.DataType;
import org.mvel2.MVEL;

import sun.misc.BASE64Encoder;

import com.intalio.web.preprocessing.IDiagramPreprocessingUnit;
import com.intalio.web.profile.IDiagramProfile;
import com.intalio.web.profile.impl.ExternalInfo;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.Collections;
import javax.xml.namespace.QName;
import org.antlr.stringtemplate.AttributeRenderer;
import org.apache.abdera.Abdera;
import org.apache.abdera.model.Document;
import org.apache.abdera.model.Entry;
import org.apache.abdera.model.ExtensibleElement;
import org.apache.abdera.model.Feed;
import org.apache.abdera.protocol.Response.ResponseType;
import org.apache.abdera.protocol.client.AbderaClient;
import org.apache.abdera.protocol.client.ClientResponse;
import org.apache.abdera.protocol.client.RequestOptions;

/**
 * KmrPreprocessingUnit - preprocessing unit for the jbpm profile
 *
 * @author Esteban Aliverti
 */
public class KmrPreprocessingUnit implements IDiagramPreprocessingUnit {

    private static final Logger _logger =
            Logger.getLogger(KmrPreprocessingUnit.class);
    public final static String STENCILSET_PATH = "stencilsets";
    public static final String WORKITEM_DEFINITION_EXT = "wid";
    private String stencilPath;
    private String origStencilFilePath;
    private String stencilFilePath;
    private String outData = "";
    private String workitemSVGFilePath;
    private String origWorkitemSVGFile;
    private String modelSVGFilePath;
    private String origModelSVGFile;
    private IDiagramProfile profile;

    public KmrPreprocessingUnit(ServletContext servletContext) {
        stencilPath = servletContext.getRealPath("/" + STENCILSET_PATH);
        origStencilFilePath = stencilPath + "/kmr/stencildata/" + "kmr.orig.json";
        stencilFilePath = stencilPath + "/kmr/" + "kmr.json";
        workitemSVGFilePath = stencilPath + "/kmr/view/activity/workitems/";
        origWorkitemSVGFile = workitemSVGFilePath + "workitem.orig";
        modelSVGFilePath = stencilPath + "/kmr/view/model/dynamic/";
        origModelSVGFile = modelSVGFilePath + "model.orig";
    }

    public String getOutData() {
        if (outData != null && outData.length() > 0) {
            if (outData.endsWith(",")) {
                outData = outData.substring(0, outData.length() - 1);
            }
        }
        return outData;
    }

    public void preprocess(HttpServletRequest req, HttpServletResponse res, IDiagramProfile profile) {
        String uuid = req.getParameter("uuid");
        String[] wsUuids = req.getParameterValues("wsUuid");

        this.profile = profile;

        List<String> wsUuidsList = wsUuids == null ? new ArrayList<String>() : Arrays.asList(wsUuids);

        outData = "";
        // check with guvnor to see what packages exist
        List<String> packageNames = findPackages(profile);

        //get the package where the asset with the given UUID is defined
        String packageName = findPackageForProcessUUID(uuid, packageNames);

        //Get back the list of WI configs names and content of the given package
        Map<String, List<WorkDefinitionImpl>> workitemConfigInfo = null;
        try {
            workitemConfigInfo = findWorkitemInfoForPackage(packageName);
        } catch (Exception ex) {
            _logger.error("Error retrieving Work Item definitions", ex);
        }

        // set the out parameter and create workDefinitions
        Map<String, WorkDefinitionImpl> workDefinitions = new HashMap<String, WorkDefinitionImpl>();
        for (Map.Entry<String, List<WorkDefinitionImpl>> definition : workitemConfigInfo.entrySet()) {

            for (WorkDefinitionImpl workDefinitionImpl : definition.getValue()) {
                //concatenate outData
                outData += workDefinitionImpl.getName() + ",";

                //convert from List<WorkDefinitionImpl> to Map<String,WorkDefinitionImpl>
                //so it can be used in template
                workDefinitions.put(workDefinitionImpl.getName(), workDefinitionImpl);
            }

        }

        //get the available classes according to the passed working-sets
        List<String> workingSetsClassNames = new ArrayList(getWorkingSetsClasses(packageName, wsUuidsList, profile));
        Collections.sort(workingSetsClassNames);


        // parse the profile json to include config data
        try {
            // parse the orig stencil data with workitem definitions
            StringTemplate workItemTemplate = new StringTemplate(readFile(origStencilFilePath));
            workItemTemplate.setAttribute("workitemDefs", workDefinitions);

            workItemTemplate.setAttribute("workingSetsClassNames", workingSetsClassNames);

            workItemTemplate.registerRenderer(String.class, new AttributeRenderer() {

                public String toString(Object o) {
                    return o.toString();
                }

                public String toString(Object o, String format) {
                    if (format.equals("upper")) {
                        return o.toString().toUpperCase();
                    }
                    throw new UnsupportedOperationException("Unsuported format " + format);
                }
            });

            // delete stencil data json if exists
            deletefile(stencilFilePath);
            // copy our results as the stencil json data
            createAndWriteToFile(stencilFilePath, workItemTemplate.toString());
        } catch (Exception e) {
            _logger.error("Failed to setup workitems : " + e.getMessage());
        }
        // create and parse the view svg to include WorkItem data
        createAndParseWorkItemSVGs(workDefinitions);

        // create and parse the view svg to include Model data
        createAndParseModelSVGs(packageName, workingSetsClassNames);
    }

    @SuppressWarnings("unchecked")
    private void createAndParseWorkItemSVGs(Map<String, WorkDefinitionImpl> workDefinitions) {
        // first delete all existing workitem svgs
        Collection<File> workitemsvgs = FileUtils.listFiles(new File(workitemSVGFilePath), new String[]{"svg"}, true);
        if (workitemsvgs != null) {
            for (File wisvg : workitemsvgs) {
                deletefile(wisvg);
            }
        }
        try {
            for (Map.Entry<String, WorkDefinitionImpl> definition : workDefinitions.entrySet()) {
                StringTemplate workItemTemplate = new StringTemplate(readFile(origWorkitemSVGFile));
                workItemTemplate.setAttribute("workitemDef", definition.getValue());
                String fileToWrite = workitemSVGFilePath + definition.getValue().getName() + ".svg";
                createAndWriteToFile(fileToWrite, workItemTemplate.toString());
            }
        } catch (Exception e) {
            _logger.error("Failed to setup workitem svg images : " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    private void createAndParseModelSVGs(String packageName, List<String> workingSetsClassNames) {

        String baseURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile)
                + "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"));

        String baseIconURL = baseURL + "/rest/packages/" + packageName + "/assets/";

        // first delete all existing model svgs
        Collection<File> modelsvgs = FileUtils.listFiles(new File(modelSVGFilePath), new String[]{"svg"}, true);
        if (modelsvgs != null) {
            for (File modelsvg : modelsvgs) {
                deletefile(modelsvg);
            }
        }
        try {
            StringTemplate modelTemplate = new StringTemplate(readFile(origModelSVGFile));
            for (String className : workingSetsClassNames) {
                modelTemplate.setAttribute("modelClassName", className);
                modelTemplate.setAttribute("modelClassNameIconURL", baseIconURL + className + ".ICON/binary");
                String fileToWrite = modelSVGFilePath + className + ".svg";
                createAndWriteToFile(fileToWrite, modelTemplate.toString());
                modelTemplate.reset();
            }
        } catch (Exception e) {
            _logger.error("Failed to setup model svg images : " + e.getMessage());
        }
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    private List<WorkDefinitionImpl> evaluateWorkDefinitionContent(String content) {

        List<WorkDefinitionImpl> result = new ArrayList<WorkDefinitionImpl>();

        List<Map<String, Object>> workDefinitionsMaps = (List<Map<String, Object>>) MVEL.eval(content, new HashMap());

        for (Map<String, Object> workDefinitionMap : workDefinitionsMaps) {
            if (workDefinitionMap != null) {
                WorkDefinitionImpl workDefinition = new WorkDefinitionImpl();
                workDefinition.setName((String) workDefinitionMap.get("name"));
                workDefinition.setDisplayName((String) workDefinitionMap.get("displayName"));
                workDefinition.setIcon((String) workDefinitionMap.get("icon"));
                workDefinition.setCustomEditor((String) workDefinitionMap.get("customEditor"));
                Set<ParameterDefinition> parameters = new HashSet<ParameterDefinition>();
                if (workDefinitionMap.get("parameters") != null) {
                    Map<String, DataType> parameterMap = (Map<String, DataType>) workDefinitionMap.get("parameters");
                    if (parameterMap != null) {
                        for (Map.Entry<String, DataType> entry : parameterMap.entrySet()) {
                            parameters.add(new ParameterDefinitionImpl(entry.getKey(), entry.getValue()));
                        }
                    }
                    workDefinition.setParameters(parameters);
                }

                if (workDefinitionMap.get("results") != null) {
                    Set<ParameterDefinition> results = new HashSet<ParameterDefinition>();
                    Map<String, DataType> resultMap = (Map<String, DataType>) workDefinitionMap.get("results");
                    if (resultMap != null) {
                        for (Map.Entry<String, DataType> entry : resultMap.entrySet()) {
                            results.add(new ParameterDefinitionImpl(entry.getKey(), entry.getValue()));
                        }
                    }
                    workDefinition.setResults(results);
                }
                if (workDefinitionMap.get("defaultHandler") != null) {
                    workDefinition.setDefaultHandler((String) workDefinitionMap.get("defaultHandler"));
                }
                if (workDefinitionMap.get("dependencies") != null) {
                    workDefinition.setDependencies(((List<String>) workDefinitionMap.get("dependencies")).toArray(new String[0]));
                }
                result.add(workDefinition);
            }
        }

        return result;
    }

    private String getWorkitemConfigContent(String packageName, String configInfoName){
        String content = "";

        String baseURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile) +
            "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"));

        String widURL = baseURL + "/rest/packages/"+encodeURIComponent(packageName)+"/assets/"+encodeURIComponent(configInfoName)+"/source";

        Abdera abdera = new Abdera();
        AbderaClient client = new AbderaClient(abdera);

        RequestOptions options = this.createBaseOptions(client);
        options.setAccept("text/plain"); //even if we know is json

        ClientResponse resp = client.get(widURL, options);

        if (resp.getType() != ResponseType.SUCCESS) {
            throw new IllegalStateException("Error occurred when retrieving Work Item Config from package: " + resp.getStatusText());
        }

        try {
            InputStream in = resp.getInputStream();
            StringWriter writer = new StringWriter();
            IOUtils.copy(in, writer, "UTF-8");
            content = writer.toString();
        } catch (Exception e) {
            // we dont want to barf..just log that error happened
            _logger.error(e.getMessage());
        }

        return content;
    }

    private String findPackageForProcessUUID(String uuid, List<String> packageNames) {

        String baseURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile)
                + "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"));

        for (String nextPackage : packageNames) {
            //The UUID must be of a bpmn2 asset
            String processesURL = baseURL + "/rest/packages/" + nextPackage + "/assets?format=bpmn2";

            Abdera abdera = new Abdera();
            AbderaClient client = new AbderaClient(abdera);

            RequestOptions options = this.createBaseOptions(client);
            options.setAccept("application/atom+xml");

            ClientResponse resp = client.get(processesURL, options);

            if (resp.getType() != ResponseType.SUCCESS) {
                throw new IllegalStateException("Error occurred when retrieving Processes from package: " + resp.getStatusText());
            }

            Document<Feed> document = resp.getDocument();

            //check the UUID of the returned assets to see if the one we 
            //are looking for is in this package
            for (Entry entry : document.getRoot().getEntries()) {
                ExtensibleElement metadataExtension = entry.getExtension(new QName("", "metadata"));
                String assetUuid = ((ExtensibleElement) metadataExtension.getExtension(new QName("", "uuid"))).getSimpleExtension(new QName("", "value"));
                if (uuid.equals(assetUuid)) {
                    return nextPackage;
                }
            }
        }

        throw new IllegalArgumentException("Couldn't find asset's package!");
    }

    /**
     * Return a Map of &lt;WorkItem title, List<WorkItemDefinition>&gt; for each of
     * the WorkItem definitions present in the package
     * @param packageName
     * @return 
     */
    private Map<String, List<WorkDefinitionImpl>> findWorkitemInfoForPackage(String packageName) {
        String baseURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile)
                + "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"));

        String widsURL = baseURL + "/rest/packages/" + packageName + "/assets?format=" + WORKITEM_DEFINITION_EXT;

        Abdera abdera = new Abdera();
        AbderaClient client = new AbderaClient(abdera);

        RequestOptions options = this.createBaseOptions(client);
        options.setAccept("application/atom+xml");

        ClientResponse resp = client.get(widsURL, options);

        if (resp.getType() != ResponseType.SUCCESS) {
            throw new IllegalStateException("Error occurred when retrieving Work Item definitions from package: " + resp.getStatusText());
        }

        Document<Feed> document = resp.getDocument();

        Map<String, List<WorkDefinitionImpl>> result = new HashMap<String, List<WorkDefinitionImpl>>();
        for (Entry entry : document.getRoot().getEntries()) {
            //get the content of the wid
            String content = this.getWorkitemConfigContent(packageName, entry.getTitle());

            //convert the content to WorkDefinitionImpl
            List<WorkDefinitionImpl> definition = evaluateWorkDefinitionContent(content);

            result.put(entry.getTitle(), definition);
        }

        return result;
    }

    private List<String> findPackages(IDiagramProfile profile) {
        List<String> packages = new ArrayList<String>();

        String packagesURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile)
                + "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"))
                + "/rest/packages/";

        Abdera abdera = new Abdera();
        AbderaClient client = new AbderaClient(abdera);

        RequestOptions options = this.createBaseOptions(client);

        ClientResponse resp = client.get(packagesURL, options);

        if (resp.getType() != ResponseType.SUCCESS) {
            throw new IllegalStateException("Couldn't get list of packages from Guvnor");
        }


        Document<Feed> document = resp.getDocument();
        for (Entry entry : document.getRoot().getEntries()) {
            packages.add(entry.getTitle());
        }

        return packages;

    }

    private Set<String> getWorkingSetsClasses(String packageName, List<String> wsUuids, IDiagramProfile profile) {

        Set<String> result = new HashSet<String>();

        if (wsUuids == null || wsUuids.isEmpty()) {
            return result;
        }

        String baseURL = ExternalInfo.getExternalProtocol(profile) + "://" + ExternalInfo.getExternalHost(profile)
                + "/" + profile.getExternalLoadURLSubdomain().substring(0, profile.getExternalLoadURLSubdomain().indexOf("/"));

        String workingSetsURL = baseURL + "/rest/packages/" + packageName + "/assets?format=workingset";

        Abdera abdera = new Abdera();
        AbderaClient client = new AbderaClient(abdera);

        RequestOptions options = this.createBaseOptions(client);
        options.setAccept("application/atom+xml");

        ClientResponse resp = client.get(workingSetsURL, options);

        if (resp.getType() != ResponseType.SUCCESS) {
            throw new IllegalStateException("Error occurred when retrieving Working Sets from package: " + resp.getStatusText());
        }

        Document<Feed> document = resp.getDocument();

        //Convert from UUIDs to entry
        List<Entry> workingSetEntries = new ArrayList<Entry>();
        for (Entry entry : document.getRoot().getEntries()) {
            //get the UUID
            ExtensibleElement metadataExtension = entry.getExtension(new QName("", "metadata"));
            String uuid = ((ExtensibleElement) metadataExtension.getExtension(new QName("", "uuid"))).getSimpleExtension(new QName("", "value"));

            if (wsUuids.contains(uuid)) {
                workingSetEntries.add(entry);
            }
        }

        //All the Working-Sets UUID should have its corresponding name...
        //And because all the WS must be in the same package we can
        //do this:
        if (wsUuids.size() != workingSetEntries.size()) {
            _logger.warn("Couldn't find all the requiered working-sets.");
        }

        //for each working-set we need to get the classes names they define
        for (Entry workingSetEntry : workingSetEntries) {
            result.addAll(this.getClassNamesFromWorkingSetEntry(workingSetEntry));
        }

        return result;
    }

    private Set<String> getClassNamesFromWorkingSetEntry(Entry workingSetEntry) {
        Set<String> result = new HashSet<String>();

        //get the url of WS's binary content
        String binaryURL = workingSetEntry.getContentSrc().toString();

        if (binaryURL == null || binaryURL.isEmpty()) {
            throw new IllegalArgumentException("Working Set Entry doesn't have any binary URL");
        }

        //Invoke Guvnor to get the content of the WS.
        Abdera abdera = new Abdera();
        AbderaClient client = new AbderaClient(abdera);

        RequestOptions options = this.createBaseOptions(client);
        options.setAccept("application/octet-stream"); //even if we know is xml

        ClientResponse resp = client.get(binaryURL, options);

        if (resp.getType() != ResponseType.SUCCESS) {
            throw new IllegalStateException("Error occurred when retrieving Working Sets '" + workingSetEntry.getTitle() + "' Content: " + resp.getStatusText());
        }

        try {
            XMLInputFactory factory = XMLInputFactory.newInstance();
            XMLStreamReader reader = factory.createXMLStreamReader(resp.getInputStream());

            boolean parsingValidFacts = false;

            while (reader.hasNext()) {
                switch (reader.next()) {
                    case XMLStreamReader.START_ELEMENT:
                        if ("validFacts".equals(reader.getLocalName())) {
                            parsingValidFacts = true;
                        }
                        if ("string".equals(reader.getLocalName()) && parsingValidFacts) {
                            result.add(reader.getElementText());
                        }
                        break;
                    case XMLStreamReader.END_ELEMENT:
                        parsingValidFacts = false;
                        break;
                }
            }
        } catch (Exception e) {
            // we dont want to barf..just log that error happened
            _logger.error(e.getMessage());
        }

        return result;
    }

    /**
     * Creates default RequestOptions with authentication attribute (if needed).
     * @return 
     */
    private RequestOptions createBaseOptions(AbderaClient client) {

        RequestOptions options = client.getDefaultRequestOptions();

        if (profile.getUsr() != null && profile.getUsr().trim().length() > 0 && profile.getPwd() != null && profile.getPwd().trim().length() > 0) {
            BASE64Encoder enc = new sun.misc.BASE64Encoder();
            String userpassword = profile.getUsr() + ":" + profile.getPwd();
            String encodedAuthorization = enc.encode(userpassword.getBytes());
            options.setAuthorization("Basic " + encodedAuthorization);
        }

        return options;
    }

    private String readFile(String pathname) throws IOException {
        StringBuilder fileContents = new StringBuilder();
        Scanner scanner = new Scanner(new File(pathname));
        String lineSeparator = System.getProperty("line.separator");
        try {
            while (scanner.hasNextLine()) {
                fileContents.append(scanner.nextLine() + lineSeparator);
            }
            return fileContents.toString();
        } finally {
            scanner.close();
        }
    }

    private void deletefile(String file) {
        File f = new File(file);
        boolean success = f.delete();
        if (!success) {
            _logger.info("Unable to delete file :" + file);
        } else {
            _logger.info("Successfully deleted file :" + file);
        }
    }

    private void deletefile(File f) {
        String fname = f.getAbsolutePath();
        boolean success = f.delete();
        if (!success) {
            _logger.info("Unable to delete file :" + fname);
        } else {
            _logger.info("Successfully deleted file :" + fname);
        }
    }

    private void createAndWriteToFile(String file, String content) throws Exception {
        Writer output = null;
        output = new BufferedWriter(new FileWriter(file));
        output.write(content);
        output.close();
        _logger.info("Created file:" + file);
    }

    public static String encodeURIComponent(String s) {
        String result = null;

        try {
            result = URLEncoder.encode(s, "UTF-8").replaceAll("\\+", "%20").replaceAll("\\%21", "!").replaceAll("\\%27", "'").replaceAll("\\%28", "(").replaceAll("\\%29", ")").replaceAll("\\%7E", "~");
        } // This exception should never occur.
        catch (UnsupportedEncodingException e) {
            result = s;
        }

        return result;
    }
}
