//Import database methods
const task = require("../models/to-do");

//Import express
const express = require("express");

//Create express router
const router = express.Router();

//Get request to display all tasks on root domain
router.get("/", function(req, res) {

    task.allTasks(function(data) {

        res.render("index", { tasks: data })

    });

});

//Post request when a user creates a task

router.post("/", function(req, res) {

    console.log(req.body)
    task.create(req.body.task, function(data) {

        //res.json({ task: data });
        res.redirect("/");

    });


})


router.put("/", function(req, res) {
    let id = req.body.id
    task.delete(id, function(data) {

        res.redirect(303, '/');

    })

})

module.exports = router;