import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";

const users: User[] = [
    {
        id: 1,
        name: "Chris",
        email: "chris@company.com"
    }
];

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({ "message": "OK", users });
}


