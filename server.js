const express = require("express");
const app = express();
//const process = require("process");
const cors = require("cors");
const ejs = require("ejs");

app.use(cors());
app.use(express.static("public"));
app.set('view engine', 'ejs');

require(__dirname + "/routes")(app);

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta: " + listener.address().port);
});
