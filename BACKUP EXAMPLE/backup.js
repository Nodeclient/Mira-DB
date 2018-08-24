
        var Backup = require('mira-db/backup');
        var SetBackup = new Backup("utf8","Hello this is my first backup file");
        
        var My_Backup_File ="./myStorage.backup";

        SetBackup.Export("./YOUR_DATA_STORAGE_FOLDER",My_Backup_File,function(data){
            console.log(data)
        });

        SetBackup.Info(My_Backup_File,function(data){
            console.log(data)
        });


/*    
        // EXPORT
        SetBackup.Export("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log(data)
        });
        
        // INFO
        SetBackup.Info("c:/myStorage.backup",function(data){
            console.log(data)
        });
        
         // IMPORT
        SetBackup.Import("/YOUR_STORAGE_FOLDER","c:/myStorage.backup",function(data){
            console.log( data )
        });

*/
