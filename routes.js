const bodyParser = require("body-parser");
const process = require("process");
const ejs = require("ejs");

const { portProducts } = require("./data/products.json"),
  { ops } = require("./data/opinioes.json"),
  { services } = require("./data/services.json"),
  { faq } = require("./data/faq.json"),
      { logos } = require("./data/clientLogos.json");

const basicData = {
  b_phoneNumber: "+55 68 9226-0660",
  b_linkWpp: "556892260660",
  b_email: "henriquemaia235@gmail.com",
  b_cnpj: "NULL",
  b_produtos: portProducts,
  b_ops: ops,
  b_services: services,
  b_faq: faq,
  b_clientLogos: logos
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
    const defaultValues = {
      lona: "90",
      lonaEstrutura: "180",
      flyer: "40",
      logo: "100"
    };
    if (query == "cartao-visita") {
      return {
        name: "Cartão Visita",
        photos: [
          "https://carvalhoprintoffice.com.br/wp-content/uploads/2017/09/100-modelos-de-cart%C3%A3o-de-visita-para-se-inspirar-muito-1-900x600.png"
        ],
        category: "Other",
        titleValue: "Valor milheiro",
        value: "R$170,00",
        source: ".",
        sourceDesc: ".",
        details: "Orçamento com base na quantidade de cartões necessários",
        floatingLabel: "Insira abaixo a quantia de cartões:",
        itens: {
          basicInfos: "none",
          tableCards: "block",
          tableOrc: "none"
        }
      };
    } else if (query == "fachada") {
      return {
        name: "Fachada",
        photos: [
          "https://img.freepik.com/psd-gratuitas/maquete-de-outdoor-vertical-de-grande-escala-minima_53876-65947.jpg?size=626&ext=jpg"
        ],
        category: "Fachada",
        titleValue: "Valor do m² com estrutura",
        value: "R$" + defaultValues.lonaEstrutura,
        source: "Valor do m² apenas lona",
        sourceDesc: "R$" + defaultValues.lona,
        details: "Orçamento com base nas medidas necessárias",
        floatingLabel:
          "Insira abaixo as medidas, como largura e altura, e se deseja com estrutura ou sem:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "block"
        }
      };
    } else if (query == "banner") {
      return {
        name: "Banner",
        photos: [
          "https://mockuptree.com/wp-content/uploads/edd/2020/09/free-lamp-post-banner-mockup-960x640.jpg"
        ],
        category: "Banner",
        titleValue: "Valor do m²",
        value: "R$" + defaultValues.lona,
        source: "Adicional de materiais restantes",
        sourceDesc: "+R$20",
        details:
          "Orçamento com base nas medidas necessárias e materiais a serem utilizados",
        floatingLabel: "Insira abaixo as medidas, como largura e altura:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "banner"
        }
      };
    } else if (query == "cavalete") {
      return {
        name: "Cavalete",
        photos: [
          "https://img.freepik.com/psd-gratuitas/quadro-metalico-e-cavalete-de-madeira-com-maquete-de-lona_23-2149045658.jpg?size=626&ext=jpg"
        ],
        category: "Cavalete",
        titleValue: "Valor do m² ferro e lona",
        value: "R$" + defaultValues.lonaEstrutura,
        source: "Valor do m² lona",
        sourceDesc: "R$" + defaultValues.lona,
        details: `

CAVALETE SIMPLES OBS: apenas uma estrutura, porém lona frente e verso 

CAVALETE DUPLO
OBS: duas estruturas metálicas, lona frente e verso 

`,
        floatingLabel: "Insira abaixo as medidas, como largura e altura:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "block"
        }
      };
    } else if (query == "outdoor") {
      return {
        name: "Outdoor",
        photos: [
          "https://www.mockupworld.co/wp-content/uploads/2015/07/Outdoor-Advertinsing-MockUps_4.jpg"
        ],
        category: "Outdoor",
        titleValue: "Valor do m² ferro e lona",
        value: "R$" + defaultValues.lonaEstrutura,
        source: "Valor do m² lona",
        sourceDesc: "R$" + defaultValues.lona,
        details: "Orçamento com base nas medidas necessárias",
        floatingLabel: "Insira abaixo as medidas, como largura e altura:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "block"
        }
      };
    } else if (query == "adesivo-comum") {
      return {
        name: "Adesivo comum",
        photos: [
          "https://img.freepik.com/psd-gratuitas/maquete-de-adesivo-redondo_68185-317.jpg?size=338&ext=jpg"
        ],
        category: "Other",
        titleValue: "Valor do m² adesivo",
        value: "R$90",
        source: "Tipo",
        sourceDesc: "Grandes e pequenos",
        details: "Orçamento com base nas medidas e quantidades.",
        floatingLabel: "Insira abaixo as medidas e quantias de adesivos:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "block"
        }
      };
    } else if (query == "adesivo-perfurado") {
      return {
        name: "Adesivo perfurado",
        photos: [
          "https://images.tcdn.com.br/img/img_prod/372162/110_1_20140325180455.jpg"
        ],
        category: "Other",
        titleValue: "Valor do m²",
        value: "R$90 - (para carros o valor é R$90 único)",
        source: "Tipo",
        sourceDesc: "Grandes e pequenos",
        details:
          "Orçamento com base nas medidas ou, valor único para automoveis.",
        floatingLabel: "Insira abaixo as medidas:",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "block"
        }
      };
    } else if (query == "logotipo") {
      return {
        name: "Logotipo",
        photos: [
          "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg"
        ],
        category: "Other",
        titleValue: "Tipo",
        value: "Refazer/Fazer logotipo",
        source: "Valor",
        sourceDesc: "orçamento no Whatsapp",
        details:
          "Entre em contato no Whatsapp e apresente seu pedido para que possamos passar um orçamento confiável dependendo da necessidade.",
        floatingLabel: "Insira abaixo sua ideia/informações do pedido:",
        itens: {
          basicInfos: "block",
          tableCards: "none"
        }
      };
    } else if (query == "arte-digital") {
      return {
        name: "Flyer",
        photos: [
          "https://img.elo7.com.br/product/original/3C93B54/mockup-celular-para-arte-digital-arte-para-sublimacao.jpg"
        ],
        category: "Other",
        titleValue: "Valor arte digital",
        value: "R$" + defaultValues.flyer,
        source: "Tipo",
        sourceDesc: "Artes digitais gerais",
        details: "Entre em contato para realizar um orçamento",
        floatingLabel:
          "Insira abaixo a descrição do que precisa ou de quantas artes deseja fazer",
        itens: {
          basicInfos: "block",
          tableCards: "none",
          tableOrc: "none"
        }
      };
    } else if (query == "impressora-plotter") {
      return {
        name: "Impressora Plotter",
        photos: [
          "https://m.media-amazon.com/images/I/818P+qYvSHS._AC_SX300_SY300_.jpg"
        ],
        category: "Other",
        titleValue: "Valor impressora plotter",
        value: "R$" + defaultValues.flyer,
        source: "Tipo",
        sourceDesc: "Artes digitais gerais",
        details: "Entre em contato para realizar um orçamento",
        floatingLabel:
          "Insira abaixo a descrição do que precisa ou de quantas artes deseja fazer",
        itens: {
          basicInfos: "none",
          tableCards: "none",
          tableOrc: "none"
        }
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
