const io = require("socket.io"), 
      user = require('mira-db/userdata'),
      DB = require('mira-db'),
server = io.listen(8123);

var UserData = new Map();     
var UserPerm = new Map();  

var Storage_Folder =  process.cwd() + "/data";
var database = new DB(Storage_Folder,"UTF-8");

server.on("connection", (socket) => {
    var connect_time = new Date();
    UserData.set(socket.id, true); 

    socket.on("disconnect", () => { 
        UserData.delete(socket.id); 
        UserPerm.delete(socket.id);
    });

    socket.emit("EventData",[connect_time,"CONNECTION_SUCCESS"]);
    
    socket.on("query", (data) => {
        queryKey = UserData.get(data["id"]);
        PermKey = UserPerm.get(data["id"])[0];
        DBKey = UserPerm.get(data["id"])[1];
        var PermsData = user.LoadPermsData(PermKey+".perm");
    
        if(queryKey){
            var result;
            if(DBKey=="*"){
                result = database.Query(data["query"],data["db"],PermsData);
            } else {
                result = database.Query(data["query"],DBKey,PermsData);
            }
            socket.emit("QueryData",result);
        } else {
            socket.emit("QueryData",[data,"LOGIN_ERROR","CANNOT ACCESS DATABASE"]);
        }
    });


    socket.on("Login", (u) => {
        var LoginData = user.LoadLoginData("user.conf"); 
        var result = user.Login(u["user"], u["pass"],LoginData) ;
            if (result){
                UserPerm.set(socket.id,[result["perm"],result["db"]]);
                socket.emit("EventData",[true,"LOGIN_SUCCESS","",socket.id]);
            }else{
                socket.emit("EventData",[false,"LOGIN_ERROR","INVALID USERNAME OR PASSWORD",0]);
            }
    });

});