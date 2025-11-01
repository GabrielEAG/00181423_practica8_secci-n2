// gen-token-for-user.mjs
import pkg from "pg";
import jwt from "jsonwebtoken";
const { Pool } = pkg;

const JWT_SECRET = "your_jwt_secret"; // usa exactamente el mismo que usa tu app
const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_WUmQdXwNZ2f6@ep-curly-sound-ahcrxe5b-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&options=endpoint%3Dep-curly-sound-ahcrxe5b-pooler",
  ssl: { rejectUnauthorized: false },
});

const email = "jerry@example.com";

(async () => {
  try {
    const r = await pool.query("SELECT id, email, name FROM users WHERE email = $1", [email]);
    if (!r.rows.length) {
      console.error("Usuario no encontrado:", email);
      process.exit(1);
    }
    const user = r.rows[0];
    // construye el payload que quieras (mirar cómo lo firma tu app para consistencia)
    const payload = { id: user.id, email: user.email, name: user.name };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    console.log("TOKEN:", token);
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error("ERROR:", err.message || err);
    process.exit(1);
  }
})();
