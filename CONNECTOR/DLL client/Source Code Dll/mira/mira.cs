using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Net;
using System.Collections.Specialized;

namespace MIRA
{
    public class database
    {

        public string Server;
        public string User;
        public string Password;
        public string Database;

        public string Query(string Query_String) {
            try
            {
                var client = new WebClient();
                var values = new NameValueCollection();
                values["user"] = User;
                values["pass"] = Password;
                values["db"] = Database;
                values["query"] = Query_String;
                var response = client.UploadValues(Server, values);
                var responseString = Encoding.Default.GetString(response);
                    return responseString;
            }
            catch (Exception ex) {
                return "Connection Error!";
            }

        }

    }
}
