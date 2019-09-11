module.exports = function (HS, ND) {
    // CHECK ITEM
        for (var i = 0; i < HS.length; i++)
            if ( require('./CO40')(HS[i], ND) ) return true;
                return false;
};