import { Router } from "express";
import { getAll } from "../controllers/users.controller";



const router = Router();

router.get("/all", getAll);

export default router;

