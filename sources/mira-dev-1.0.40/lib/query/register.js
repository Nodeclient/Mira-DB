/*Engine 07.09.2019 */
    module.exports.TAG = require('./engine_string/mira_tag')(); // 09/14/19
    module.exports.STRING = require('./engine_string/mira_string')(); // 09/14/19
    module.exports.JS = require('./engine_string/mira_parse')(); // 09/14/19
/*UPDATE-UNIQUE 07.09.2019 */
    module.exports.UNIQUE_COL = require('./database_string/unique_column')(); // 09/14/19
    module.exports.UPDATE_ROW = require('./database_string/update_row')(); // 09/14/19
/*SELECT 07.09.2019 */
    module.exports.SELECT_TABLE = require('./database_string/select_table')(); // 09/14/19
    module.exports.SELECT_COLUMN = require('./database_string/select_column')(); // 09/14/19
    module.exports.SELECT_LIMIT = require('./database_string/select_limit')(); // 09/14/19
    module.exports.SELECT_FIND = require('./database_string/select_find')(); // 09/14/19
    module.exports.SELECT_FIND_LIKE = require('./database_string/select_find_like')(); // 09/14/19
    module.exports.SELECT_COUNT = require('./database_string/select_table_count')(); // 09/14/19
/*ADD 07.09.2019 */
    module.exports.ADD_ROW = require('./database_string/add_row')(); // 09/14/19
    module.exports.ADD_COLUMN = require('./database_string/add_column')(); // 09/14/19
/*RENAME 07.09.2019 */
    module.exports.RENAME_TABLE = require('./database_string/rename_table')(); // 09/14/19
    module.exports.RENAME_COLUMN = require('./database_string/rename_column')(); // 09/14/19
    module.exports.RENAME_DATABASE = require('./database_string/rename_database')(); // 09/14/19
/*DROP 07.09.2019 */
    module.exports.DROP_TABLE = require('./database_string/drop_table')(); // 09/14/19
    module.exports.DROP_DATABASE = require('./database_string/drop_database')(); // 09/14/19
/*DELETE 07.09.2019 */
    module.exports.DELETE_COLUMN = require('./database_string/delete_column')(); // 09/14/19
    module.exports.DELETE_ROW = require('./database_string/delete_row')(); // 09/14/19
    module.exports.DELETE_INDEX = require('./database_string/delete_index_row')(); // 09/14/19
/*CREATE 07.09.2019 */
    module.exports.CREATE_TABLE = require('./database_string/create_table')(); // 09/14/19
    module.exports.CREATE_DATABASE = require('./database_string/create_database')(); // 09/14/19
/*LIST 07.09.2019 */
    module.exports.LIST_DATABASE = require('./database_string/list_database')(); // 09/14/19
    module.exports.LIST_TABLE = require('./database_string/list_table')(); // 09/14/19