module.exports = function (OBC, OBF) {
    // SET MERGE
    let K = '';
        for (K in OBC)
            if (OBC[K] != OBF[K]) return false;
                for (K in OBF)
                    if (OBC[K] != OBF[K]) return false;
    return true;
};