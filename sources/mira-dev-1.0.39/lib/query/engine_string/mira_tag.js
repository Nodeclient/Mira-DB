module.exports = function () {
    const TB_TAG = /\*|UNIQUE|INDEX|SELECT|LIMIT|COUNT|ADD|ROW|DROP|RENAME|LIST|VALUE|COLUMN|DELETE|UPDATE|CREATE|DATABASE|TABLE|FIND|LIKE/ig;
        return TB_TAG;
};