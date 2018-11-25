var SelectDB = null;
var CurrentDB = null;
var CurrentTB = null;
var lastITable;
var lastValue;
var lastDatabase;
var WindowTitle = "Database Admin";

//MAIN TITLE
$('#w').window({title:WindowTitle});
//MAIN TITLE

// TABLE WINDOW TOOLBAR BUTON
$("#srcbtn").bind("click", function () {
    if($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        //COMMAND 1
        } else {
        $(this).attr('data-click-state', 1);
        //COMMAND 2
    }
});

$("#addbtn").bind("click", function () {
    var row = $('#dg').datagrid('getRows')[0];
        $('#Addrow').dialog('open').dialog('setTitle',"&nbsp;ADD NEW RECORD"); 
            ADD_NEW_ROW (row,CurrentDB,CurrentTB);
});

$("#rembtn").bind("click", function () {
    var selectedrow = $("#dg").datagrid("getSelected");
    var rowIndex = $("#dg").datagrid("getRowIndex", selectedrow)+1;
    REMOVE_TABLE (rowIndex,CurrentDB,CurrentTB);
});


$("#editbtn").bind("click", function () {
    var row = $('#dg').datagrid('getSelected');
    $('#editrow').dialog('open').dialog('setTitle',"&nbsp;EDIT @"+ CurrentTB ); 
    UPDATE_TABLE (row,CurrentDB,CurrentTB);
});

$("#dropbtn").bind("click", function () {
    $.messager.confirm('DROP TABLE', 'TABLE@<b>'+CurrentTB+'</b> permanently delete from your database ?', function(r){
        if (r){
            DROP_TABLE(CurrentDB,CurrentTB);
        }
    });
});
// TABLE WINDOW TOOLBAR BUTON


$('#dg').datagrid({
    onDblClickRow:function(){
        var row = $(this).datagrid('getSelected');
        $('#editrow').dialog('open').dialog('setTitle',"&nbsp;EDIT @"+ CurrentTB ); 
        UPDATE_TABLE (row,CurrentDB,CurrentTB);
    }
});

//TREEVIEW
$('#tree').tree({
    onSelect: function(node){
        if(node.iconCls=="icon-db"){
            SelectDB = node.text;
        }
        if(node.iconCls=="icon-tbl"){
            CurrentDB =  $('#tree').tree('getParent',node.target).text;
        }
    },
    onDblClick: function(node){
        if(node.iconCls=="icon-tbl"){
            CurrentTB =  node.text;
            $('#tbldlg').dialog('open').dialog('setTitle',"&nbsp;"+ CurrentDB + "@" + CurrentTB ); 
            LIST_TABLE(CurrentDB,node.text);
            $("#srcbtn").attr('data-click-state', 1);
        }
    }
});
//TREEVIEW

//INIT            
 $(document).ready(function(){
//inptxt outtxt
    $('#inptxt').textbox('textbox').bind('keypress', function(e){
        if (e.which == 13) {
            var txt = $(this).val();
		//SelectDB = $('#sldb').datalist('getSelected')["text"];
		if(SelectDB){
		        db.database = SelectDB ;  
		        db.query(txt,function(result){
		            $('#outtxt').textbox('setValue','\nDATABASE : '+SelectDB+'\n\nQUERY : ' + txt + '\n\n'+ JSON.stringify(result));
		        });
		}else{
	 		 $.messager.alert('empty name', "select a database", 'error');
		}
        }
    });
//inptxt outtxt
});
//INIT 