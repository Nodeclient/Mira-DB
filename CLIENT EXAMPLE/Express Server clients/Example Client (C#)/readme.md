#### Import Referance & Library (1.0.1 for windows) - Net4.0

 MIRA.DLL
[Source Code (MIRA.DLL)-1.0.1.zip](https://git.io/fpvoI "Windows DLL")


## Example Code

```cs
 MIRA.database db = new MIRA.database(); // MIRA.DLL
   db.User = "root"; //USER NAME
   db.Password = ""; //USER PASSWORD
   db.Database = "test"; //DATABASE NAME
   db.Server = "http://localhost:8123/query"; //DB SERVER ADRESS


 String result = db.Query("select table person"); //QUERY


 if (result != "Connection Error!") {
   ArrayList data = db.row(result);
   int count = data.Count;
                
   //Select Row Index -> data[<INDEX>][<COLUMN_NAME>]; 
   textBox1.Text += "List INDEX=2 : " +data[2]["col1"] + System.Environment.NewLine; 
   // Show total record count <number>
   textBox1.Text += "TOTAL RECORD : (" + count +")" + System.Environment.NewLine;

   foreach (dynamic value in data) {
      //List All Rows -> value[<COLUMN_NAME>]
      textBox1.Text += value["col1"] + value["col2"] + value["col3"] + System.Environment.NewLine;
   }
} else {
  MessageBox.Show("Remote Database server Offline", "Err");
}
```
