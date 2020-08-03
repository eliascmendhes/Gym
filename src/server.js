const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const { static } = require("express");
const server = express();
const methodOverride = require('method-override')
server.use(express.urlencoded({
  extended: true
}))
server.use(static("public"))
server.use(methodOverride('_method')) // precisa ser carregado antes das rotas
server.use(routes);

server.set("view engine", "njk"); // njk são arquivos do nunjucks

nunjucks.configure("src/app/views", {
  express: server,
  noCache: true,
  autoescape: true,
});

server.listen(5000, function () {
  console.log("server is running ");
});
