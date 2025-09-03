import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { SaleRoutes } from "./routes";


dotenv.config();

const app = express()
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`User MS is running on ${PORT}`);
});


app.use("/sales", SaleRoutes);

app.listen(PORT, () => {
          console.log('MS Sales is running on port', PORT);
});

