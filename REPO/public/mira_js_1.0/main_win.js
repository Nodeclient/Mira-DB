function NEW_DB() {
    var row = $('#ndbtx').textbox('getValue');
    if (row.match(/^[A-Za-z0-9_-]{3,16}$/)) {
        CREAT_NEW_DB(row);
    } else {
        $.messager.alert('CREAT DATABASE', "<b>" + row + "</b>" + "<br>" + "invalid a database name", 'warning');
    }
}

function REM_DB() {
    var row = $('#sldb').datalist('getSelected');
    if (row) {
        $.messager.confirm('DROP DATABASE', 'DB@<b>'+ row["text"] +'</b> permanently delete in your storage ?', function(r){
            if (r){
                REMOVE_DB(row["text"]);
            }
        });
    } else {
        $.messager.alert('DROP DATABASE', "select a database", 'error');
    }

}

function opendlG() {
    var row = $('#sldb').datalist('getSelected');
    if (row) {
        $('#newtbl').dialog('open').dialog('center').dialog('setTitle', "creating new table");
        $('#fpg').propertygrid('loadData', []);
        $('#tblnam').textbox({ value: "" });
        $('#tblcol').textbox({ value: "" });
    } else {
        $.messager.alert('empty name', "select a database", 'error');
    }
}


function ADD_BTN() {
    var Col = [];
    var Val = [];
    var rows = $('#fpg').propertygrid('getRows');
    var Tbln = $('#tblnam').textbox('getValue').trim();
    var Sld = $('#sldb').datalist('getSelected');

    for (var i = 0; i < rows.length; i++) {
        Col.push(rows[i].name);
        Val.push(rows[i].value);
            if (rows.length - 1 == i) {
                CREAT_NEW_TABLE(Sld["text"],Tbln,Col,Val);
            }
    }
}

function ADD_COL(data) {
    var tbn = $('#tblcol').textbox('getValue').trim();
    var chkrw = $('#fpg').propertygrid('getRows');
    var row = { name: tbn, value: '', group: 'COL', editor: 'text' };


    if (checkColexist(chkrw, tbn)) {
        if (tbn.length > 0) {
            $('#fpg').propertygrid('appendRow', row);
        } else {
            $.messager.alert('ADD COLUMN', 'empty string', 'warning');
        }
    } else {
        $.messager.alert('ADD COLUMN', 'name is already inserted..', 'warning');
    }
}

function checkColexist(obj, ChkStr) {
    for (var i = 0; i < obj.length; i++) { if (obj[i]["name"] == ChkStr) { return false; } } return true;
}

function DEL_COL(data) {
    var row = $('#fpg').propertygrid('getSelected');
    var index = $('#fpg').propertygrid('getRowIndex', row);
    $('#fpg').propertygrid('deleteRow', index);
}