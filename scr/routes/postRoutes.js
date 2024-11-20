import express from "express"; // Importa o módulo express.
import { listarPosts } from "../controllers/postsController.js"; // Importa a função listarPosts do arquivo postsController.js.

 const routes = (app)=> {
    app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.

    app.get("/api", (req, res) => {
        // Rota que responde a requisições GET para a raiz da API.
        res.status(200).send("Boas vindas à imersão!"); // Envia uma resposta com status 200 (OK) e a mensagem "Boas vindas à imersão!".
      });      
     
      app.get("/posts", listarPosts);
}

export default routes; // Exporta a função routes para ser utilizada em outros arquivos.