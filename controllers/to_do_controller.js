//Import database methods
const task = require("../models/to-do");

//Import express
const express = require("express");

//Create express router
const router = express.Router();

router.get("/", function(req, res) {

    task.allCompleted(function(data) {

        console.log(data)

    });

});
module.exports = router;