import { useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      status: "In Progress",
      tasks: [
        {
          id: 1,
          text: "Design UI",
          completed: true,
        },
        {
          id: 2,
          text: "Build Landing Page",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Database Assignment",
      status: "Completed",
      tasks: [
        {
          id: 1,
          text: "Create Schema",
          completed: true,
        },
      ],
    },
  ]);

  const [newProject, setNewProject] = useState("");

  function addProject() {
    if (!newProject.trim()) return;

    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: newProject,
        status: "Not Started",
        tasks: [],
      },
    ]);

    setNewProject("");
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

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

  function addTask(projectId) {
    const taskName = prompt("Task name");

    if (!taskName) return;

    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  id: Date.now(),
                  text: taskName,
                  completed: false,
                },
              ],
            }
          : project,
      ),
    );
  }

  function toggleTask(projectId, taskId) {
    setProjects(
      projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      completed: !task.completed,
                    }
                  : task,
              ),
            }
          : project,
      ),
    );
  }

  function getProgress(project) {
    if (project.tasks.length === 0) {
      return 0;
    }

    const completedTasks = project.tasks.filter(
      (task) => task.completed,
    ).length;

    return Math.round((completedTasks / project.tasks.length) * 100);
  }

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
              <div>
                <h3>{project.title}</h3>

                <p>Progress: {getProgress(project)}%</p>

                <p>{project.tasks.length} Tasks</p>

                <div>
                  {project.tasks.map((task) => (
                    <p
                      key={task.id}
                      onClick={() => toggleTask(project.id, task.id)}
                    >
                      {task.completed ? "✅" : "⬜"} {task.text}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <select
                  value={project.status}
                  onChange={(e) => changeStatus(project.id, e.target.value)}
                >
                  <option>Not Started</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>

                <button onClick={() => addTask(project.id)}>Add Task</button>

                <button onClick={() => deleteProject(project.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
