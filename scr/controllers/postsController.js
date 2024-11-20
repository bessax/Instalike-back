import { getTodosPosts } from "../models/postModel.js";

export async function listarPosts(req, res){
    // Rota que responde a requisições GET para obter todos os posts.
    // Chama a função getTodosPosts() para buscar os posts no banco de dados.
    const posts = await getTodosPosts();
    // Envia os posts como resposta em formato JSON com status 200 (OK).
    res.status(200).json(posts);
  };
