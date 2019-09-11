module.exports = function (STO, DB, DB_COL) {
    // Set Objcet Property
            Object.keys(DB).forEach(function (KEY) {
                for (var a in DB_COL) {
                    DB[KEY][DB_COL[a]] = "null";
                }
            });
        const DB_DATA = require("./CL16")(STO, require("./tool/ENC0")(JSON.stringify(DB)));
    return true;
};