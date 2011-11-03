package com.intalio.kmr;


import com.intalio.bpmn2.impl.KMRJsonMarshaller;
import java.io.File;
import java.net.URL;
import java.util.Collections;

import org.eclipse.bpmn2.Definitions;
import org.junit.Test;

import com.intalio.bpmn2.impl.KMRJsonUnmarshaller;
import com.intalio.web.profile.IDiagramProfile;
import com.intalio.web.profile.IDiagramProfile.IDiagramMarshaller;
import com.intalio.web.profile.IDiagramProfile.IDiagramUnmarshaller;
import java.util.Collection;
import java.util.List;
import org.eclipse.bpmn2.Artifact;
import org.eclipse.bpmn2.FlowElement;
import org.eclipse.bpmn2.RootElement;
import org.eclipse.bpmn2.TextAnnotation;
import org.junit.Assert;


/**
 * @author Antoine Toulme Intalio, Inc.
 *
 * A series of tests to check the unmarshalling of json to bpmn2.
 */
public class KMRMarshallingTestCase {
    
    private static File getTestJsonFile(String filename) {
        URL fileURL = KMRMarshallingTestCase.class.getResource(filename);
        return new File(fileURL.getFile());
    }
    
    @Test
    public void testEntityModelUnmarshalling() throws Exception {
        KMRJsonUnmarshaller unmarshaller = new KMRJsonUnmarshaller();
        Definitions definitions = ((Definitions) unmarshaller.unmarshall(getTestJsonFile("simpleEntityModel.json"), "").getContents().get(0));
        definitions.eResource().save(System.out, Collections.emptyMap());
        
        org.eclipse.bpmn2.Process process = getRootProcess(definitions);
        
        List<FlowElement> flowElements = process.getFlowElements();
        TextAnnotation modelEntityNode = null;
        for (Artifact artifact : process.getArtifacts()) {
            if (artifact instanceof TextAnnotation){
                modelEntityNode = (TextAnnotation) artifact;
            }
        }
        
        Assert.assertNotNull(modelEntityNode);
        Assert.assertEquals("KMRCustom--Allergy--code--123456", modelEntityNode.getText());
        
        KMRJsonMarshaller marshaller = new KMRJsonMarshaller();
        marshaller.setProfile(new IDiagramProfile() {

            public String getName() {
                return "";
            }

            public String getTitle() {
                return "";
            }

            public String getStencilSet() {
                return "";
            }

            public Collection<String> getStencilSetExtensions() {
                return null;
            }

            public String getSerializedModelExtension() {
                return "";
            }

            public String getStencilSetURL() {
                return "";
            }

            public String getStencilSetNamespaceURL() {
                return "";
            }

            public String getStencilSetExtensionURL() {
                return "";
            }

            public Collection<String> getPlugins() {
                return null;
            }

            public IDiagramMarshaller createMarshaller() {
                return null;
            }

            public IDiagramUnmarshaller createUnmarshaller() {
                return null;
            }

            public String getExternalLoadURLProtocol() {
                return "";
            }

            public String getExternalLoadURLHostname() {
                return "";
            }

            public String getExternalLoadURLSubdomain() {
                return "";
            }

            public String getUsr() {
                return "";
            }

            public String getPwd() {
                return "";
            }
        });
        String json = marshaller.marshall(definitions, "");
        
        System.out.println(json);
        
    }
    
    private org.eclipse.bpmn2.Process getRootProcess(Definitions def) {
        List<RootElement> rootElements = def.getRootElements();
        org.eclipse.bpmn2.Process process = null;
        for(RootElement nextRootElement : rootElements) {
            if(nextRootElement instanceof org.eclipse.bpmn2.Process) {
                process = (org.eclipse.bpmn2.Process) nextRootElement;
            }
        }
        return process;
    }
    
}

