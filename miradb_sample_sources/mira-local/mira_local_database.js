    /*  MIRA QUERYs
        --------------------------------------------------------------------------------------------------------------
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
            DELETE ROW <TABLE_NAME> COLUMN <COLUMN_NAME> VALUE ["STRING"];
            DELETE ROW <TABLE_NAME> INDEX <INDEX_NUMBER>;
            CREATE TABLE <TABLE_NAME> COLUMN ["COL1","COL2","COL3"] VALUE ["VAL1","VAL2","VAL3"];
            CREATE DATABASE <DATABASE_NAME>;
            DROP DATABASE <DATABASE_NAME>;
            DROP TABLE <TABLE_NAME>;
            LIST DATABASE;
            LIST TABLE <DATABASE_NAME>;
        --------------------------------------------------------------------------------------------------------------
    */

        /* MIRA-DB GLOBAL SETTINGS (NEW) 0.40 */
            process.env.SET_LANG="en_us";                    //Select current language
            process.env.MIRA_DB_TOKEN="E4WXqn_IotaTPN6E";   //Database encryption security token
            process.env.SET_FILE_HEADER="JQL1";            //Database file header
            process.env.SET_FILE_EXTENSION="jsq";         //Database file extension (Do not use the dot)

        /* IMPORT MODULES */
            const mira = require("mira-db");

        /* CREAT A NEW MIRA-DB OBJECT */
            var Perms = { SELECT:true,ADD:true,UNIQUE:true,UPDATE:true,RENAME:true,DROP:true,DELETE:true,CREATE:true,LIST:true };
            var Storage = "./data";
            var new_database = new mira(Storage,"test_db",Perms,"UTF-8");

        /* MIRA-DB QUERY */
            var query = 'SELECT TABLE persons';
            var result = new_database.Query(query);    


        console.log(result);
