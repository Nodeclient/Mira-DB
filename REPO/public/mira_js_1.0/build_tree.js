function BUILD_TREE() {
	connDT = [];
	connDT.push({ "text": u + "@" + s, "children": [] });
	DB_TREE(u + "@" + s);
}

function DB_TREE(constr) {
	db.query("LIST DATABASE", function (data, err) {
		if (data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				for (let y = 0; y < connDT.length; y++) {
					if (connDT[y]["text"] == constr) {
						connDT[y]["children"].push({ "text": data[i], "iconCls": "icon-db", "state": "open", "children": [] });
					}
				}
			}
		} else {
			$('#sldb').datalist('loadData', []);
			$('#tree').tree('loadData', connDT);
			ERROR_TREE("DB_TREE",err);
		}
		TABLE_TREE(connDT);
	});
}

function TABLE_TREE(data) {
	var tbldata = [];
	for (let index = 0; index < data.length; index++) {
		var t_length = data[index]["children"].length;
		for (let k = 0; k < t_length; k++) {
			var tbl = data[index]["children"][k]["text"];
			db.query("LIST TABLE " + tbl, function (sdata, err) {
				if (tbl.length > 0) {
					tbldata.push({ A1: data[index]["children"][k]["text"], A2: sdata });
					if (t_length - 1 == k) { COMPILE_TREE(tbldata) }
				} else {
					ERROR_TREE("TABLE_TREE" , err);
				}
			});
		}
	}
}

function COMPILE_TREE(data) {
	for (let k = 0; k < data.length; k++) {
		for (let z = 0; z < connDT.length; z++) {
			for (let c = 0; c < connDT[z]["children"].length; c++) {
				if (connDT[z]["children"][c]["text"] == data[k]["A1"]) {
					for (let j = 0; j < data[k]["A2"].length; j++) {
						connDT[z]["children"][c]["children"].push({ "text": data[k]["A2"][j], "iconCls": "icon-tbl" });
					}
				}
			}
		}
	}
	$('#tree').tree('loadData', connDT);
	S_TABLE_DB();
}


function S_TABLE_DB() {
	db.query("LIST DATABASE", function (data, err) {
		var Datax = [];
		if (data.length > 0) {
			for (let i = 0; i < data.length; i++) {
				Datax.push({ "text": data[i], "group": "DB" })
			}
		} else {
			ERROR_TREE("S_TABLE_DB", err);
		}
			$('#sldb').datalist('loadData', Datax);
	});
}

function CREAT_NEW_TABLE(dbs, tb, cl, vl) {
	if (tb.length > 0) {
		if (cl.length > 0) {
			db.database = dbs;
			db.query("CREATE TABLE " + tb + " COLUMN " + JSON.stringify(cl) + " VALUE " + JSON.stringify(vl) + ";", function (result) {
				if (result == true) {
					BUILD_TREE();
					BUILD_MSG("iconQueryYes",  "Successfully -CREATE TABLE-  [" + tb + "]");
					$('#newtbl').dialog('close');
				} else {
					BUILD_MSG("iconQueryNo",  result["text"] );
				}
			});
		} else {
			$.messager.alert('ADD TABLE', "empty fields", 'warning');
		}
	} else {
		$.messager.alert('ADD TABLE', "empty table name", 'warning');
	}
}

function CREAT_NEW_DB(data) {
	db.query("CREATE DATABASE " + data, function (result) {
		if (result == true) {
			BUILD_MSG("iconQueryYes", "Successfully -CREATE-  [" + data + "]");
			BUILD_TREE();
		} else {
			BUILD_MSG("iconQueryNo",  result["text"] );
		}
	});
}


function REMOVE_DB(data) {
	db.query("DROP DATABASE " + data, function (result) {
		if (result == true) {
				BUILD_MSG("iconQueryYes", "Successfully -DROP-  [" + data + "]");
				BUILD_TREE();
		} else {
				BUILD_MSG("iconQueryNo",  result["text"] );
		}
	});
}

