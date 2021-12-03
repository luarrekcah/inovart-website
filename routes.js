module.exports = function(app) {
  app.get("/ping", (req, res) => {
    res.sendStatus(200);
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(
      `Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
    );
  });

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("*", function(req, res) {
    res.sendStatus("404");
  });
};
