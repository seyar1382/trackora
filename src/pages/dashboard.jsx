import { useState } from "react";
import "./dashboard.css";

function Dashboard() {
  function changeStatus(id, newStatus) {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? {
              ...project,
              status: newStatus,
            }
          : project,
      ),
    );
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function addProject() {
    if (!newProject.trim()) return;

    setProjects([
      ...projects,
      {
        // id: Date.now(),
        title: newProject,
        status: "Not Started",
      },
    ]);

    setNewProject("");
  }

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Database Assignment",
      status: "Completed",
    },
  ]);
  const [newProject, setNewProject] = useState("");
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Trackora</h2>

        <nav>
          <p>Dashboard</p>
          <p>Projects</p>
          <p>Profile</p>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header>
          <h1>Dashboard</h1>
        </header>

        <section className="stats">
          <div className="stat-card">
            <h3>12</h3>
            <p>Total Projects</p>
          </div>

          <div className="stat-card">
            <h3>43</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h3>8</h3>
            <p>Completed Projects</p>
          </div>

          <div className="stat-card">
            <h3>72%</h3>
            <p>Progress</p>
          </div>
        </section>

        <section className="recent-projects">
          <input
            type="text"
            placeholder="Project name"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
          <button onClick={addProject}>Add Project</button>

          <h2>Recent Projects</h2>

          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <span>{project.title}</span>
              {/* <span>{project.status}</span> */}
              <select
                value={project.status}
                onChange={(e) => changeStatus(project.id, e.target.value)}
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <button onClick={() => deleteProject(project.id)}>Delete</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