function LIST_TABLE(dbs, tb) {
	db.database = dbs;
	var table_cols = [[]]
	var dataTB = [];

	db.query("SELECT TABLE " + tb, function (sdata, err) {
		var keys = (function (o) { var ks = []; for (var k in o) ks.push(k); return ks })(sdata[0]);
		
		for (a in keys) {
			table_cols[0].push({ field: keys[a], title: keys[a], editor: 'text', width: 100 })
		}

		for (a in sdata) {
			dataTB.push(sdata[a])
		}
		$('#dg').datagrid({ data: dataTB, columns: table_cols });		
	});
}


function DROP_TABLE(dbs, tb) {
	db.database = dbs;
	db.query("DROP TABLE " + tb, function (sdata, err) {
		if (sdata == true) {
			$('#tbldlg').dialog('close');
			BUILD_MSG("iconQueryYes","Successfully -DROP TABLE-  [" + tb + "]");
			BUILD_TREE();
		} else {
			ERROR_TREE("QUERY DROP",sdata);
		}
	});
}

function REMOVE_TABLE(idx, dbs, tb) {
db.database = dbs;
if(idx){
	db.query("DELETE ROW " + tb +" INDEX " +idx, function (sdata, err) {
		if (sdata == true) {
			BUILD_MSG("iconQueryYes","Successfully -DELETE ROW-  [" + idx + "]");
			LIST_TABLE(CurrentDB,CurrentTB);
		} else {
			ERROR_TREE("QUERY DELETE",sdata);
		}
	});
} else {
	BUILD_MSG("iconQueryNo","Index Error [Please select row]");
}
}

function ADD_NEW_ROW(OBJ, dbs, tb) {
	db.database = dbs;
		var row = [];
		var keys = Object.keys(OBJ);	
			for (let i = 0; i < keys.length; i++) {
				row.push({ name: keys[i], value: '', group: tb , editor: 'text' });
			}
		$('#Addrowr').propertygrid('loadData', row);
	lastITable=tb;
}

function UPDATE_TABLE(OBJ, dbs, tb) {
	db.database = dbs;

	var row = [];
	var keys = Object.keys(OBJ);
	var vals = Object.values(OBJ);

		for (let i = 0; i < keys.length; i++) {
			row.push({ name: keys[i], value: vals[i], group: tb , editor: 'text' });
		}

		$('#edittbr').propertygrid('loadData', row);
			lastValue = row[0].value ;
			lastITable=tb;
}

function ADD_ROW_BTN() {
	var rows = $('#Addrowr').propertygrid('getRows');
	var cols = [];
	var vals = [];

	rows.forEach(element => {
		cols.push(element.name)
		vals.push(element.value)
	});

	db.query('ADD ROW ' + lastITable + ' COLUMN ' + JSON.stringify(cols)  + ' VALUE ' + JSON.stringify(vals) , function (sdata, err) {
		if (sdata == true) {
			BUILD_MSG("iconQueryYes","Successfully -ADD ROW- @" + lastITable );
			LIST_TABLE(CurrentDB,CurrentTB);
			$('#Addrow').dialog('close');
		} else {
			ERROR_TREE("QUERY ADD",sdata);
		}
	});
}

function EDIT_BTN() {
	var rows = $('#edittbr').propertygrid('getRows');
	
	var cols = [];
	var vals = [];

	rows.forEach(element => {
		cols.push(element.name)
		vals.push(element.value)
	});

	db.query('UPDATE ROW  ' + lastITable + ' COLUMN ' + JSON.stringify(cols)  + ' VALUE ' + JSON.stringify(vals) + ' FIND ["'+cols[0]+'","'+ lastValue + '"]', function (sdata, err) {
		if (sdata == true) {
			BUILD_MSG("iconQueryYes","Successfully -UPDATE TABLE- @" + lastITable );
			LIST_TABLE(CurrentDB,CurrentTB);
			lastValue = rows[0].value ;
			$('#editrow').dialog('close');
		} else {
			ERROR_TREE("QUERY UPDATE",sdata);
		}
	});
}


function BUILD_MSG(ICO,MSG){
	$("#footer").html('<svg class="'+ICO+'"></svg> ' + MSG );
		setTimeout(CLEAR_MSG, 9900);

}

function CLEAR_MSG(){
	$("#footer").html('&nbsp;' );
}

function ERROR_TREE(data) {
	console.log("DEBUG",data);
}