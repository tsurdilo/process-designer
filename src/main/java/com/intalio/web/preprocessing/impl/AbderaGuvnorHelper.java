/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.intalio.web.preprocessing.impl;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import org.apache.abdera.Abdera;
import org.apache.abdera.protocol.Response;
import org.apache.abdera.protocol.client.AbderaClient;
import org.apache.abdera.protocol.client.ClientResponse;
import org.apache.abdera.protocol.client.RequestOptions;
import org.drools.util.codec.Base64;

/**
 *
 * @author esteban
 */
public class AbderaGuvnorHelper {
    
    private String guvnorURL;

    public AbderaGuvnorHelper(String guvnorURL) {
        this.guvnorURL = guvnorURL;
    }
    
    public RequestOptions createDefaultOptions() {
        return this.createDefaultOptions("application/atom+xml");
    }

    public RequestOptions createDefaultOptions(String acceptType) {
        return this.createDefaultOptions(acceptType, null);
    }

    public RequestOptions createDefaultOptions(String acceptType, String contentType) {
        Abdera abdera = Abdera.getInstance();
        AbderaClient client = new AbderaClient(abdera);
        RequestOptions options = client.getDefaultRequestOptions();
        options.setAuthorization("Basic " + new Base64().encodeToString(("admin:admin".getBytes())));
        //options.setHeader("pleaseSkipSSO","yes,please!");

        options.setAccept(acceptType);

        if (contentType != null) {
            options.setContentType(contentType);
        }

        return options;
    }
    
    public ClientResponse invokeGETGuvnor(String path){
        return this.invokeGETGuvnor(path, this.createDefaultOptions());
    }
    
    public ClientResponse invokeGETGuvnor(String path, String acceptType){
        return this.invokeGETGuvnor(path, this.createDefaultOptions(acceptType));
    }
    
    public ClientResponse invokeGETGuvnor(String path, String acceptType, String contentType){
        return this.invokeGETGuvnor(path, this.createDefaultOptions(acceptType, contentType));
    }
    
    public ClientResponse invokeGETGuvnor(String path, RequestOptions options){
        return this.invokeGET(guvnorURL+this.encodeURIComponent(path), options);
    }
    
    public ClientResponse invokeGET(String path){
        return this.invokeGET(path, this.createDefaultOptions());
    }
    
    public ClientResponse invokeGET(String path, String acceptType){
        return this.invokeGET(path, this.createDefaultOptions(acceptType));
    }
    
    public ClientResponse invokeGET(String path, String acceptType, String contentType){
        return this.invokeGETGuvnor(path, this.createDefaultOptions(acceptType, contentType));
    }
    
    public ClientResponse invokeGET(String url, RequestOptions options){
        Abdera abdera = Abdera.getInstance();
        AbderaClient client = new AbderaClient(abdera);

        ClientResponse resp = client.get(url, options);

        if (resp.getType() == Response.ResponseType.SUCCESS) {
            return resp;
        } else {
            throw new RuntimeException(resp.getStatusText());
        }
    }
    
    
    
    public ClientResponse invokePUTGuvnor(String path, RequestOptions options, InputStream inputStream){
        return this.invokePUT(guvnorURL+path, options, inputStream);
    }
    
    public ClientResponse invokePUT(String url, RequestOptions options, InputStream inputStream){
        Abdera abdera = Abdera.getInstance();
        AbderaClient client = new AbderaClient(abdera);

        url = this.encodeURIComponent(url);
        
        ClientResponse resp = client.put(url, inputStream, options);

        if (resp.getType() == Response.ResponseType.SUCCESS) {
            return resp;
        } else {
            throw new RuntimeException(resp.getStatusText());
        }
    }
    
    public static String encodeURIComponent(String s) {
        try {
            return URLEncoder.encode(s, "UTF-8").
                    replaceAll("\\+", "%20").
                    replaceAll("\\%21", "!").
                    replaceAll("\\%27", "'").
                    replaceAll("\\%28", "(").
                    replaceAll("\\%29", ")").
                    replaceAll("\\%7E", "~").
                    replaceAll("\\%3F", "?").
                    replaceAll("\\%3D", "=").
                    replaceAll("\\%2F", "/");
        } // This exception should never occur.
        catch (UnsupportedEncodingException e) {
        }
        return s;
    } 
}
