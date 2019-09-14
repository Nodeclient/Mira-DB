## Sample (LocalDB.js)

    ```js
        /* MIRA-DB GLOBAL SETTINGS (NEW) 0.40 */
        process.env.SET_LANG="en_us";                    //Select current language
            process.env.MIRA_DB_TOKEN="E4WXqn_IotaTPN6E";   //Database encryption security token
                process.env.SET_FILE_HEADER="JQL1";            //Database file header
                    process.env.SET_FILE_EXTENSION="jsq";         //Database file extension (Do not use dot)
    ```  

    ```js
        /* MIRA-DB GENERATE A NEW TOKEN 0.40 */
        var new_database = new mira(Storage,DB,Perms,"UTF-8");
            var My_new_db_token = new_database.Token();
                console.log(My_new_db_token);
    ```  

    ```js
        // IMPORT MODULE
        const mira = require("mira-db");
        // SET YOUR APP PERMISSION
        var Perms = { 
            UNIQUE:true,
            SELECT:true,
            ADD:true,
            UPDATE:true,
            RENAME:true,
            DROP:true,
            DELETE:true,
            CREATE:true,
            LIST:true 
        }
        // DATABASE STORAGE FOLDER
        var Storage = __dirname + "/data";
        // DATABASE NAME
        var DB = "test";
        // CREATE NEW MIRA-DB OBJECT
        var new_database = new mira(Storage,DB,Perms,"UTF-8");
        //SET QUERY
        var query = 'SELECT TABLE person'
    ```