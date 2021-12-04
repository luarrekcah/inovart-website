const bodyParser = require("body-parser");
const process = require("process");

const { portProducts } = require("./data/products.json");

const basicData = {
  b_phoneNumber: "+556892260660"
};

module.exports = app => {
  app.use(bodyParser.text());

  app.set("view engine", "ejs");

  app.get("/ping", (req, res) => {
    res.sendStatus(200);
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(
      `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
    );
  });

  app.get("/", (req, res) => {
    res.render("index", basicData);
  });

  app.get("/produto", (req, res) => {
    /*const productDetails = portProducts.filter(item => {
      if (item.id == req.params.id) return item;
    });
  */

    res.render("produto");
  });

  app.get("*", (req, res) => {
    res.sendStatus("404");
  });
};
