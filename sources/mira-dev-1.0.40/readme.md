## Sample 1.0.40 (In testing)

```js
        /* MIRA-DB GLOBAL SETTINGS (NEW) 0.40 */
        process.env.SET_LANG="en_us";                    //Select language
        process.env.MIRA_DB_TOKEN="E4WXqn_IotaTPN6E";   //Database encryption token
        process.env.SET_FILE_HEADER="JQL1";            //Database file header
        process.env.SET_FILE_EXTENSION="jsq";         //Database file extension (Do not use dot)
```  

```js
        /* MIRA-DB GENERATE A NEW TOKEN 0.40 */
        var new_database = new mira(Storage,DB,Perms,"UTF-8");
        var My_new_db_token = new_database.Token();
console.log(My_new_db_token);
```  
