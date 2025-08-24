import { Request, Response } from "express";
import { IProduct } from "../interfaces/products.interface";

const products: IProduct[] = [
    {
        id: 1,
        name: "keyword",
        price: 150,
        description: "keyword"
    }
];

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({ message: "OK", products });
}
