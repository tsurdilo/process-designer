
require "buildr4osgi"

require "repositories.rb"
require "dependencies.rb"

require "json"

# Keep this structure to allow the build system to update version numbers.
VERSION_NUMBER = "1.0.0.089-SNAPSHOT"

desc "Wapama Designer"
define "designer" do
  project.version = VERSION_NUMBER
  project.group = "org.wapama" 
  
  compile.with WAR_LIBS, "junit:junit:jar:4.7"
  compile.options.source = "1.5"
  compile.options.target = "1.5"
  
  webContent = "WebContent/"

  package(:bundle).include(_("src/main/webapp"), :as => webContent).exclude('WEB-INF/tomcat_web.xml')
  package(:war).include(_("src/main/webapp"), :as => '.').exclude('WEB-INF/tomcat_web.xml')
  package(:war, :classifier => "jboss").include(_("src/main/webapp"), :as => '.').exclude('WEB-INF/tomcat_web.xml')

  package(:war).libs = WAR_LIBS
  package(:war, :classifier => "jboss").libs = WAR_LIBS_JBOSS
  
  package(:war, :classifier => "jboss").include(_('src/main/webapp/WEB-INF/tomcat_web.xml'), :as=>'WEB-INF/web.xml')

  read_m = ::Buildr::Packaging::Java::Manifest.parse(File.read(_("META-INF/MANIFEST.MF"))).main
  read_m["Jetty-WarFolderPath"] = webContent
  read_m["Bundle-Version"] = project.version
  package(:bundle).with :manifest => read_m
  
  package(:sources)
end
