/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intalio.web.server;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.antlr.stringtemplate.StringTemplate;
import org.apache.log4j.Logger;


/**
 * Service in charge to create Working-Set and rules XML definitions that can be 
 * passed to Guvnor to customize the behavior of the Rule Editor
 * @author esteban.aliverti
 */
public class GuvnorTemplatesServlet extends HttpServlet{
    
    public final static String WORKING_SET_TEMPLATE_PATH = "guvnorTemplates/workingSet.xml";
    public final static String BRL_TEMPLATE_PATH = "guvnorTemplates/initialBRL.xml";
    
    public final static String GUVNOR_CONFIG_DATA_SEPARATOR = "--@--";
    
    private static final long serialVersionUID = 1L;
    private static final Logger _logger = Logger
            .getLogger(GuvnorTemplatesServlet.class);

    
    private String workingSetTemplate;
    private String brlTemplate;
    private String customFormProviderURL;
    
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        workingSetTemplate = config.getServletContext().getRealPath("/" + WORKING_SET_TEMPLATE_PATH);
        brlTemplate = config.getServletContext().getRealPath("/" + BRL_TEMPLATE_PATH);
        customFormProviderURL = config.getInitParameter("customFormProviderURL");
    }
    
    
    /**
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException 
     */
    private void processRequest(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        String action = req.getParameter("action");
        
        if ("createWorkingSetWithMandatoryConstraint".equals(action)){
            this.createWorkingSetWithMandatoryConstraint(req, resp);
        }else if ("createInitialBRL".equals(action)){
            this.createInitialBRL(req, resp);
        }
        
    }
    
    /**
     * Creates a working set definition in XML according to the passed values.
     * The working set definition will contain 2 field constraints for each
     * passed field:
     *  - MandatoryFieldConstraint
     *  - Matches Constraint
     * The accepted HTTP parameters are (1 or more):
     *  - 'config': a String with the format "{validFact--@--factField--@--matchesString}"
     *              where:
     *                  - 'validFact' is the name of a Model class in Guvnor
     *                  - 'factField' is the field where the constraints are going to be applied
     *                  - 'matchesString' is the String used for the Match Constraint. 
     *                     If more than one parameter with the same 'validFact' and 'factField'
     *                     are passed, an OR is added to the existing 'matchesString'
     * 
     * @param req
     * @param resp 
     */
    private void createWorkingSetWithMandatoryConstraint(HttpServletRequest req, HttpServletResponse resp) throws IOException{
        String[] configs = req.getParameterValues("config");
        
        if (configs == null){
            throw new IllegalArgumentException("'config' parameter is mandatory!");
        }
        
        //get the template
        StringTemplate workingSetStringTemplate = new StringTemplate(readFile(workingSetTemplate));
        
        //Group the config objects according to its validFact and factField
        Map<String,GuvnorConfigData> groupedWorkingSetConfigData = new HashMap<String, GuvnorConfigData>();
        for (int i = 0; i < configs.length; i++) {
            String config = configs[i];
            GuvnorConfigData workingSetConfigData = this.parseGuvnorConfigData(config);
            
            String key = workingSetConfigData.getValidFact()+"."+workingSetConfigData.getFactField();
            if (groupedWorkingSetConfigData.containsKey(key)){
                //concat the new constraint
                GuvnorConfigData existingWorkingSetConfigData = groupedWorkingSetConfigData.get(key);
                existingWorkingSetConfigData.setMatchesValue(existingWorkingSetConfigData.getMatchesValue()+"|"+workingSetConfigData.getMatchesValue());
            }else{
                groupedWorkingSetConfigData.put(key, workingSetConfigData);
            }
        }
        
        //for each grouped config, parse its content and create template data
        List<GuvnorConfigData> templateData = new ArrayList<GuvnorConfigData>();
        for (GuvnorConfigData workingSetConfigData : groupedWorkingSetConfigData.values()) {
            templateData.add(workingSetConfigData);
        }
        
        //construct the url for custom form configuration
        String url = req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort()+customFormProviderURL;
        
        //add attribute to template
        workingSetStringTemplate.setAttribute("data", templateData);
        workingSetStringTemplate.setAttribute("customFormURL", url);
        
        //prepare response
        resp.setHeader("Content-Type", "application/xml");
        resp.setHeader("charset", "UTF-8");

        //send response
        resp.getWriter().print(workingSetStringTemplate.toString());
    }
    
    private void createInitialBRL(HttpServletRequest req, HttpServletResponse resp) throws IOException{
        String[] configs = req.getParameterValues("config");
        String ruleName = req.getParameter("ruleName");
        
        if (configs == null){
            throw new IllegalArgumentException("'config' parameter is mandatory!");
        }
        if (ruleName == null){
            throw new IllegalArgumentException("'ruleName' parameter is mandatory!");
        }
        
        //get the template
        StringTemplate brlStringTemplate = new StringTemplate(readFile(brlTemplate));
        
        //parse the configuration parameter and add the result in a list
        List<GuvnorConfigData> templateData = new ArrayList<GuvnorConfigData>();
        for (int i = 0; i < configs.length; i++) {
            String config = configs[i];
            GuvnorConfigData brlConfigData = this.parseGuvnorConfigData(config);
            templateData.add(brlConfigData);
        }
        
        //add data to template
        brlStringTemplate.setAttribute("ruleName", ruleName);
        brlStringTemplate.setAttribute("data", templateData);
        
        
        //prepare response
        resp.setHeader("Content-Type", "application/xml");
        resp.setHeader("charset", "UTF-8");

        //send response
        resp.getWriter().print(brlStringTemplate.toString());
    }
    
    private GuvnorConfigData parseGuvnorConfigData(String stringData){
        
        
        //remove { and }
        stringData = stringData.substring(1, stringData.length()-1);
        
        //separate elements
        String[] data = stringData.split(GUVNOR_CONFIG_DATA_SEPARATOR);
        
        if (data.length != 4){
            throw new IllegalArgumentException("Expected 4 elements in '"+stringData+"', but "+data.length+" were found");
        }
        
        GuvnorConfigData configData = new GuvnorConfigData();
         
        configData.setValidFact(data[0].trim());
        configData.setFactField(data[1].trim());
        configData.setMatchesId(data[2].trim());
        configData.setMatchesValue(data[3].trim());
        
        return configData;
    }
    
    private String readFile(String pathname) throws IOException {
        StringBuilder fileContents = new StringBuilder();
        
        BufferedReader reader = new BufferedReader(new FileReader(pathname));
        try {
            String line;
            while ((line = reader.readLine()) != null){
                fileContents.append(line);
                fileContents.append("\n");
            }
            return fileContents.toString();
        } finally {
            reader.close();
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.processRequest(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.processRequest(req, resp);
    }
    
}
class GuvnorConfigData{
    private String validFact;
    private String factField;
    private String matchesId;
    private String matchesValue;

    public String getFactField() {
        return factField;
    }

    public void setFactField(String factField) {
        this.factField = factField;
    }

    public String getValidFact() {
        return validFact;
    }

    public void setValidFact(String validFact) {
        this.validFact = validFact;
    }

    public String getMatchesId() {
        return matchesId;
    }

    public void setMatchesId(String matchesId) {
        this.matchesId = matchesId;
    }

    public String getMatchesValue() {
        return matchesValue;
    }

    public void setMatchesValue(String matchesValue) {
        this.matchesValue = matchesValue;
    }
    
}