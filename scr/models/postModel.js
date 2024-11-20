import conectarAoBanco from "../config/dbConfig.js";

// Conecta-se ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função `conectarAoBanco` provavelmente contém a lógica para estabelecer a conexão com o banco de dados (MongoDB, por exemplo).
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

 // Função assíncrona para obter todos os posts do banco de dados.
 export async function getTodosPosts() {
    // Obtém o banco de dados "imersao-instabytes" da conexão.
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
    return colecao.find().toArray();
  }
  