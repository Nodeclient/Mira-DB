var MiraDB = function(user,password,server,database) {	
    var client = this;
    client.UserData={};
	client.Header ="HTTP-CLIENT-1.0";
	client.user = user; 
	client.password = password;
	client.server = server;
	client.database = database;
	client.Jconn=false;
    client.data=false;
    client.User_ID = 0;

    client.Connect = function() {
        if(client.Jconn==false){ 
            client.socket=io.connect("ws://"+client.server);
           
            client.UserData.user=client.user;
            client.UserData.pass=client.password;
            client.UserData.db=client.database;
            client.UserData.hd=client.Header;

            client.socket.on('connect', function(data) { 
                client.Jconn=true; 
                client.socket.emit('Login',client.UserData); 
                client.Jalert({"resume":true,"code":"JCL_0","text": `Connection Success` });
            });	

            client.socket.on('EventData', function (data)  {
                switch (data[1]) {
                    case "CONNECTION_CLOSE":
                        client.socket.disconnect(); 
                    break;
                    case "LOGIN_SUCCESS":
                        client.User_ID = data[3];
                        break;
                    case "LOGIN_ERROR":
                        client.Jalert({"resume":true,"code":"JCL_0","text": `Connection Failed` });
                        break;
                    default:
                        break;
                }
            });	

            client.socket.on('disconnect', function(data) {      
                client.Jconn=false; 
                client.socket.disconnect(); 
                client.Jalert({"resume":false,"code":"JCL_1001","text": `Disconnect JSQL Connection` }); 
            });	
            
            client.socket.on('connect_error', function(data)  {
                client.Jconn=false; 
                client.socket.disconnect(); 
                client.Jalert({"resume":false,"code":"JCL_1002","text": `(${client.server}) Server is currently offline` }); 
            });	

        } else {
                client.Jalert({"resume":false,"code":"JCL_4001","text": `Connection already open` });
        }
    };

    client.Jalert = function(e,callback) {
        if(typeof(callback)=='function'){ 
            callback(e); 
        };
    };

    client.Query = function(str,callback) {
        if(client.Jconn==true){				
            var object = {};
            object.query = str;
            object.id = client.User_ID;
            object.db = client.database;
            client.socket.emit("query",object);
            client.socket.on("QueryData", callback);
        }else{
            client.Jalert({"resume":false,"code":"JCL_2007","text": `No server connection` });				 
        } 		
    };

}