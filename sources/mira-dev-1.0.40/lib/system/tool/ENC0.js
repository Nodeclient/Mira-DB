module.exports = function (STR) {
    /* Set ENCODE */
    var config = require('./CONFIG')();
        var R = require('crypto').createCipheriv(config.alg, config.cryptkey, config.signature);
            var C = config.header + R.update(STR, 'utf8', 'binary');
                    C += R.final('binary');
                            return C;
};