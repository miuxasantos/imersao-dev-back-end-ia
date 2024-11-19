import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "descricao teste",
        imagem: "https://placecats.millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato fofo dormindo",
        imagem: "https://placekitten.com/400/200",
    },
    {
        id: 3,
        descricao: "Paisagem incrível de um pôr do sol",
        imagem: "https://source.unsplash.com/random/400x300/?sunset",
    },
    {
        id: 4,
        descricao: "Cachorro brincando no parque",
        imagem: "https://picsum.photos/id/237/400/300",
    },
    {
        id: 5,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://unsplash.com/photos/QvJywcCIFfo",
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPorId(req.params.id);
    res.status(200).json(posts[index]);
});