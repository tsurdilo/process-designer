package org.jbpm.designer.web.server;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.stream.FactoryConfigurationError;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;

import org.jbpm.designer.web.profile.IDiagramProfile;
import org.json.JSONException;
import org.json.JSONObject;

public class JBWServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
		String profileName = req.getParameter("profile");
		IDiagramProfile profile = ServletUtil.getProfile(req, profileName, getServletContext());
		
		URL url = new URL(profile.getRuntimeDataURL());
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("GET");
        connection
                .setRequestProperty(
                        "User-Agent",
                        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16");
        connection
                .setRequestProperty("Accept",
                        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
        connection.setRequestProperty("Accept-Language", "en-us,en;q=0.5");
        connection.setRequestProperty("Accept-Encoding", "gzip,deflate");
        connection.setRequestProperty("charset", "UTF-8");
        connection.setReadTimeout(5 * 1000);
        
        connection.connect();

        BufferedReader sreader = new BufferedReader(new InputStreamReader(
                connection.getInputStream(), "UTF-8"));
        StringBuilder stringBuilder = new StringBuilder();
        String line = null;
        while ((line = sreader.readLine()) != null) {
            stringBuilder.append(line + "\n");
        }

        String key = null;
        String value = null;
        JSONObject jsonObject = new JSONObject();
        try {
			InputStream in = new ByteArrayInputStream(stringBuilder.toString().getBytes("UTF-8"));
			XMLInputFactory factory = XMLInputFactory.newInstance();
			XMLStreamReader reader = factory.createXMLStreamReader(in);
			while (reader.hasNext()) {
				int next = reader.next();
			    if(next == XMLStreamReader.START_ELEMENT) {
			        if ("processesStarted".equals(reader.getLocalName())) {
			        	jsonObject.put("processesStarted", reader.getElementText());
			        }
			        if ("processesCompleted".equals(reader.getLocalName())) {
			        	jsonObject.put("processesCompleted", reader.getElementText());
			        }
			        if ("key".equals(reader.getLocalName())) {
			        	key = reader.getElementText();
			        }
			        if ("value".equals(reader.getLocalName())) {
			        	value = reader.getElementText();
			        }
			    }
			    if(next == XMLStreamReader.END_ELEMENT) {
			    	if ("entry".equals(reader.getLocalName())) {
			    		if(key != null && value != null) {
			    			jsonObject.put(key, value);
			    		}
			    		key = null;
			    		value = null;
			        }
			    }
			}
		} catch (Exception e) {
			System.out.println("******* EXCEPTION: " + e.getMessage());
		} 
        
        PrintWriter pw = resp.getWriter();
		resp.setContentType("text/json");
		resp.setCharacterEncoding("UTF-8");
		pw.write(jsonObject.toString());
	}
	
	private int getRandomForRange(int min, int max) {
		return min + (int)(Math.random() * ((max - min) + 1));
	}
}
