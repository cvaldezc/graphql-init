import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { UsersRoutes } from "./routes";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
    res.send(`User MS is running on ${PORT}` );
});

app.use('/users', UsersRoutes);

app.listen(PORT, () => {
    console.log( 'User is running on port ', PORT );
});




