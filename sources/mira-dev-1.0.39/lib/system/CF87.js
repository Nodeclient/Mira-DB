module.exports = function (TOS, OBJ, ARR) {
    // Find Like String in OBJect
    var CUR = [] , SET_ERR = [];
        TOS = require('./tool/TS84')(TOS); //TRIM
            for (var i = 0; i < OBJ.length; i++) {
                for (var h = 0; h < ARR.length; h++) {
                    if (typeof OBJ[i][ARR[h]] !== 'undefined') {
                        if (OBJ[i][ARR[h]].indexOf(TOS) != -1) {
                            if (!require('./tool/MX56')(CUR, OBJ[i])) CUR.push(OBJ[i]); //EXISTS
                        }
                    } else {
                        SET_ERR.push(ARR[h]);
                    }
                }
            }

        if (SET_ERR.length == 0) {
                return CUR;
            } else {
                return require('../error_handling').Error("e0xjm05", JSON.stringify(require('./UF50')(SET_ERR)));
        }
};