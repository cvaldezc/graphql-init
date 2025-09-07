import { Request, Response } from "express";
import { ProductsEvent } from "../enums/products.enum";
import { getAllProducts } from "./products.controller";
import { UsersEvent } from "../enums/users.emun";
import { getAllUsers } from "./users.controller";
import { SalesEvent } from "../enums/sales.enum";
import { getAllSales, createSales } from "./sales.controller";

export const eventBrokerController = async (req: Request, res: Response) => {
    const { event, data } = req.body;

    console.log(event, data);

    if (event === ProductsEvent.GET_PRODUCTS) {
        const products = await getAllProducts();
        return res.status(200).json({ products });
    }

    if (event === UsersEvent.GET_USERS) {
        const users = await getAllUsers();
        return res.status(200).json({ users });
    }

    if (event === SalesEvent.GET_SALES) {
        const sales = await getAllSales();
        return res.status(200).json({ sales });
    }

    if (event === SalesEvent.CREATE_SALE) {
        const sale = await createSales(data);
        return res.status(201).json({ sale });
    }

    return res.status(404).json({
        message: "Event not found"
    });
}
