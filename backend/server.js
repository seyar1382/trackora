import express from "express";
import cors from "cors";
import pool from "./db/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch projects",
    });
  }
});

app.post("/projects", async (req, res) => {
  try {
    const { title, description, status, user_id } = req.body;

    const result = await pool.query(
      `
      INSERT INTO projects
      (title, description, status, user_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [title, description, status, user_id],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create project",
    });
  }
});

app.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const result = await pool.query(
      `
      UPDATE projects
      SET
        title = $1,
        description = $2,
        status = $3
      WHERE id = $4
      RETURNING *;
      `,
      [title, description, status, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update project",
    });
  }
});

app.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM projects
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.json({
      message: "Project deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to delete project",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
