/*
 * To change this template, choose Tools | Templates and open the template in
 * the editor.
 */
package com.intalio.bpmn2.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonToken;
import org.eclipse.bpmn2.*;
import org.eclipse.bpmn2.di.BPMNPlane;
import org.eclipse.bpmn2.di.BPMNShape;
import org.eclipse.dd.dc.Bounds;

/**
 * transforms BPMN 2.0 elements for KMR into JSON.
 * @author esteban
 */
public class KMRJsonMarshaller extends Bpmn2JsonMarshaller {
    private Map<String,Association> _diagramAssociations = new HashMap<String, Association>();
    
    /**
     *
     * "resourceId": "_380D5186-D776-45CC-B238-C662AF6EF1FF", "properties": {
     * "name": "", "documentation": "", "categories": "", "pool": "", "lanes":
     * "", "modelentity": "Allergy", "fieldconstraint": "code", "code": "123456"
     * }, "stencil": { "id": "Model_Allergy" }, "childShapes": [
     *
     * ], "outgoing": [ { "resourceId": "_4D68EBBF-080E-4748-9FBF-342D3AA78C41"
     * } ], "bounds": { "lowerRight": { "x": 313, "y": 142 }, "upperLeft": { "x":
     * 225, "y": 45 } }, "dockers": [
     *
     * ]
     * }
     *
     */
    @Override
    protected void marshallTextAnnotation(TextAnnotation textAnnotation, BPMNPlane plane, JsonGenerator generator, int xOffset, int yOffset, String preProcessingData, Definitions def)  throws JsonGenerationException, IOException{
        //is this a kmr's entity node?
        if (textAnnotation.getText() != null && textAnnotation.getText().startsWith("KMRCustom--")) {
            
            String name = textAnnotation.getText();
            String[] nameParts = name.split("--");
            
            if (nameParts.length != 4){
                //if only 1 param is missing, then try to put a mock value 
                //for the missing parameter
                if (nameParts.length == 3){
                    String[] newArgs = new String[4];
                    System.arraycopy(nameParts, 0, newArgs, 0, nameParts.length);
                    newArgs[3] = "Unknown";
                    nameParts = newArgs;
                }else{
                    throw new IllegalStateException("Malformed KMR node: "+textAnnotation.getText());
                }
            }
            
            Map<String, Object> properties = new LinkedHashMap<String, Object>();
            properties.put("name", name);
            properties.put("modelentity", nameParts[1]);
            properties.put(nameParts[2], nameParts[3]);

            marshallProperties(properties, generator);
            
            generator.writeObjectFieldStart("stencil");
	    generator.writeObjectField("id", "Model_"+nameParts[1]);
	    generator.writeEndObject();
	    generator.writeArrayFieldStart("childShapes");
	    generator.writeEndArray();
	    generator.writeArrayFieldStart("outgoing");
            generator.writeStartObject();
            generator.writeObjectField("resourceId", findOutgoingAssociation(plane, textAnnotation).getId());
            generator.writeEndObject();
	    generator.writeEndArray();
	    
	    Bounds bounds = ((BPMNShape) findDiagramElement(plane, textAnnotation)).getBounds();
	    generator.writeObjectFieldStart("bounds");
	    generator.writeObjectFieldStart("lowerRight");
	    generator.writeObjectField("x", bounds.getX() + bounds.getWidth() - xOffset);
	    generator.writeObjectField("y", bounds.getY() + bounds.getHeight() - yOffset);
	    generator.writeEndObject();
	    generator.writeObjectFieldStart("upperLeft");
	    generator.writeObjectField("x", bounds.getX() - xOffset);
	    generator.writeObjectField("y", bounds.getY() - yOffset);
	    generator.writeEndObject();
	    generator.writeEndObject();
            
        } else if(textAnnotation.getText() != null && textAnnotation.getText().startsWith("KMRCustomCohort--")){ 
            try{
                Map<String, Object> properties = new LinkedHashMap<String, Object>();

                //is this a kmr's cohort entity node?
                String text = textAnnotation.getText();

                //discard first token: KMRCustomCohort--
                text = text.substring(text.indexOf("--")+2);

                JsonParser jsonParser = new JsonFactory().createJsonParser(text);
                JsonToken token;
                String field = null;
                while ((token = jsonParser.nextToken()) != null){
                    if (token == JsonToken.FIELD_NAME){
                        field = jsonParser.getText();
                    }else if (token == JsonToken.VALUE_STRING){
                        properties.put(field, jsonParser.getText());
                    }
                }
                
                marshallProperties(properties, generator);

                generator.writeObjectFieldStart("stencil");
                generator.writeObjectField("id", "Cohort_"+properties.get("cohortentity"));
                generator.writeEndObject();
                generator.writeArrayFieldStart("childShapes");
                generator.writeEndArray();
                generator.writeArrayFieldStart("outgoing");
    //            generator.writeStartObject();
    //            generator.writeObjectField("resourceId", findOutgoingAssociation(plane, textAnnotation).getId());
    //            generator.writeEndObject();
                generator.writeEndArray();

                Bounds bounds = ((BPMNShape) findDiagramElement(plane, textAnnotation)).getBounds();
                generator.writeObjectFieldStart("bounds");
                generator.writeObjectFieldStart("lowerRight");
                generator.writeObjectField("x", bounds.getX() + bounds.getWidth() - xOffset);
                generator.writeObjectField("y", bounds.getY() + bounds.getHeight() - yOffset);
                generator.writeEndObject();
                generator.writeObjectFieldStart("upperLeft");
                generator.writeObjectField("x", bounds.getX() - xOffset);
                generator.writeObjectField("y", bounds.getY() - yOffset);
                generator.writeEndObject();
                generator.writeEndObject();
            } catch (Exception e){
                e.printStackTrace();
                //in order to be able to open the process, teat this as a regular text annotation
                super.marshallTextAnnotation(textAnnotation, plane, generator, xOffset, yOffset, preProcessingData, def);
            }
        }else {
            //no, just a regular Text Annotation
            super.marshallTextAnnotation(textAnnotation, plane, generator, xOffset, yOffset, preProcessingData, def);
        }
    }

    
    
