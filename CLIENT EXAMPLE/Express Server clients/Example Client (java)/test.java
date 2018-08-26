package com.mira;
import  org.mira.database.db;

public class Test {
 public static void main(String[] args)  {
	 // FIRST ADD EXTERNAL JAR -> [GITHUB]Mira-DB/CONNECTOR/java
	 db Conn = new db();
	
	   	   Conn.user="root";
	   	   Conn.password="";
		   Conn.host="http://localhost:8123/query";	   
		   Conn.database="test";
		   
		   String result = Conn.Query("select table person");
		   System.out.println( result );    
 }
}