package com.intalio.web.repository;

public class DiagramValidationException extends Exception {

    /**
     * serialVersionUID
     */
    private static final long serialVersionUID = 2597731669083135146L;

    /** Error JSON String */
    private String errorJsonStr;

    public DiagramValidationException(String message) {
        super("Validation error found.");
        this.errorJsonStr = message;
    }

    /**
     * get error JSON String.
     * @return
     */
    public String getErrorJsonStr() {
        return this.errorJsonStr;
    }
}
