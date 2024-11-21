import express from "express";
import multer from "multer";
import { listarPosts, postarNovo, uploadImagem } from "../controllers/postsControllers.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const executar = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
    // **Habilita o parser JSON para lidar com requisições com corpo em formato JSON**
    app.use(express.json());

    // **Rota GET para buscar todos os posts**
    app.get("/posts", listarPosts);
    // rota para criar um novo post
    app.post("/posts", postarNovo);
    app.post("/upload", executar.single("imagem"), uploadImagem );
};

export default routes;