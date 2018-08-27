## MIRA DB UNITY-5 GAME ENGINE CLIENT

* MiraDB_Uniy_Engine_Connector(DLL).unitypackage    - (Only Windows)
* MiraDB_Uniy_Engine_Connector(NO DLL).unitypackage - (ALL OS)

### IMPORT "MIRA.DLL"
```c#
       //IMPORT DLL FILE "MIRA.dll" -> [GITHUB]/Mira-DB/CONNECTOR/DLL/
       MIRA.database db = new MIRA.database();
       //SET OPTION
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
