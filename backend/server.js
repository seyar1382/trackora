import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let projects = [];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.post("/projects", (req, res) => {
  const project = {
    id: Date.now(),
    title: req.body.title,
  };

  projects.push(project);

  res.status(201).json(project);
});

app.put("/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  projects = projects.map((project) =>
    project.id === id
      ? {
          ...project,
          title: req.body.title,
        }
      : project,
  );

  res.json({
    message: "Project updated",
  });
});

app.delete("/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  projects = projects.filter((project) => project.id !== id);

  res.json({
    message: "Project deleted",
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
