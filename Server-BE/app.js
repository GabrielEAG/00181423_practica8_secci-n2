import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// rutas
app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.use(authRoutes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
