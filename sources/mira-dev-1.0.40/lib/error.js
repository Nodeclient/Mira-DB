/*
    Mira-db 
    https://www.npmjs.com/package/mira-db
*/

let DB_LANG = (typeof process.env.SET_LANG === "undefined" || process.env.SET_LANG === "") ? "en_us" : String(process.env.SET_LANG).toLowerCase();

module.exports = {
        Error: function (CODE, ARR) {
            try {
                var SET_RESULT = false;
                    var GET_ERR = require("../lang/" + DB_LANG + ".json");  
                        if (typeof GET_ERR == "object") {
                            if (Array.isArray(GET_ERR["Error"])) {
                            var E_ID=GET_ERR["Error"];
                                    for (const A in E_ID) {
                                        if (E_ID[A]["id"] == CODE) {
                                                SET_RESULT = { "resume":  E_ID[A]["resume"] , "code":  E_ID[A]["code"] , "text":SET_STRING_TAG(E_ID[A]["msg"], ARR ).string };
                                            break;
                                        } else {
                                                SET_RESULT = { "resume": false,"code": "MIRA-0","text": "Error Code (" + CODE + ") Not Found!" };
                                        }
                                    }
                                return SET_RESULT;
                            } else {
                                return { "resume": false,"code": "MIRA-0", "text": "SET_ERROR: FAILED ARRAY" };
                            }
                        }
            } catch (err) {
                return { "resume": false, "code": "MIRA-0", "text": err["message"] };
            }
        }
};

function SET_STRING_TAG(string, arr) {
    var match = String(string).match(/%s/gi);
    var input = String(string);
    if (Array.isArray(arr)) {
      for (var i in match) {
        var str = (typeof arr[i] == "undefined") ? null : arr[i];
            input = input.slice(0, input.indexOf("%s")) + input.slice(input.indexOf("%s"), input.length).replace("%s", str) + input.slice(input.length);
      }
      return {
        "resume": true,
        "string": input,
        "error": null
      };
    } else {
      return {
        "resume": false,
        "string": null,
        "error": "Unknow array format!"
      };
    }
};