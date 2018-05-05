//Import SQL methods
const orm = require("../config/orm");

//Object for database methods to be used in routes/router
const task = {
    allTasks: function(cb) {
        orm.selectAll("tasks", function(result) {

            cb(result);

        });
    },

    allCompleted: function(cb) {
        orm.selectAllComplete("tasks", function(result) {

            cb(result);

        });
    },

    allIncomplete: function(cb) {

        orm.selectAllIncomplete("tasks", function(result) {

            cb(result);

        });

    },

    create: function(task, cb) {

        orm.insertOne("tasks", task, function(result) {

            cb(result);
        })

    },

    complete: function(id, cb) {

        orm.updateOne("tasks", id, function(resut) {

            cb(result);
        })

    },

    delete: function(id, cb) {

        orm.deleteOne("tasks", id, function(result) {

            cb(result);
        })

    }

};

module.exports = task;