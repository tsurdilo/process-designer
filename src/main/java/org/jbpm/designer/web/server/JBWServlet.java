package org.jbpm.designer.web.server;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JBWServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
		String profileName = req.getParameter("profile");
		int min = 1;
		int max = 100;
		
		String tmpJson = "{"+
		    "\"data\": {" +
		        "\"Review1\": \"" + getRandomForRange(min, max)  + "\"," +
		        "\"Review2\": \"" + getRandomForRange(min, max)  + "\"," +
		        "\"Start\": \"" + getRandomForRange(min, max)  + "\"," +
		        "\"End\": \"" + getRandomForRange(min, max)  + "\"" +
		    "}" +
		"}";
		
		PrintWriter pw = resp.getWriter();
		resp.setContentType("text/plain");
		resp.setCharacterEncoding("UTF-8");
		pw.write(tmpJson);
	}
	
	private int getRandomForRange(int min, int max) {
		return min + (int)(Math.random() * ((max - min) + 1));
	}
}
