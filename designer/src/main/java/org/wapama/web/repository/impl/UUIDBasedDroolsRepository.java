/***************************************
 * Copyright (c) Tihomir Surdilovic 2010
 * Copyright (c) Intalio, Inc 2011
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
package org.wapama.web.repository.impl;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.wapama.web.profile.IDiagramProfile;
import org.wapama.web.repository.DiagramValidationException;
import org.wapama.web.repository.IUUIDBasedRepository;


/**
 * 
 * @author  Tihomir Surdilovic
 * @author Antoine Toulme
 *   added copyright and comments
 * 
 * The implementation of the UUID repository for Drools Guvnor.
 * 
 * Guvnor saves the model using an external frame that loads the frame.
 * 
 *
 */
public class UUIDBasedDroolsRepository implements IUUIDBasedRepository {

    /**
     * Logger for this class.
     */
    private static final Logger _logger = 
        LoggerFactory.getLogger(UUIDBasedDroolsRepository.class);
    
    /**
     * Configure the repository in the context of the servlet
     * @param servlet the servlet which will use this repository.
     */
    public void configure(HttpServlet servlet) {
        
    }

    /**
     * @param req the request from the user.
     * @param uuid the id of the model.
     * @param ext the file extension to apply to the model.
     * @return the model as a set of bytes.
     */
    public byte[] load(HttpServletRequest req, String uuid, String ext) {
        return new byte[0];
    }

    /**
     * Saves the model inside the repository.
     * @param req the request from the user.
     * @param uuid the id of the model
     * @param json the json model
     * @param svg the svg representation of the model
     * @param profile the profile
     * @throws DiagramValidationException 
     */
    public void save(HttpServletRequest req, String uuid, String json,
            String svg, IDiagramProfile profile, Boolean autosave) 
            throws DiagramValidationException {
   
    }
    
}
