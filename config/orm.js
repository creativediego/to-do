//Import mySQL
const connection = require("./connection");

//Object for all SQL methods
const orm = {

    selectAll: function(table, callback) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, data) {

            if (err) throw err;
            callback(data);

        });

    },

    selectAllComplete: function(table, callback) {
        const query = "SELECT * FROM ?? WHERE completed = 1";
        connection.query(query, [table], function(err, data) {

            if (err) throw err;
            callback(data);

        });

    },

    selectAllIncomplete: function(table, callback) {
        const query = "SELECT * FROM ?? WHERE completed = 0";
        connection.query(query, [table], function(err, data) {

            if (err) throw err;
            callback(data);

        });

    },

    insertOne: function(table, taskName, callback) {
        const query = "INSERT INTO ?? (task) VALUES (?)"
        connection.query(query, [table, taskName], function(err, data) {

            if (err) throw err;
            callback(data);

        });
    },

    updateOne: function(table, idNumber, callback) {
        const query = "UPDATE ?? SET completed = 1 WHERE  id = ?"
        connection.query(query, [table, idNumber], function(err, data) {

            if (err) throw err;
            callback(data);

        });
    },

    deleteOne: function(table, idNumber, callback) {
        const query = "DELETE FROM ?? WHERE  id = ?"
        connection.query(query, [table, idNumber], function(err, data) {

            if (err) throw err;
            callback(data);

        });
    }

};

module.exports = orm;