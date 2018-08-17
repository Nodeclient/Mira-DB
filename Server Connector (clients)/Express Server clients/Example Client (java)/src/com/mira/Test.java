package com.mira;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

	
public class Test {
 public static void main(String[] args) throws IOException {
	 
	 /*
	 !! IMPORTANT USE MIRA EXPRESS SERVER
	 https://github.com/Nodeclient/Mira-DB/tree/master/Remote%20Database%20(Express%20Server)
	 */

	 String urlParameters  = "user=root&pass=&db=test&query=select table person";
	 byte[] postData       = urlParameters.getBytes( StandardCharsets.UTF_8 );
	 int    postDataLength = postData.length;
	 String request        = "http://localhost:8123/query";
	 URL    url            = new URL( request );
	 HttpURLConnection conn= (HttpURLConnection) url.openConnection();           
	 conn.setDoOutput( true );
	 conn.setInstanceFollowRedirects( false );
	 conn.setRequestMethod( "POST" );
	 conn.setRequestProperty( "Content-Type", "application/x-www-form-urlencoded"); 
	 conn.setRequestProperty( "charset", "utf-8");
	 conn.setRequestProperty( "Content-Length", Integer.toString( postDataLength ));
	 conn.setUseCaches( false );
	 try( DataOutputStream wr = new DataOutputStream( conn.getOutputStream())) {
	    wr.write( postData );
	 }

	
     if (conn.getResponseCode() == 500) {
    	 System.out.println("LOGIN ERRROR");
	 } else {
		  Reader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
          StringBuilder sb = new StringBuilder();
	      for (int c; (c = in.read()) >= 0;) sb.append((char)c);
	      String response = sb.toString();
	      
		  System.out.println(response);
	 }
     
 }
}