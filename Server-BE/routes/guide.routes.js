import { Router } from "express";
import { displayHome } from "../controllers/guide.controller.js";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/users.controller.js";


const router = Router();

// Rutas pedidas en la guía
router.get("/", displayHome);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
