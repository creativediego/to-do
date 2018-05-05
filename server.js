const express = require("express");
const orm = require("./config/orm");


const app = express();


orm.updateOne("tasks", 1, function(data) {

    console.log(data);

})