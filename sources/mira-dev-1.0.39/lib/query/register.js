/*Engine*/
module.exports.TAG = require('./engine_string/mira_tag')(); //+
module.exports.STRING = require('./engine_string/mira_string')(); //+
module.exports.JS = require('./engine_string/mira_parse')(); //+
/*UPDATE-UNIQUE*/
module.exports.UNIQUE_COL = require('./database_string/unique_column')(); //+
module.exports.UPDATE_ROW = require('./database_string/update_row')(); //+
/*SELECT*/
module.exports.SELECT_TABLE = require('./database_string/select_table')(); //+
module.exports.SELECT_COLUMN = require('./database_string/select_column')(); //+
module.exports.SELECT_LIMIT = require('./database_string/select_limit')(); //+
module.exports.SELECT_FIND = require('./database_string/select_find')(); //+
module.exports.SELECT_FIND_LIKE = require('./database_string/select_find_like')(); //+
module.exports.SELECT_COUNT = require('./database_string/select_table_count')(); //+
/*ADD*/
module.exports.ADD_ROW = require('./database_string/add_row')(); //+
module.exports.ADD_COLUMN = require('./database_string/add_column')(); //+
/*RENAME*/
module.exports.RENAME_TABLE = require('./database_string/rename_table')(); //+
module.exports.RENAME_COLUMN = require('./database_string/rename_column')(); //+
module.exports.RENAME_DATABASE = require('./database_string/rename_database')(); //+
/*DROP*/
module.exports.DROP_TABLE = require('./database_string/drop_table')(); //+
module.exports.DROP_DATABASE = require('./database_string/drop_database')(); //+
/*DELETE*/
module.exports.DELETE_COLUMN = require('./database_string/delete_column')(); //+
module.exports.DELETE_ROW = require('./database_string/delete_row')(); //+
module.exports.DELETE_INDEX = require('./database_string/delete_index_row')(); //+
/*CREATE*/
module.exports.CREATE_TABLE = require('./database_string/create_table')(); //+
module.exports.CREATE_DATABASE = require('./database_string/create_database')(); //+
/*LIST*/
module.exports.LIST_DATABASE = require('./database_string/list_database')(); //+
module.exports.LIST_TABLE = require('./database_string/list_table')(); //+