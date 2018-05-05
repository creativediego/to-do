const orm = require("../config/orm");

const task = {

    allCompleted: function(cb) {
        orm.selectAllComplete("tasks", function(result) {

            cd(result);

        });
    },

    allIncomplete: function(cb) {

        orm.selectAllIncomplete("tasks", function(result) {

            cd(result);

        });

    },

    create: function(task, cb) {

        orm.insertOne("tasks", task, function(resut) {

            cb(result);
        })

    },

    complete: function(id, cb) {

        orm.updateOne("tasks", id, function(resut) {

            cb(result);
        })

    },

    delete: function(id, cb) {

        orm.deleteOne("tasks", id, function(resut) {

            cb(result);
        })

    }

};

module.exports = task;