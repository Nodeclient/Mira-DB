            /*  
		UNIQUE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>;
                SELECT TABLE <TABLE_NAME>; 
                SELECT TABLE <TABLE_NAME> COUNT; 
                SELECT TABLE <TABLE_NAME> COLUMN ["COL1"];
                SELECT TABLE <TABLE_NAME> LIMIT ["0","10"];
                SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["SEARCH_STRING"]; 
                UPDATE ROW <TABLE_NAME> COLUMN ["COL1","COL2",..] VALUE ["VAL1","VAL2"] FIND ["COL1","SEARCH_STRING"];
                ADD ROW <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"]; 
                ADD COLUMN ["COL1","COL2","COL3"] TABLE <TABLE_NAME>; 
                RENAME TABLE ["TABLE"] VALUE ["NEW_NAME"]; 
                RENAME DATABASE ["DATABASE_NAME"] VALUE ["NEW_NAME"]; 
                RENAME COLUMN ["COL1","COL2"] TABLE <TABLE_NAME> VALUE ["NEW_1","NEW_2"]; 
                DELETE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>; 
                DELETE ROW <TABLE_NAME> COLUMN <COLUMN_NAME> VALUE ["SEARCH_STRING"];
                DELETE ROW <TABLE_NAME> INDEX <INDEX_NUMBER>;
                CREATE TABLE <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"];
                CREATE DATABASE <DATABASE_NAME>;
                DROP DATABASE <DATABASE_NAME>;
                DROP TABLE <TABLE_NAME>;
                LIST DATABASE;
                LIST TABLE <DATABASE_NAME>;
            */

            // INCLUDE MIRA
            const mira = require("mira-db");
            // SET YOUR USER PERMISSION
            var perms = { UNIQUE:true,SELECT:true,ADD:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true }
            // YOUR STORAGE FOLDER FULL PATH
            var My_Db_folder =  "./data";
            //SELECT DATABASE
            var My_Db_name = "test";
            // CREATE NEW DATABASE OBJECT
            var mydb = new mira(My_Db_folder,"UTF-8");
            // SET QUERY
            var query = 'SELECT TABLE example';
            //DATA RESULT
            var result = mydb.Query(query,My_Db_name,perms);
            console.log(  result );
