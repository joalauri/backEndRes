/* Importing the express module. */
const express = require("express");
/* A node module that allows you to work with directories and file paths. */
const path = require("path");
/* Importing the express-handlebars module. */
const exphbs = require("express-handlebars");
const {Server} = require("socket.io")
const {WebSocket} = require("./sockets")
const morgan = require('morgan');
//initializations
const app = express();
const http = require("http");

const serverHttp = http.createServer(app);
const io = new Server(serverHttp);
WebSocket(io);
  
const {router} = require('./routes/index.routes')
//Settings
app.set("port", process.env.PORT || 5500);
app.set("views", path.join(__dirname, "views"));
/* Setting the engine to handlebars and setting the default layout to main. */
app.engine(
  ".hbs", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    // helpers: require('./helper/validate.helper'), 
  })
);
  app.set("view engine", ".hbs");
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
//Global Variables
//Routes 
app.use(router);
//Statics files
app.use(express.static(path.join(__dirname, "public")));
module.exports = {app,serverHttp, exphbs};