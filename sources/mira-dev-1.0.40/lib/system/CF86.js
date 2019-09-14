module.exports = function (SRC_TO, OBJ, SRC_ARR) {
    // Find Objcet Property Strings
    var SRC_RES = [];
        SRC_TO =  require('./tool/TS84')(SRC_TO);
            for (var i = 0; i < OBJ.length; i++) {
                for (var h = 0; h < SRC_ARR.length; h++) {
                    if (OBJ[i][SRC_ARR[h]] == SRC_TO) {
                        if (!require('./tool/MX56')(SRC_RES, OBJ[i])) SRC_RES.push(OBJ[i]);
                    }
                }
            }
    return SRC_RES;
};