import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) =>{
    // **Habilita o parser JSON para lidar com requisições com corpo em formato JSON**
    app.use(express.json());

    // **Rota GET para buscar todos os posts**
    app.get("/posts", listarPosts);

};

export default routes;