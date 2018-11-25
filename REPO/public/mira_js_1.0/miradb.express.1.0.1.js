var MiraDB = function(user,password,server,database) {	
    var client = this;
        client.user = user; 
        client.password = password;
        client.server = server;
        client.database = database;    
            client.query = function(str,callback) {
                $.post(  client.server , {"user":client.user, "pass":client.password,"db":client.database,"query":str  })
                    .done(function( data ) {
                        callback(data,null);
                    })
                        .fail(function(xhr, status, error) {
                            callback(null,xhr);
                        });		
            }
};