    /*
    protected Association findOutgoingAssociation(BPMNPlane plane, BaseElement baseElement) {
    	Association result = _diagramAssociations.get(baseElement.getId());
    	if (result != null) {
    		return result;
    	}
        if (!(plane.getBpmnElement() instanceof org.eclipse.bpmn2.Process)){
            throw new IllegalArgumentException("Don't know how to get associations from a non-Process Diagram");
        }
        
        org.eclipse.bpmn2.Process process = (org.eclipse.bpmn2.Process) plane.getBpmnElement();
        
        for (Artifact artifact : process.getArtifacts()) {
            if (artifact instanceof Association){
                Association association = (Association) artifact;
                if (association.getSourceRef() == baseElement){
                    _diagramAssociations.put(baseElement.getId(), association);
                    return association;
                }
            }
        }
        
        throw new IllegalArgumentException(
                "Could not find association information for " + baseElement.getId());
    }*/

    @Override
    protected void marshallNode(FlowNode node, Map<String, Object> properties, String stencil, BPMNPlane plane, JsonGenerator generator, int xOffset, int yOffset) throws JsonGenerationException, IOException {
        
        //remove any auto-generated defeater rule
        if (stencil.equalsIgnoreCase("StartConditionalEvent")){
            Object conditionObject = properties.get("conditionexpression");
            if (conditionObject != null && !conditionObject.toString().trim().equals("") && conditionObject.toString().contains("#-#")){
                BufferedReader reader = new BufferedReader(new StringReader(conditionObject.toString()));
                StringBuilder finalCondition = new StringBuilder();
                String line;
                boolean startSavingLines = false;
                while ((line = reader.readLine())!=null){
                    if (line.startsWith("#-#")){
                        startSavingLines = true;
                    }
                    
                    if (startSavingLines){
                        finalCondition.append(line);
                        finalCondition.append("\n");
                    }
                }
                
                properties.put("conditionexpression", finalCondition.toString());
            }
        }
        
        super.marshallNode(node, properties, stencil, plane, generator, xOffset, yOffset);
    }
    
}
