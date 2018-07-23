    /*
    SELECT TABLE <TABLE_NAME>; 
    SELECT TABLE <TABLE_NAME> COUNT; 
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1,"COL2","COL3"];
    SELECT TABLE <TABLE_NAME> COLUMN ["COL1"] FIND ["STRING"]; 
    ADD ROW <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"]; 
    ADD COLUMN COL1,COL2,COL3... TABLE <TABLE_NAME>; 
    RENAME TABLE ["TABLE_1","TABLE_2",..] VALUE ["NEW_NAME_1","NEW_NAME_2",..]; 
    RENAME DATABASE ["TABLE_1","TABLE_2",..] VALUE ["NEW_NAME_1","NEW_NAME_2",..]; 
    RENAME COLUMN [COL1,COL2,...] TABLE <TABLE_NAME> VALUE [NEW_1,NEW_2,...]; 
    DELETE COLUMN <COLUMN_NAME> TABLE <TABLE_NAME>; 
    DELETE ROW <TABLE_NAME> COLUMN <COLUMN_NAME> VALUE ["STRING"]
    CREATE TABLE <TABLE_NAME> COLUMN [COL1,COL2,COL3] VALUE [VAL1,VAL2,VAL3];
    CREATE DATABASE <DATABASE_NAME>;
    DROP DATABASE <DATABASE_NAME>;
    DROP TABLE <TABLE_NAME>;
    LIST DATABASE;
    LIST TABLE <DATABASE_NAME>;
    */

            // INCLUDE MIRA
            const jsql = require("mira-db");
            // SET YOUR USER PERMISSION
            var perms = { SELECT:true,ADD:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true }
            // YOUR STORAGE FOLDER FULL PATH
            var My_Db_folder =  "c:/data";
            //SELECT DATABASE
            var My_Db_name = "test";
            // CREATE NEW DATABASE OBJECT
            var mydb = new jsql(My_Db_folder,"UTF-8");
            // SET QUERY
            var query = 'SELECT TABLE person';
            //DATA RESULT
            var result = mydb.Query(query,My_Db_name,perms);
            console.log(  result );
