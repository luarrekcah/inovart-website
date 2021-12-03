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

  app.get("/produto/:id", (req, res) => {
    const productDetails = portProducts.filter(item => {
      if (item.id == req.params.id) return item;
    });
    res.render("productDetails", {
      "b_id": productDetails[0].id,
      "b_name": productDetails[0].name,
      "b_category": productDetails[0].category,
      "b_client": productDetails[0].client,
      "b_data": productDetails[0].data,
      "b_photos": productDetails[0].photos,
      "b_details": productDetails[0].details
    });
  });

  app.get("*", (req, res) => {
    res.sendStatus("404");
  });
};
