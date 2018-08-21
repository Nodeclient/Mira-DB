## MIRA DB UNITY-5 GAME ENGINE CLIENT


### IMPORT "MIRA.DLL"
```c#
       //IMPORT DLL
       MIRA.database db = new MIRA.database();
       //SET CONF
       db.User = "root";
       db.Password = "";
       db.Database = "test";
       db.Server = "http://localhost:8123/query";
       //RETURN DATA
       string result = db.Query("select table person");
       Debug.Log(result);
```

### JSON Serialization
https://docs.unity3d.com/Manual/JSONSerialization.html

### install MiraDB express
https://github.com/Nodeclient/Mira-DB/tree/master/SERVER%20EXAMPLE/Remote%20Database%20(express%20Server)
