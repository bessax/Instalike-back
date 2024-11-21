import 'dotenv/config'; // Importa a configuração do dotenv para carregar as variáveis de ambiente.
import { ObjectId } from "mongodb";
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

  export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes"); // Obtém o banco de dados "imersao-instabytes" da conexão.
    const colecao = db.collection("posts"); // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.insertOne(novoPost); // Insere um novo documento (post) na coleção e retorna o resultado da operação.
  }

  export async function atualizarPost(id, postAtualizado) {
    const db = conexao.db("imersao-instabytes"); // Obtém o banco de dados "imersao-instabytes" da conexão.
    const colecao = db.collection("posts"); // Obtém a coleção "posts" dentro do banco de dados.
    const objID =ObjectId.createFromHexString(id);// Cria um objeto ID a partir da string fornecida.
    return colecao.updateOne({ _id:new ObjectId(objID) }, { $set: postAtualizado }); // Atualiza o documento com o ID fornecido e retorna o resultado da operação.
    //return colecao.updateOne({ _id: ObjectId(id) }, { $set: postAtualizado }); // Atualiza o documento com o ID fornecido e retorna o resultado da operação.
  }
  