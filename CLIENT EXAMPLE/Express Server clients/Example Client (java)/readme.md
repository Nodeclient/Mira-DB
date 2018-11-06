#### Java Example

	Download external library (org.mira.database.db) 
[mira_db_connector.jar](https://git.io/fpvob "[GITHUB]")

```js
    /*Client Examples*/
    import  org.mira.database.db;
	     db Conn = new db();
	   	   Conn.user="root";
	   	   Conn.password="";
		   Conn.host="http://localhost:8123/query";
		   Conn.database="test";
		   
		   String result = Conn.Query("select table person");
		   System.out.println( result );
         /*
            JSON PARSER -> 
            https://mvnrepository.com/artifact/com.googlecode.json-simple/json-simple
        */
    
```
