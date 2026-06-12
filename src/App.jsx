import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
// import ProjectDetails from "./pages/projectDetails";
import Profile from "./pages/profile";
import Project from "./pages/Project";

function App() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");

    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard projects={projects} setProjects={setProjects} />}
      />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/project/:id" element={<Project projects={projects} />} />
    </Routes>
  );
}

export default App;
