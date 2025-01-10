const express = require("express");
const menuRoute = require("./routes/menuRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();



app.use(express.json());

app.use("/",menuRoute);

app.use(errorHandler);

module.exports = app;