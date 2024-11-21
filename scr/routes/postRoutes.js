import multer from "multer";
import cors from "cors"; // Importa o módulo cors.
import express from "express"; // Importa o módulo express.
import { listarPosts,postarNovoPost,uploadImagem,atualizarNovoPost } from "../controllers/postsController.js"; // Importa a função listarPosts do arquivo postsController.js.

const corsOptions = {
  origin: "http://localhost:8000", // Permite apenas requisições de origem http://localhost:8000.
  optionsSuccessStatus: 200, // Permite que o status 200 seja enviado.
};
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
    app.use(cors(corsOptions)); // Habilita o middleware para permitir requisições CORS.
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
     // Rota que responde a requisições PUT para atualizar um post.
      app.put("/upload/:id",atualizarNovoPost);
  }

export default routes; // Exporta a função routes para ser utilizada em outros arquivos.