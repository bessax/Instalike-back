import multer from "multer";
import express from "express"; // Importa o módulo express.
import { listarPosts,postarNovoPost,uploadImagem } from "../controllers/postsController.js"; // Importa a função listarPosts do arquivo postsController.js.

// Configuração do multer para salvar arquivos de imagem.
const storage = multer.diskStorage({
 destination: function (req, file, cb){
    cb(null, "uploads/");
 },
 filename: function (req, file, cb){
    cb(null, file.originalname);
 }
});

const upload = multer({ dest: "./uploads",storage: storage });
//linux ou mac const upload = multer({ dest: "./uploads" });

const routes = (app)=> {
    app.use(express.json()); // Habilita o middleware para analisar o corpo das requisições JSON.

    app.get("/api", (req, res) => {
        // Rota que responde a requisições GET para a raiz da API.
        res.status(200).send("Boas vindas à imersão!"); // Envia uma resposta com status 200 (OK) e a mensagem "Boas vindas à imersão!".
      });      
     
      // Rota que responde a requisições GET para obter todos os posts.
      app.get("/posts", listarPosts);
      // Rota que responde a requisições POST para criar um novo post.
      app.post("/posts",postarNovoPost);
      // Rota que responde a requisições POST para criar um novo post.
      app.post("/upload",upload.single("imagem"),uploadImagem);
  }

export default routes; // Exporta a função routes para ser utilizada em outros arquivos.