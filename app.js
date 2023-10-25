const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const dotenv = require("dotenv").config(); //  this will call environment file automatillcaly
const app = express();
const dbConnect = require("./server/database/dbconnection");

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";

app.set("view engine", "ejs");
app.set("views");

// Using express.urlencoded middleware
// app.use(express.urlencoded({
//   extended: true
// }))

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const base_path = __dirname;
// app.set("views",base_path+"/views/module/grading")// default path
// app.set("views".path.resove(base_path,"views/module.grading"))

// Creating a virtual path of assets folder for future use, using middle ware
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

dbConnect();

// Load Router
const router = require("./server/routes/user-routes");
app.use("/", router);
// OR app.use('/',require('./server/routes/user-routes'))

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
