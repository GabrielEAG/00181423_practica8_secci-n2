import { Router } from "express";
import { getCustomers, searchCustomerByCode } from "../controllers/customers.controller.js";

const router = Router();

router.get("/", getCustomers);
router.get("/search", searchCustomerByCode);

export default router;
