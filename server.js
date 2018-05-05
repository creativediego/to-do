const express = require("express");
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
const bodyParser = require("body-parser");

//parse form data from user (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

//parse app JSON
app.use(bodyParser.json());

//Import routes
const router = require("./controllers/to_do_controller");
app.use(router);

//Template engine
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Port settings
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {

    console.log("listening on port" + PORT);

})