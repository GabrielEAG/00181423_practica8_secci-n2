import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_WUmQdXwNZ2f6@ep-curly-sound-ahcrxe5b-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&options=endpoint%3Dep-curly-sound-ahcrxe5b-pooler",
  ssl: {
    rejectUnauthorized: false,
    servername: "ep-curly-sound-ahcrxe5b-pooler"
  }
});
export default pool;