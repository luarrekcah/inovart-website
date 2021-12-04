const express = require("express");
const app = express();

app.use(express.static("public"));

require("./routes.js")(app);

const listener = app.listen(process.env.PORT, () => {
  console.log("Porta " + listener.address().port);
});

module.exports = app;
