const request = require('request');

   module.exports = class MiraDB {  
        constructor(User,Password,Host,Database) {
            this.user = User;
            this.pass = Password;
            this.db = Database;
            this.server = Host;
        }

        query(QueryString , callback) {
            var jsn = { user: this.user ,pass:  this.pass ,db:  this.db ,query: QueryString } ;
                request({
                    url: this.server,
                    method: "POST",
                    json: true, 
                    body: jsn
                }, function (error, response, body){
                    var status = Array.isArray(body);
                        if(status){
                            callback(body,true);
                        } else {
                            callback(body,false);
                        }    
                });
        }


    }