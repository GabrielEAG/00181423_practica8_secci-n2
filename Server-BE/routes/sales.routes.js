import { Router } from "express";
import { createSale, getSales, salesReport } from "../controllers/sales.controller.js";

const router = Router();

router.post("/", createSale);
router.get("/", getSales);
router.get("/report", salesReport);

export default router;
