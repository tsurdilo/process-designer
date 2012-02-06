/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intalio.web.preprocessing.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;
import org.apache.abdera.model.Document;
import org.apache.abdera.model.Entry;
import org.apache.abdera.model.Feed;
import org.apache.abdera.protocol.client.ClientResponse;
import org.apache.log4j.Logger;

/**
 *
 * @author esteban
 */
public class CohortPreprocessor {
    private static final Logger _logger =
            Logger.getLogger(CohortPreprocessor.class);
    
    public static final String COHORT_DEFINITION_EXT = "cht";
    public static final String COHORT_TYPE_DEFINITION_TAG = "cohortType";
    public static final String COHORT_TYPE_DEFINITION_CLASS_ATTRIBUTE = "class";
    public static final String COHORT_FIELD_DEFINITION_TAG = "field";
    public static final String COHORT_FIELD_DEFINITION_NAME_ATTRIBUTE = "name";
    
    private String packageName;
    private AbderaGuvnorHelper guvnorHelper;

    public CohortPreprocessor(String packageName, AbderaGuvnorHelper guvnorHelper) {
        this.packageName = packageName;
        this.guvnorHelper = guvnorHelper;
    }
    
    /**
     * Returns a Map containing each Class (the key of the Map) defined in all
     * the cht elements present in Guvnor. The value of the Map are the fields
     * of each of the classes.
     * @return 
     */
    public Map<String, Set<String>> getCohortTemplateData(){
        
        List<String> cohortURLs = this.getCohortURLs();
        if (cohortURLs.isEmpty()){
            return new HashMap<String, Set<String>>();
        }
        
        Map<String, Set<String>> result = new HashMap<String, Set<String>>();
        for (String url : cohortURLs) {
            result.putAll(this.getCohortContent(url));
        }
        
        return result;
    }
    
    /**
     * Gets all the .cht entries from Guvnor and creates a list with their binary
     * URLs
     * @return 
     */
    private List<String> getCohortURLs(){
        String processesURL = "/rest/packages/" + packageName + "/assets?format="+COHORT_DEFINITION_EXT;

        ClientResponse resp = null;

        try{
            resp = guvnorHelper.invokeGETGuvnor(processesURL, "application/atom+xml");
        } catch (Exception e){
            throw new IllegalStateException("Error occurred when retrieving Cohort Entries from package: "+packageName, e);
        }

        Document<Feed> document = resp.getDocument();
        
        List<String> cohortSourceURLs = new ArrayList<String>();
        for (Entry entry : document.getRoot().getEntries()) {
            cohortSourceURLs.add(entry.getContentSrc().toString());
        }
        
        return cohortSourceURLs;
    }
    
    /**
     * Retrieves and parses the content of a cohort entry.
     * @return 
     */
    private Map<String,Set<String>> getCohortContent(String url){
        Map<String,Set<String>> data = new HashMap<String,Set<String>>();
        
        ClientResponse resp = null;
        try{
            resp = guvnorHelper.invokeGET(url, "application/octet-stream");
        } catch (Exception e){
            throw new IllegalStateException("Error occurred when retrieving Cohort Entry: "+url, e);
        }
        
        try {
            XMLInputFactory factory = XMLInputFactory.newInstance();
            XMLStreamReader reader = factory.createXMLStreamReader(resp.getInputStream());

            String typeClass = null;
            Set<String> typeClassFields = null;
            while (reader.hasNext()) {
                switch (reader.next()) {
                    case XMLStreamReader.START_ELEMENT:
                        if (COHORT_TYPE_DEFINITION_TAG.equals(reader.getLocalName())) {
                            typeClass = reader.getAttributeValue("", COHORT_TYPE_DEFINITION_CLASS_ATTRIBUTE);
                            if (typeClass == null || typeClass.trim().isEmpty()){
                                throw new IllegalArgumentException("<"+COHORT_TYPE_DEFINITION_TAG+"> element with no "+COHORT_TYPE_DEFINITION_CLASS_ATTRIBUTE+" attribute?");
                            }
                            typeClassFields = new HashSet<String>();
                        }
                        if (COHORT_FIELD_DEFINITION_TAG.equals(reader.getLocalName())) {
                            if (typeClassFields == null){
                                throw new IllegalStateException("Unexpected <"+COHORT_FIELD_DEFINITION_TAG+"> element");
                            }
                            //get only the name of the field
                            String fieldName = reader.getAttributeValue("", COHORT_FIELD_DEFINITION_NAME_ATTRIBUTE);
                            if (fieldName == null || fieldName.trim().isEmpty()){
                                throw new IllegalArgumentException("<"+COHORT_FIELD_DEFINITION_TAG+"> element with no "+COHORT_FIELD_DEFINITION_NAME_ATTRIBUTE+" attribute?");
                            }
                            typeClassFields.add(fieldName);
                        }
                        break;
                    case XMLStreamReader.END_ELEMENT:
                        if (COHORT_TYPE_DEFINITION_TAG.equals(reader.getLocalName())) {
                            if (typeClass == null){
                                throw new IllegalStateException("Unexpected </"+COHORT_TYPE_DEFINITION_TAG+"> element");
                            }
                            //just use the simple class name
                            if(typeClass.contains(".")){
                                typeClass = typeClass.substring(typeClass.lastIndexOf(".")+1, typeClass.length());
                            }
                            data.put(typeClass, typeClassFields);
                            typeClass = null;
                            typeClassFields = null;
                        }
                        break;
                }
            }
        } catch (Exception e) {
            // we dont want to barf..just log that error happened
            _logger.error(e.getMessage());
        }
        
        return data;
    }
}
