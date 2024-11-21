import express from "express";
import routes from "./scr/routes/postRoutes.js";

const app = express(); // Cria uma instância do Express, que será o nosso servidor web.

app.use(express.static("uploads"));

routes(app); // Chama a função routes passando a instância do Express como argumento.   

app.listen(3000, () => {
  console.log("Server em execução na porta 3000"); // Inicia o servidor na porta 3000 e exibe uma mensagem no console.
});





