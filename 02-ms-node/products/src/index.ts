import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { ProductsRoutes } from "./routes";

dotenv.config();

const app = express()
const PORT = process.env.PORT

app.use(cors());

app.get("/", (req, res) => {
    res.send(`Products MS is running  ${PORT} `);
});

app.use("/products", ProductsRoutes);

app.listen(PORT, () => {
    console.log("Product MS is running on port :", PORT);
});