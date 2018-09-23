using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using MIRA;


public class test : MonoBehaviour {

	// Use this for initialization
	void Start () {
        //CALL DLL
        MIRA.database db = new MIRA.database();
        //SET CONF
        db.User = "root";
        db.Password = "";
        db.Database = "test";
        db.Server = "http://localhost:8123/query";
        //RETURN DATA
        string result = db.Query("select table person");
        //SHOW DATA
        Debug.Log(result);
 
    }

    // Update is called once per frame
    void Update () {
		
	}
}
