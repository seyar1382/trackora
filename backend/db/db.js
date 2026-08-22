import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "seyar",
  host: "localhost",
  database: "trackora",
  password: "",
  port: 5432,
});

export default pool;
