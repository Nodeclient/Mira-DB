/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

module.exports = {
Error : function(_n,_a) { try { 
_n = typeof _n !== 'undefined' ? _n : "0"; _a = typeof _a !== 'undefined' ? _a : "Null,Null"; var _str= _a.split("<>");
switch(_n) { 
case "a0xj0s1":  
return {"resume":true,"code":"MIRA","text":"null"};
break;
case "a0xj001":  
return {"resume":true,"code":"MIRA_2001","text":  J_string("connection was successful %s",[_str[0]])  };
break;
case "a0xj002":  
return {"resume":false,"code":"MIRA_2002","text": J_string("server startup failed %s",[_str[0]])  };
break;
case "w0xj001":  
return {"resume":false,"code":"MIRA_3001","text": J_string("access denied for (%s) user to (%s) database",[ _str[0] , _str[1] ]) };
break;
case "e0xj001":  
return {"resume":false,"code":"MIRA_3002","text": J_string("access denied (%s)",[_str[0]]) };
break;
case "e0xj002":  
return {"resume":false,"code":"MIRA_2003","text": J_string("your client version rejected by the server %s",[_str[0]])  };
break;
case "e0xje01":  
return {"resume":false,"code":"MIRA_1001","text": J_string("you have an error in your MIRA syntax %s",[_str[0]])  };
break;
case "e0xje02":  
return {"resume":false,"code":"MIRA_1002","text": J_string("unknow query error -> (%s)",[_str[0]]) };
break;
case "e0xje02a":  
return {"resume":false,"code":"MIRA_10021","text": J_string("last column cannot be deleted %s",[_str[0]]) };
break;
case "e0xje03":  
return {"resume":false,"code":"MIRA_1003","text": J_string("you have an error in your (UPDATE query) %s",[_str[0]])  };
break;
case "e0xje04":  
return {"resume":false,"code":"MIRA_1004","text": J_string("you have an error in your (SELECT query) %s",[ ErrorMessages(_str[0],"table or column") ]) };
break;
case "e0xje05":  
return {"resume":false,"code":"MIRA_3003","text": J_string("database file is damaged %s",[_str[0]])  };
break;
case "e0xje06":  
return {"resume":false,"code":"MIRA_3004","text":  J_string("cannot read table (%s) from database",[ _str[0] ]) };
break;
case "e0xje07":  
return {"resume":false,"code":"MIRA_3005","text":  J_string("cannot read column (%s) to (%s) from table",[ _str[0] , _str[1] ]) };
break;
case "e0xje08":  
return {"resume":false,"code":"MIRA_10051","text":  J_string("you have an error in your (INSERT query) %s",[ ErrorMessages(_str[0],"table or column") ]) };
break;
case "e0xje09":  
return {"resume":false,"code":"MIRA_1006","text": J_string("you have an error in your (CREATE query) %s",[_str[0]])  };
break;
case "e0xje10":  
return {"resume":false,"code":"MIRA_1007","text": J_string("cannot create database (%s) illegal or ambiguous name -> permitted only [0-9,a-z,A-Z_]",[_str[0]]) };
break;
case "e0xje11":  
return {"resume":false,"code":"MIRA_1008","text": J_string("cannot create table (%s) illegal or ambiguous name -> permitted only [0-9,a-z,A-Z_]",[_str[0]]) };
break;
case "e0xje12":  
return {"resume":false,"code":"MIRA_2004","text": J_string("cannot open database (%s) damaged or unreadable",[_str[0]]) };
break;
case "e0xje213":  
return {"resume":false,"code":"MIRA_2005","text": J_string("database file is damaged or not exist (%s)",[_str[0]]) };
break;
case "e0xje13":  
return {"resume":false,"code":"MIRA_2005","text": J_string("database folder does not exist (%s)",[_str[0]]) };
break;
case "e0xje14":  
return {"resume":false,"code":"MIRA_3006","text":  J_string("permission denied type:('%s')",[ _str[0] ]) };
break;
case "e0xje16":  
return {"resume":false,"code":"MIRA_1009","text":  J_string("you have an error in your query (%s)",[ _str[0] ])   };
break;
case "e0xje17":  
return {"resume":false,"code":"MIRA_3008","text": J_string("empty database (name) in connection string %s",[_str[0]]) };
break;
case "e0xjl01":  
return {"resume":false,"code":"MIRA_2006","text": J_string("could not open configuration file! -> '%s'",[_str[0]])   };
break;
case "e0xjl02":  
return {"resume":false,"code":"MIRA_3011","text": J_string("username or password not recognized %s",[_str[0]])  };
break;
case "e0xjl03":  
return {"resume":false,"code":"MIRA_2007","text": J_string("cannot open database! '%s'",[_str[0]]) };
break;
case "e0xjl04":  
return {"resume":false,"code":"MIRA_2008","text": J_string("cannot open policy file %s",[_str[0]]) };
break;
case "e0xjl05":  
return {"resume":false,"code":"MIRA_2009","text":  J_string("unknow file error -> '%s'",[_str[0]]) };
break;
case "e0xj0s1":  
return {"resume":false,"code":"MIRA_2010","text": J_string("server header error %s",[_str[0]]) };
break;
case "e0xj0s2":  
return {"resume":false,"code":"MIRA_3012","text": J_string("(client's) send function error %s",[_str[0]]) };
break;
case "e0xj0s3":  
return {"resume":false,"code":"MIRA_3013","text": J_string("send function error %s",[_str[0]]) };
break;
case "e0xj0s4":  
return {"resume":false,"code":"MIRA_3014","text": J_string("authentication function error %s",[_str[0]]) };
break;
case "e0xj0s5":  
return {"resume":false,"code":"MIRA_3015","text": J_string("client disconnect function error %s",[_str[0]])  };
break;
case "e0xj0s6":  
return {"resume":false,"code":"MIRA_3016","text": J_string("client connect function error %s",[_str[0]])  };
break;
case "w0xj0s1":  
return {"resume":false,"code":"MIRA_3017","text":  J_string("Disconnected '%s'",[_str[0]]) };
break;
case "w0xj0s2":  
return {"resume":false,"code":"MIRA_3018","text":  J_string("Connected '%s'",[_str[0]]) };
break;
case "w0xj0s3":  
return {"resume":false,"code":"MIRA_30181","text":  J_string("Accept Waiting '%s'",[_str[0]]) };
break;
case "w0xjs03":  
return {"resume":false,"code":"MIRA_1010","text":  J_string("database (%s) already exists!",[ _str[0] ] ) };
break;
case "w0xjs04":  
return {"resume":false,"code":"MIRA_1011","text":  J_string("cannot remove database '%s' file system error!",[_str[0]]) };
break;
case "w0xjs05":  
return {"resume":false,"code":"MIRA_1012","text":  J_string("cannot remove table '%s'!",[_str[0]]) };
break;
case "w0xjs06":  
return {"resume":false,"code":"MIRA_1013","text":  J_string("table (%s) already exists!",[_str[0]]) };
break;
case "w0xjs07":  
return {"resume":false,"code":"MIRA_1014","text":  J_string("cannot open table (%s) damaged or unreadable!",[_str[0]])  };
break;
case "e0xj0s7":  
return {"resume":false,"code":"MIRA_3019","text":  J_string("mod function error %s",[_str[0]]) };
break;
case "e0xj0s8":  
return {"resume":false,"code":"MIRA_3020","text":  J_string("filesystem function error %s",[_str[0]]) };
break;
case "e0xj0s9":  
return {"resume":false,"code":"MIRA_1015","text":  J_string("remove database function error %s",[_str[0]])  };
break;
case "e0xjs10":  
return {"resume":false,"code":"MIRA_1016","text":  J_string("remove table function error %s",[_str[0]]) };
break;
case "e0xjs11":  
return {"resume":false,"code":"MIRA_1017","text":  J_string("cannot read database (filesystem error) %s",[_str[0]])  };
break;
case "e0xjs12":  
return {"resume":false,"code":"MIRA_1018","text":  J_string("cannot remove database (filesystem error) %s",[_str[0]])  };
break;
case "e0xjs13":  
return {"resume":false,"code":"MIRA_1019","text":  J_string("duplicate database name %s are not allowed!",[_str[0]])  };
break;
case "e0xjs14":
return {"resume":false,"code":"MIRA_1020","text":  J_string("cannot creat database (filesystem error) %s",[_str[0]]) };
break;
case "e0xjs15":
return {"resume":false,"code":"MIRA_1021","text":  J_string("cannot build database (filesystem error) %s",[_str[0]])  };
break;
case "e0xjs16":
return {"resume":false,"code":"MIRA_1022","text":  J_string("cannot creat table (filesystem error) %s",[_str[0]]) };
break;
case "e0xjs17":
return {"resume":false,"code":"MIRA_1023","text":  J_string("cannot open table (critical error) %s",[_str[0]]) };
break;
case "e0xjm01":  
return {"resume":false,"code":"MIRA_6379","text":  J_string("string (%s) cannot be found in table",[ _str[0] ]) };
break;
case "e0xjm02":  
return {"resume":false,"code":"MIRA_6310","text":  J_string("column not found : (%s) ",[ _str[0] ]) };
break;
case "e0xjm03":  
return {"resume":false,"code":"MIRA_6209","text":  J_string("querystring : (%s) error ",[ _str[0] ]) };
break;
case "e0xjm04":  
return {"resume":false,"code":"MIRA_6309","text":  J_string("querystring : %s (VALUE) missing",[ _str[0] ]) };
break;
case "e0xjm041":  
return {"resume":false,"code":"MIRA_63091","text":  J_string("querystring : %s (INDEX) missing",[ _str[0] ]) };
break;
case "e0xjm041a":  
return {"resume":false,"code":"MIRA_6910","text":  J_string("Empty Table -> (%s)",[ _str[0] ]) };
break;
case "e0xjm05":  
return {"resume":false,"code":"MIRA_6308","text":  J_string("querystring : %s (COLUMN) missing",[ _str[0] ]) };
break;
case "e0xjm06":  
return {"resume":false,"code":"MIRA_6068","text":  J_string("querystring : table  %s  missing",[ _str[0] ]) };
break;
case "e0xjm07":  
return {"resume":false,"code":"MIRA_6069","text":  J_string("querystring : database  %s  missing",[ _str[0] ]) };
break;
case "e0xjm08":  
return {"resume":false,"code":"MIRA_3610","text":  J_string("maximum memory limit at (%s)",[ _str[0] ]) };
break;
}}catch(err) { return  {"resume":false,"code":"MIRA-0","text": ""+err } ;}
}};

function J_string(__t, __v) { return __t.replace(/%s/g, function() { return __v.shift()})}
function ErrorMessages(_e,_m) { var c_ = _e.toLowerCase(); var _r = c_.match(/cannot|read|property|undefined/gi); if ( _r.indexOf("cannot") > -1 && _r.indexOf("read") > -1 && _r.indexOf("undefined") > -1 ){ return "not exists "+_m; }};