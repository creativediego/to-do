const express = require("express");
const app = express();

//Import routes
const router = require("./controllers/to_do_controller");
app.use(router);

const bodyParser = require("body-parser");

//parse form data from user (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

//parse app JSON
app.use(bodyParser.json());

//Port settings
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {

    console.log("listening on port" + PORT);

})