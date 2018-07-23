    const io = require("socket.io-client"), socket = io.connect("http://localhost:8123");
    var User_ID = null;


    function LoginServer(object,callback) {
        socket.emit("Login",object);
        socket.on("EventData", callback);
    }

    function Query(str,callback) {
        var object = {};
            object.query = str;
            object.id=User_ID;
            socket.emit("query",object);
            socket.on("QueryData", callback);
    }
    

    var DB_user = {user:"root",pass:"y"};

    LoginServer(DB_user,function(event){    
        if (event[1]=="LOGIN_SUCCESS"){
                User_ID = event[3];
                test();
            } else {
                console.log(event);
        }
    });

    function test (){
        Query("SELECT TABLE person",function(event){
            console.log(event);
        });
    }

