namespace WindowsFormsApplication1
{


    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            MIRA.database db = new MIRA.database(); // MIRA.DLL
                db.User = "root"; //USER NAME
                db.Password = ""; //USER PASSWORD
                db.Database = "test"; //DATABASE NAME
                db.Server = "http://localhost:8123/query"; //DB SERVER ADRESS


            String result = db.Query("select table person"); //QUERY


            if (result != "Connection Error!") {
                ArrayList data = db.row(result);
                int count = data.Count;

                textBox1.Text += "TOTAL RECORD : (" + count +")"+ System.Environment.NewLine;

                foreach (dynamic value in data) {
                    textBox1.Text += value["col1"] + System.Environment.NewLine;
                }

            } else {
                MessageBox.Show("Remote Database server Offline", "Err");
            }
           

        }
    }
}
