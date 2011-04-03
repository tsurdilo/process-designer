/***************************************
 * Copyright (c) Intalio, Inc 2010
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 ****************************************/
package org.wapama.web.filter.impl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Enumeration;
import java.util.zip.GZIPOutputStream;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Ludwig.Xu A GZIP compression filter
 */
public class GZIPFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	/**
	 * Get the response output stream and compress it
	 */
	public void doFilter(final ServletRequest request,
			final ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		GenericResponseWrapper wrapper = new GenericResponseWrapper(httpResponse);
		// get the final response output stream
		chain.doFilter(request, wrapper);
		OutputStream out = response.getOutputStream();
		
		if (!isCached(wrapper) && accepts(httpRequest, "gzip")) {
			// start to compress
			ByteArrayOutputStream compressed = new ByteArrayOutputStream();
			GZIPOutputStream gzout = new GZIPOutputStream(compressed);
			gzout.write(wrapper.getData());
			gzout.flush();
			gzout.close();
			// set the response header
			httpResponse.setHeader("Content-Encoding", "gzip");
			out.write(compressed.toByteArray());
			// set the length of response content
			response.setContentLength(compressed.size());
		} else {
			out.write(wrapper.getData());
		}
		// flush the output stream
		out.flush();
		out.close();
	}

	/**
	 * Check if cached
	 * @param wrapper
	 * @return true if it is cached
	 */
	protected boolean isCached(GenericResponseWrapper wrapper) {
		if (wrapper.getData().length > 0) {
			return false;
		} else {
			return true;
		}
	}

	protected boolean accepts(HttpServletRequest request, String name) {
		return headerContains(request, "Accept-Encoding", name);
	}

	/**
	 * check if response contains specific header
	 * @param request
	 * @param header
	 * @param value
	 * @return true if contains
	 */
	protected boolean headerContains(HttpServletRequest request, String header,
			String value) {
		Enumeration accepted = request.getHeaders(header);
		while (accepted.hasMoreElements()) {
			String headerValue = (String) accepted.nextElement();
			if (headerValue.indexOf(value) != -1) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void destroy() {
	}

}
