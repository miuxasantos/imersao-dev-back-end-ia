import express from 'express';
import routes from './src/routes/postsRoutes.js';

// **Cria uma instância do Express para construir a aplicação web**
const app = express();
app.use(express.static("uploads"));
routes(app);

// **Inicia o servidor na porta 3000**
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
 

// function buscarPorId(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPorId(req.params.id);
//     res.status(200).json(posts[index]);
// });