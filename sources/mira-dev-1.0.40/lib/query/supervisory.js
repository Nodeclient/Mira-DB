//17.09.2019 
module.exports = {
    unique_table: function (q) {
        return q.indexOf("column") > -1 && q.indexOf("table") > -1;
    },
    update_table: function (q) {
        return q.indexOf("value") > -1 && q.indexOf("find") > -1 && q.indexOf("column") > -1;
    },
    list_table: function (q) {
        return q.indexOf("list") > -1 && q.indexOf("table") > -1;
    },
    list_database: function (q) {
        return q.indexOf("list") > -1 && q.indexOf("database") > -1;
    },
    drop_table: function (q) {
        return q.indexOf("drop") > -1 && q.indexOf("table") > -1;
    },
    drop_database: function (q) {
        return q.indexOf("drop") > -1 && q.indexOf("database") > -1;
    },
    create_table: function (q) {
        return q.indexOf("create") > -1 && q.indexOf("table") > -1 && q.indexOf("column") > -1 && q.indexOf("value") > -1;
    },
    create_database: function (q) {
        return q.indexOf("create") > -1 && q.indexOf("database") > -1;
    },
    delete_column: function (q) {
        return q.indexOf("delete") > -1 && q.indexOf("column") > -1 && q.indexOf("table") > -1;
    },
    delete_row: function (q) {
        return q.indexOf("delete") > -1 && q.indexOf("column") > -1 && q.indexOf("row") > -1;
    },
    delete_row_index: function (q) {
        return q.indexOf("delete") > -1 && q.indexOf("index") > -1 && q.indexOf("row") > -1;
    },
    rename_column: function (q) {
        return q.indexOf("rename") > -1 && q.indexOf("column") > -1 && q.indexOf("table") > -1 && q.indexOf("value") > -1;
    },
    rename_database: function (q) {
        return q.indexOf("rename") > -1 && q.indexOf("database") > -1 && q.indexOf("value") > -1;
    },
    rename_table: function (q) {
        return q.indexOf("rename") > -1 && q.indexOf("table") > -1 && q.indexOf("value") > -1;
    },
    add_row: function (q) {
        return q.indexOf("add") > -1 && q.indexOf("column") > -1 && q.indexOf("row") > -1;
    },
    add_column: function (q) {
        return q.indexOf("add") > -1 && q.indexOf("column") > -1 && q.indexOf("table") > -1;
    },
    select_find_like: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1 && q.indexOf("column") > -1 && q.indexOf("find") > -1 && q.indexOf("like") > -1;
    },
    select_find: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1 && q.indexOf("column") > -1 && q.indexOf("find") > -1;
    },
    select_table_column: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1 && q.indexOf("column") > -1;
    },
    select_table_limit: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1 && q.indexOf("limit") > -1;
    },
    select_table_count: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1 && q.indexOf("count") > -1;
    },
    select_table: function (q) {
        return q.indexOf("select") > -1 && q.indexOf("table") > -1;
    }
};