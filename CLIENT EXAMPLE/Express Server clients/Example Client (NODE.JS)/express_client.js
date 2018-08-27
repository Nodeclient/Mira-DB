const MiraDB = require("./nodejs_express_connector");
        
var db = new MiraDB("root","","http://localhost:8123/query","test");   
    db.query("select table test",function(data,err){
        console.log(data);
});