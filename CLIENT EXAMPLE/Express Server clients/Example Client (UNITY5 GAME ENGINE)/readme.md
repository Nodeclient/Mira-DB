## MIRA DB UNITY3D GAME ENGINE CLIENT


* MiraDB_Uniy_Engine_Connector(DLL).unitypackage -  (**WINDOWS**)
* MiraDB_Uniy_Engine_Connector(NO DLL).unitypackage - (**ALL OS**)

### IMPORT "MIRA.DLL" 
[Source Code (MIRA.DLL FOR UNITY3D)-1.0.0.zip](https://git.io/fpvoI "[GITHUB]")

```c#
       // IMPORT REFERANCE > 1.0.0 -> 
       // [GITHUB]/Mira-DB/CONNECTOR/DLL/dll_project_source_code/Source Code (MIRA.DLL FOR UNITY3D)-1.0.0.zip
       
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
* [Unity JSONSerialization](https://docs.unity3d.com/Manual/JSONSerialization.html "Unity JSONSerialization")

### install MiraDB express
* **`/SERVER EXAMPLE/Remote Database (express Server)/`**
* [GITHUB MiraDB Express Server](https://github.com/Nodeclient/Mira-DB "[GITHUB]")
