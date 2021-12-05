const bodyParser = require("body-parser");
const process = require("process");
const ejs = require("ejs");

const { portProducts } = require("./data/products.json");
const { ops } = require("./data/opinioes.json");

const basicData = {
  b_phoneNumber: "+55 68 9226-0660",
  b_linkWpp: "556892260660",
  b_email: "henriquemaia235@gmail.com",
  b_cnpj: "NULL",
  b_produtos: portProducts,
  b_ops: ops
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

  app.get("/produto/:id", (req, res) => {
    const productDetails = portProducts.filter(item => {
      if (item.id == req.params.id) return item;
    });

    res.render("produto", productDetails[0]);
  });

  const productType = query => {
    if (query == "a4") {
      return {
        name: "Impressão A4",
        photos: [""],
        category: "Other",
        "titleValue": "Valor da UNID",
        
      };
    } else if (query == "cartao-visita") {
      return {};
    } else if (query == "fachada") {
      return {};
    } else if (query == "banner") {
      return {};
    } else if (query == "cavalete") {
      return {};
    } else if (query == "outdoor") {
      return {};
    } else if (query == "adesivo-comum") {
      return {};
    } else if (query == "adesivo-perfurado") {
      return {};
    } else if (query == "logotipo") {
      return {};
    } else if (query == "arte-digital") {
      return {};
    } else {
      return {};
    }
  };

  app.get("/produto/tipo/:type", (req, res) => {
    res.render("produto", productType(req.params.type));
  });

  app.get("*", (req, res) => {
    res.sendStatus("404");
  });
};
