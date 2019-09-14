module.exports = function () {
    /* MIRA-DB SYSTEM CONFIG */
    const _sha2 = require('crypto').createHash('sha256').update('bin').digest();
        let _signature = (typeof process.env.MIRA_DB_TOKEN == "undefined" || process.env.MIRA_DB_TOKEN == "" || process.env.MIRA_DB_TOKEN == null) ? "E4WXqn_IotaTPN6E" : process.env.MIRA_DB_TOKEN;
        let _header = (typeof process.env.SET_FILE_HEADER == "undefined" || process.env.SET_FILE_HEADER == "" || process.env.SET_FILE_HEADER == null) ? "JQL1" : process.env.SET_FILE_HEADER;
        let _ext = (typeof process.env.SET_FILE_EXTENSION == "undefined" || process.env.SET_FILE_EXTENSION == "" || process.env.SET_FILE_EXTENSION == null) ? require('../UF51')(".", "jsq") : require('../UF51')(".", process.env.SET_FILE_EXTENSION);
    return {
        cryptkey: _sha2,
        signature: _signature,
        header: _header,
        ext: _ext,
        alg: 'aes-256-ctr'
    };
};