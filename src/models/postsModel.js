import conectarBanco from '../config/db-config.js';

// **Conecta ao banco de dados MongoDB usando a string de conexão fornecida**
const conexao = await conectarBanco(process.env.STRING_CONEXAO);

// **Função assíncrona para buscar todos os posts do banco de dados**
export async function getTodosPosts(){
    // **Obtém o banco de dados 'imersao-dev' e a coleção 'posts'**
    const db = conexao.db("imersao-dev")
    const colecao = db.collection("posts")
  
    // **Executa a consulta e retorna os resultados como um array**
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
    const db = conexao.db("imersao-dev")
    const colecao = db.collection("posts")
  
    
    return colecao.insertOne(novoPost);
  }