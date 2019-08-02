var JQL_TAG = /\*|UNIQUE|INDEX|SELECT|LIMIT|COUNT|ADD|ROW|DROP|RENAME|LIST|VALUE|COLUMN|DELETE|UPDATE|CREATE|DATABASE|TABLE|FIND|LIKE/ig;

var SELECT_TABLE =       /TABLE[ ]+(.*\S+\w+)/ig; 
var SELECT_COLUMN =      /TABLE[ ]+(.*?)[ ]+COLUMN[ ]+/ig; 
var UNIQUE_COLUMN =      /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)/ig; 
var SELECT_LIMIT =       /TABLE[ ]+(.*?)[ ]+LIMIT[ ]+/ig; 
var SELECT_FIND =        /TABLE[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+FIND(.*?)[ ]+/gi;
var SELECT_FIND_LIKE =   /TABLE[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+FIND(.*?)[ ]+LIKE/ig; 
var SELECT_TABLE_COUNT = /TABLE[ ]+(.*?)[ ]+COUNT/ig; 
var ADD_ROW =            /ROW[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+VALUE(.*?)[ ]+/gi; 
var UPDATE_ROW =         /ROW[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+VALUE(.*?)[ ]+FIND(.*?)[ ]+/gi; 
var ADD_COLUMN =         /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)/ig; 
var RENAME_TABLE =       /TABLE[ ]+(.*?)[ ]+VALUE[ ]+/ig; 
var RENAME_COLUMN =      /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)[ ]+VALUE(.*?)[ ]+/gi;
var RENAME_DATABASE =    /DATABASE[ ]+(.*?)[ ]+VALUE[ ]+/ig;
var DELETE_COLUMN =      /COLUMN[ ]+(.*?)[ ]+TABLE[ ]+(.*\S+\w+)/ig; 
var DELETE_ROW =         /ROW[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+VALUE(.*?)[ ]+/gi;
var DELETE_ROW_INDEX =   /ROW[ ]+(.*?)[ ]+INDEX[ ]+/ig;
var CREATE_TABLE =       /TABLE[ ]+(.*?)[ ]+COLUMN[ ]+(.*?)[ ]+VALUE(.*?)[ ]+/gi; 
var CREATE_DATABASE =    /DATABASE[ ]+(.*\S+\w+)/ig; 
var DROP_TABLE =         /DROP[ ]+TABLE[ ]+(.*\S+\w+)/ig; 
var DROP_DATABASE =      /DROP[ ]+DATABASE[ ]+(.*\S+\w+)/ig;
var LIST_DATABASE =      /LIST[ ]+DATABASE[ ]+(.*\S+\w+)/ig;
var LIST_TABLE =         /LIST[ ]+TABLE[ ]+(.*\S+\w+)/ig;
var STRING_PARSE =       /([a-zA-Z]+)|("[a-zA-Z\s]+"?)\s?/g;
var JQL_PARSE =          /[";']/g;

module.exports = { 
    TAG:JQL_TAG,
    STRING:STRING_PARSE,
    SELECT_TABLE:SELECT_TABLE,
    SELECT_COLUMN:SELECT_COLUMN,
    SELECT_FIND:SELECT_FIND,
    SELECT_FIND_LIKE:SELECT_FIND_LIKE,
    SELECT_LIMIT:SELECT_LIMIT,
    SELECT_COUNT:SELECT_TABLE_COUNT,
    ADD_ROW:ADD_ROW,
    ADD_COLUMN:ADD_COLUMN,
    RENAME_TABLE:RENAME_TABLE,
    RENAME_COLUMN:RENAME_COLUMN,
    RENAME_DATABASE:RENAME_DATABASE,
    DROP_TABLE:DROP_TABLE,
    DROP_DATABASE:DROP_DATABASE,
    DELETE_COLUMN:DELETE_COLUMN,
    DELETE_ROW:DELETE_ROW,
    DELETE_INDEX:DELETE_ROW_INDEX,
    CREATE_TABLE:CREATE_TABLE,
    CREATE_DATABASE:CREATE_DATABASE,
    LIST_DATABASE:LIST_DATABASE,
    UPDATE_ROW:UPDATE_ROW,
	UNIQUE_COL:UNIQUE_COLUMN,
    LIST_TABLE:LIST_TABLE,
    JS:JQL_PARSE
}