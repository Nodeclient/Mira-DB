module.exports = function (CUR, NEW_NAME) {
    // RENAME FILE
        if (require('fs').existsSync(CUR)) {
                require('fs').renameSync(CUR, NEW_NAME);
                    return true;
            } else {
                return false;
        }
};