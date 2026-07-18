import express from "express";

const app = express();

app.use(express.json());

let projects = [
  {
    id: 1,
    title: "Portfolio Website",
  },
  {
    id: 2,
    title: "Trackora",
  },
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
