package com.intalio.bpmn2.impl;

import org.eclipse.bpmn2.Association;
import org.eclipse.bpmn2.AssociationDirection;
import org.eclipse.bpmn2.BaseElement;
import org.eclipse.bpmn2.Bpmn2Factory;
import org.eclipse.bpmn2.Bpmn2Package;
import org.eclipse.bpmn2.CatchEvent;
import org.eclipse.bpmn2.EventDefinition;
import org.eclipse.bpmn2.ThrowEvent;
import org.eclipse.emf.ecore.EClass;

/**
 * the mapping to stencil ids to BPMN 2.0 metamodel classes
 *
 */


public class KMRStencil {
    
    public BaseElement createElement(String stencilId, String taskType, boolean customElement ) {
        
        BaseElement element;
        
        //check if it is one of 'our' elements
        if (stencilId.startsWith("Model_")){
            stencilId="TextAnnotation";
            taskType=null;
        }
        
        //lets go to Bpmn20Stencil
        element = Bpmn20Stencil.createElement(stencilId, taskType, customElement);
        
        return element;
    }
}
