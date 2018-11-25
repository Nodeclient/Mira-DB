
//--------------------------------------WINDOW LOGIN
var u,p,s;
var db ;
var connDT = [];

$( document ).ready(function() {
	$('#w').window('close'); 
});

function LoginDB(n){
	u = $('#dbid').textbox('getValue') ;
	p = $('#dbpass').textbox('getValue');
	s = $('#dbserv').textbox('getValue');
	//error,question,info,warning.

	db = new MiraDB(u,p ,"http://" + s +"/query","*");  
	db.query(null,function(result){
		if(result==null){
			$.messager.alert('Login Error',"invalid username or password" ,'error' );
		} else {
			BUILD_TREE();
			$('#w').window('open'); 
			$('#dlg').window('close'); 
			$("#footer").html( "Login - "+u+"@"+s );
		}
	 });  
}
//--------------------------------------WINDOW LOGIN