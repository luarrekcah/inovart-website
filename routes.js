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
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "cartao-visita") {
      return {
        name: "Cartão Visita",
        photos: ["https://carvalhoprintoffice.com.br/wp-content/uploads/2017/09/100-modelos-de-cart%C3%A3o-de-visita-para-se-inspirar-muito-1-900x600.png"],
        category: "Other",
        "titleValue": "Valor milheiro",
        "value": "R$500,00",
        "source":"Valor UNID",
        "sourceDesc":"R$10,00",
        "details": "Orçamento com base na quantidade de cartões necessários",
        "floatingLabel": "Insira abaixo a quantia de cartões:"
      };
    } else if (query == "fachada") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "banner") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "cavalete") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "outdoor") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "adesivo-comum") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "adesivo-perfurado") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "logotipo") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else if (query == "arte-digital") {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    } else {
      return {
        name: "",
        photos: ["https://cf.shopee.com.br/file/857ab78a20b7ab925f0068da40480b3a"],
        category: "Other",
        "titleValue": "Valor colorido da UNID",
        "value": "R$1,00",
        "source":"Valor preto e branco",
        "sourceDesc":"R$0,50",
        "details": "Orçamento com base na quantidade de folhas necessárias",
        "floatingLabel": "Insira abaixo a quantia de folhas e cor que precisa:"
      };
    }
  };

  app.get("/produto/tipo/:type", (req, res) => {
    res.render("produto", productType(req.params.type));
  });

  app.get("*", (req, res) => {
    res.sendStatus("404");
  });
};
