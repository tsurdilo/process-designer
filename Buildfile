
require "buildr4osgi"

require File.join(File.dirname(__FILE__), "repositories.rb")
require File.join(File.dirname(__FILE__), "dependencies.rb")

# Keep this structure to allow the build system to update version numbers.
VERSION_NUMBER = "1.0.0.091-SNAPSHOT"

desc "Wapama Designer"
define "wapama" do
  project.version = VERSION_NUMBER
  project.group = "org.wapama"
  
  desc "Wapama Editor"
  define "designer" do

    compile.with WAR_LIBS, JUNIT
    compile.options.source = "1.5"
    compile.options.target = "1.5"
  
    webContent = "WebContent/"

    package(:bundle).include(_("src/main/webapp"), :as => webContent)
    package(:war).include(_("src/main/webapp"), :as => '.')
    package(:war, :classifier => "jboss").include(_("src/main/webapp"), :as => '.')
    
    package(:war).libs = WAR_LIBS
    package(:war, :classifier => "jboss").libs = WAR_LIBS_JBOSS
  
    package(:war, :classifier => "jboss")

    read_m = ::Buildr::Packaging::Java::Manifest.parse(File.read(_("META-INF/MANIFEST.MF"))).main
    read_m["Jetty-WarFolderPath"] = webContent
    read_m["Bundle-Version"] = project.version
    package(:bundle).with :manifest => read_m
  
    package(:sources)
  end
  
  desc "Wapama distribution"
  define "distrib" do
    file(_("target/doc")).enhance do
      system("git co gh-pages ; jekyll #{File.join(File.dirname(__FILE__), "distrib/target/doc")}; rm -Rf #{File.join(File.dirname(__FILE__), "distrib/target/doc/designer")} ; rm -Rf #{File.join(File.dirname(__FILE__), "distrib/target/doc/distrib")} ; git co master")
    end
    package(:zip).include _("target/doc"), :as => "doc"
    package(:zip).include _("../LICENSE")
    package(:zip).include project("designer").package(:jar), :path => "distrib"
    package(:zip).include project("designer").package(:war), :path => "distrib"
    package(:zip).include project("designer").package(:war, :classifier => "jboss"), :path => "distrib"
  end
  
end
