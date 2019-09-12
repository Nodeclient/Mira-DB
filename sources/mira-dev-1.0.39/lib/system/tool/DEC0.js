module.exports = function (STR) {
    /* Set DECODE */
        var config = require('./CONFIG')();
            if (STR === null || typeof STR === 'undefined' || STR === '') { return STR };
                var D = require('crypto').createDecipheriv(config.alg, config.cryptkey, config.signature);
                    var E = D.update(STR.slice(config.header.length), 'binary', 'utf8');
        if ( STR.slice(0, config.header.length) == config.header ) {
            E  += D.final('utf8');
                return E ;
            } else {
                return {resume:false, code: "5689", message: "Cannot Open Database File" };
            }
};