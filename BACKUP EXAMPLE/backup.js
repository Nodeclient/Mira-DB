
        var Backup = require('mira-db/backup');
        var SetBackup = new Backup("utf8","Hello this is my first backup file");
        
        var My_Backup_File ="./myStorage.backup";

        SetBackup.Export("./data",My_Backup_File,function(data){
            console.log(data)
        });

        SetBackup.Info(My_Backup_File,function(data){
            console.log(data)
        });


/*    // ----------- OPTIONS (export,import,info)------------ //

        // Backup & export database storage folder
        // <YOUR_DATABASE_FOLDER> , <BACKUP_FILE_NAME>
        SetBackup.Export("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log(data)
        });
        // Read backup file Info
        // <BACKUP_FILE_NAME>
        SetBackup.Info("c:/myStorage.backup",function(data){
            console.log(data)
        });
        // Restore a database backup
        // <YOUR_DATABASE_FOLDER> , <BACKUP_FILE_NAME>
        SetBackup.Import("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log( data )
        });

*/