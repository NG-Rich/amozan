const express = require("express");
const app = express();
const path = require("path");
const viewsFolder = path.join(__dirname, "src", "..", "views");

// Syntax for routes
const staticRoutes = require("./routes/index");

app.use(staticRoutes);
// Syntax for routes


app.set("views", viewsFolder);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src", "..", "assets")));

module.exports = app;