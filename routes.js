const { portProducts } = require("./data/products.json");

module.exports = function(app) {
  app.get("/ping", (req, res) => {
    res.sendStatus(200);
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(
      `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
    );
  });

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/produto", (req, res) => {
    const productDetails = portProducts.filter(item => {
      if (item.id == req.params) return item[0];
    });
    res.render("productDetails", {
      "id": productDetails.id,
      "name": productDetails.name,
      "category": productDetails.category,
      "client": productDetails.client,
      "data": productDetails.data,
      "photos": productDetails.photos,
      "details": productDetails.details
    });
  });

  app.get("*", (req, res) => {
    res.sendStatus("404");
  });
};
