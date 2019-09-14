module.exports = function (STO, DB, OLD_NAME, NEW_NAME) {
    //EXISTS FOLDER
    let SET_ERR = [];
        for ( const A in OLD_NAME ) {
                    if (require('./LC42')(require('path').join(STO, OLD_NAME[A])) ) {} else {
                        SET_ERR.push(OLD_NAME[A]);
                    }
        }
    return [SET_ERR.length, SET_ERR];
};