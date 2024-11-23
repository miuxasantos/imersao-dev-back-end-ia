import { MongoClient } from 'mongodb';

export default async function conectarBanco(stringConexao){
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao banco de dados MongoDB Atlas!');

        return mongoClient;
    } catch (erro){
        console.error('Falha na conexão com o MongoDB');
        console.log(erro);
        process.exit();
    }
}