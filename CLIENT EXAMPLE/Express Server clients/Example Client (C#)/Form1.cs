using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.Net;
using System.Collections.Specialized;

namespace $safeprojectname$
{
    public partial class Form1 : Form {
        public Form1() {
            InitializeComponent();
        }

    private void button1_Click(object sender, EventArgs e) {

            /* 
             * HTTP POST Example (Evan Mulawski)
             * (Express Server) Client
             * QUERY URL http://localhost:8123/query
            */

            using (var client = new WebClient()) {
                    var values = new NameValueCollection();
                    values["user"] = "root";
                    values["pass"] = "";
                    values["db"] = "test";
                    values["query"] = "select table person";
                    var response = client.UploadValues("http://localhost:8123/query", values);
                    var responseString = Encoding.Default.GetString(response);
                     //CALLBACK
                    richTextBox1.Text = responseString;
                }
            }
        }
    }
