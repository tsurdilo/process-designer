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
import java.util.StringTokenizer;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.antlr.stringtemplate.StringTemplate;
import org.apache.log4j.Logger;

/**
 * Service in charge to create Working-Set XML definitions that can be 
 * passed to Guvnor to customize the behavior of the Rule Editor
 * @author esteban.aliverti
 */
public class WorkingSetServlet extends HttpServlet{
    
    public final static String WORKING_SET_TEMPLATE_PATH = "workingSetTemplate/workingSet.xml";
    
    public final static String WORKING_SET_CONFOG_DATA_SEPARATOR = "--@--";
    
    private static final long serialVersionUID = 1L;
    private static final Logger _logger = Logger
            .getLogger(WorkingSetServlet.class);

    
    private String workingSetTemplate;
    
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        workingSetTemplate = config.getServletContext().getRealPath("/" + WORKING_SET_TEMPLATE_PATH);
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
        Map<String,WorkingSetConfigData> groupedWorkingSetConfigData = new HashMap<String, WorkingSetConfigData>();
        for (int i = 0; i < configs.length; i++) {
            String config = configs[i];
            WorkingSetConfigData workingSetConfigData = this.parseWorkingSetConfigData(config);
            
            String key = workingSetConfigData.getValidFact()+"."+workingSetConfigData.getFactField();
            if (groupedWorkingSetConfigData.containsKey(key)){
                //concat the new constraint
                WorkingSetConfigData existingWorkingSetConfigData = groupedWorkingSetConfigData.get(key);
                existingWorkingSetConfigData.setMatchesString(existingWorkingSetConfigData.getMatchesString()+"|"+workingSetConfigData.getMatchesString());
            }else{
                groupedWorkingSetConfigData.put(key, workingSetConfigData);
            }
        }
        
        //for each grouped config, parse its content and create template data
        List<WorkingSetConfigData> templateData = new ArrayList<WorkingSetConfigData>();
        for (WorkingSetConfigData workingSetConfigData : groupedWorkingSetConfigData.values()) {
            templateData.add(workingSetConfigData);
        }
        
       
        //add attribute to template
        workingSetStringTemplate.setAttribute("data", templateData);
        
        //prepare response
        resp.setHeader("Content-Type", "application/xml");
        resp.setHeader("charset", "UTF-8");

        //send response
        resp.getWriter().print(workingSetStringTemplate.toString());
    }
    
    private WorkingSetConfigData parseWorkingSetConfigData(String stringData){
        WorkingSetConfigData configData = new WorkingSetConfigData();
        
        //remove { and }
        stringData = stringData.substring(1, stringData.length()-1);
        
        //separate elements
        String[] data = stringData.split(WORKING_SET_CONFOG_DATA_SEPARATOR);
        if (data.length != 3 ){
            throw new IllegalArgumentException("Expected 3 elements in '"+stringData+"', but "+data+" were found");
        }
        
        configData.setValidFact(data[0].trim());
        configData.setFactField(data[1].trim());
        configData.setMatchesString(data[2].trim());
        
        return configData;
    }
    
    private String readFile(String pathname) throws IOException {
        StringBuilder fileContents = new StringBuilder();
        
        BufferedReader reader = new BufferedReader(new FileReader(pathname));
        try {
            String line = null;
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

class WorkingSetConfigData{
    private String validFact;
    private String factField;
    private String matchesString;

    public String getFactField() {
        return factField;
    }

    public void setFactField(String factField) {
        this.factField = factField;
    }

    public String getMatchesString() {
        return matchesString;
    }

    public void setMatchesString(String matchesString) {
        this.matchesString = matchesString;
    }

    public String getValidFact() {
        return validFact;
    }

    public void setValidFact(String validFact) {
        this.validFact = validFact;
    }
    
}
