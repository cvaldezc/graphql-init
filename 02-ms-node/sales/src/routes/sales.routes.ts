import { Router } from "express";
import { getAll, createSale } from "../controllers/sales.controller";


const router = Router();

router.get("/all", getAll);
router.post("/create", createSale);

export default router;
