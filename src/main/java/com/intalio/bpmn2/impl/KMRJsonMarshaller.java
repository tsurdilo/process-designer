/*
 * To change this template, choose Tools | Templates and open the template in
 * the editor.
 */
package com.intalio.bpmn2.impl;

import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonGenerator;
import org.eclipse.bpmn2.*;
import org.eclipse.bpmn2.di.BPMNPlane;
import org.eclipse.bpmn2.di.BPMNShape;
import org.eclipse.dd.dc.Bounds;

/**
 *
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
    protected void marshallTextAnnotation(TextAnnotation annotation, BPMNPlane plane, JsonGenerator generator, int xOffset, int yOffset, String preProcessingData, Map<String, List<String>> lanesetInfo, Definitions def)  throws JsonGenerationException, IOException{
        //is this a kmr's entity node?
        if (annotation.getText() != null && annotation.getText().startsWith("KMRCustom--")) {
            
            String name = annotation.getText();
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
                    throw new IllegalStateException("Malformed KMR node: "+annotation.getText());
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
            generator.writeObjectField("resourceId", findOutgoingAssociation(plane, annotation).getId());
            generator.writeEndObject();
	    generator.writeEndArray();
	    
	    Bounds bounds = ((BPMNShape) findDiagramElement(plane, annotation)).getBounds();
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
            
        } else {
            //no, just a regular Text Annotation
            super.marshallTextAnnotation(annotation, plane, generator, xOffset, yOffset, preProcessingData, lanesetInfo, def);
        }
    }
    
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
    }
    
}
