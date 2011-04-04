
YUICOMPRESSOR = "com.yahoo.platform.yui:yuicompressor:jar:2.3.6"
   
BPMN2_LIBS = ["org.eclipse:org.eclipse.bpmn2:jar:0.7.0.20100826221953",
              "org.eclipse:org.eclipse.emf.common:jar:2.6.0.v20100427-1455",
              "org.eclipse:org.eclipse.emf.ecore.xmi:jar:2.5.0.v20100317-1336",
              "org.eclipse:org.eclipse.emf.ecore:jar:2.6.0.v20100427-1455"]
              
JUNIT = "junit:junit:jar:4.7"           

OSGI = "org.eclipse:osgi:jar:3.5.0.v20090520"
JACKSON = ["org.codehaus.jackson:jackson-core-asl:jar:1.5.6", "org.codehaus.jackson:jackson-mapper-asl:jar:1.5.6"]
JSON_LIB = "org.json:json:jar:20090211"
XML_LIBS = "org.jdom:jdom:jar:1.1"
SLF4J = "org.slf4j:slf4j-api:jar:1.5.8"
SERVLET_API = ["javax.servlet:servlet-api:jar:2.5"]
JS = "rhino:js:jar:1.7R2"

WAR_LIBS = [JS, SERVLET_API, SLF4J, XML_LIBS, JSON_LIB, OSGI, YUICOMPRESSOR] | BPMN2_LIBS | JACKSON

WAR_LIBS_JBOSS = WAR_LIBS | ["org.slf4j:slf4j-jdk14:jar:1.5.6"]

