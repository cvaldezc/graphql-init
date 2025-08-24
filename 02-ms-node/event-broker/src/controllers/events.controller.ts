import { Request, Response } from "express";
import { ProductsEvent } from "../enums/products.enum";
import { getAllProducts } from "./products.controller";

export const eventBrokerController = async (req: Request, res: Response) => {
    const { event, data } = req.body;

    console.log(event, data);

    if (event === ProductsEvent.GET_PRODUCTS) {
        const products = await getAllProducts();
        return res.status(200).json({ products });
    }

    return res.status(404).json({
        message: "Event not found"
    });

}
