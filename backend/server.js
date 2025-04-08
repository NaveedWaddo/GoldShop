require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "GoldShopDB",
  password: process.env.DB_PASSWORD || "naveed",
  port: process.env.DB_PORT || 5432,
});

// Test database connection
pool.connect((err) => {
  if (err) {
    console.error("Error connecting to database", err.stack);
  } else {
    console.log("Connected to database");
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { name, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE name = $1", [
      name,
    ]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const insertResult = await pool.query(
      "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *",
      [name, password]
    );
    res.status(201).json(insertResult.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE name = $1 AND password = $2",
      [name, password]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
