/*Engine*/
module.exports.TAG = require('./engine_string/mira_tag')(); //+
module.exports.STRING = require('./engine_string/mira_string')(); //+
module.exports.JS = require('./engine_string/mira_parse')(); //+
/*UPDATE-UNIQUE*/
module.exports.UNIQUE_COL = require('./unique_column')(); //+
module.exports.UPDATE_ROW = require('./update_row')(); //+
/*SELECT*/
module.exports.SELECT_TABLE = require('./select_table')(); //+
module.exports.SELECT_COLUMN = require('./select_column')(); //+
module.exports.SELECT_LIMIT = require('./select_limit')(); //+
module.exports.SELECT_FIND = require('./select_find')(); //+
module.exports.SELECT_FIND_LIKE = require('./select_find_like')(); //+
module.exports.SELECT_COUNT = require('./select_table_count')(); //+
/*ADD*/
module.exports.ADD_ROW = require('./add_row')(); //+
module.exports.ADD_COLUMN = require('./add_column')(); //+
/*RENAME*/
module.exports.RENAME_TABLE = require('./rename_table')(); //+
module.exports.RENAME_COLUMN = require('./rename_column')(); //+
module.exports.RENAME_DATABASE = require('./rename_database')(); //+
/*DROP*/
module.exports.DROP_TABLE = require('./drop_table')(); //+
module.exports.DROP_DATABASE = require('./drop_database')(); //+
/*DELETE*/
module.exports.DELETE_COLUMN = require('./delete_column')(); //+
module.exports.DELETE_ROW = require('./delete_row')(); //+
module.exports.DELETE_INDEX = require('./delete_index_row')(); //+
/*CREATE*/
module.exports.CREATE_TABLE = require('./create_table')(); //+
module.exports.CREATE_DATABASE = require('./create_database')(); //+
/*LIST*/
module.exports.LIST_DATABASE = require('./list_database')(); //+
module.exports.LIST_TABLE = require('./list_table')(); //+