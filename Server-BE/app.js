import express from "express";
import cors from "cors";
import "dotenv/config";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import customerRoutes from "./routes/customers.routes.js";
import salesRoutes from "./routes/sales.routes.js";
import guideRoutes from "./routes/guide.routes.js";

import { verifyToken } from "./middlewares/authMiddleware.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// rutas
app.get("/", (req, res) => res.send("API funcionando"));

app.use("/guide", guideRoutes);
app.use("/auth", authRoutes);
app.use("/users", verifyToken, userRoutes);
app.use("/customers", verifyToken, customerRoutes);
app.use("/sales", verifyToken, salesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
