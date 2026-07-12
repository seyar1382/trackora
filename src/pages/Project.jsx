import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./project.css";

function Project({ projects, setProjects }) {
  const [newTask, setNewTask] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h1>Project Not Found</h1>;
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

  function toggleTask(taskId) {
    setProjects(
      projects.map((p) =>
        p.id === project.id
          ? {
              ...p,
              tasks: p.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      completed: !task.completed,
                    }
                  : task,
              ),
            }
          : p,
      ),
    );
  }

  function changeStatus(status) {
    setProjects(
      projects.map((p) =>
        p.id === project.id
          ? {
              ...p,
              status,
            }
          : p,
      ),
    );
  }

  function addTask() {
    if (!newTask.trim()) return;

    setProjects(
      projects.map((p) =>
        p.id === project.id
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                {
                  id: Date.now(),
                  text: newTask,
                  completed: false,
                },
              ],
            }
          : p,
      ),
    );

    setNewTask("");
  }

  function deleteProject() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmed) return;

    setProjects(projects.filter((p) => p.id !== project.id));

    navigate("/dashboard");
  }

  return (
    <div className="project-page">
      <Link
        to="/dashboard"
        style={{
          color: "var(--accent-primary)",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        ← Back to Dashboard
      </Link>

      <h1>{project.title}</h1>

      <hr />

      <div className="project-info">
        <div className="info-card">
          <h3>Status</h3>
          <select
            value={project.status}
            onChange={(e) => changeStatus(e.target.value)}
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="info-card">
          <h3>Progress</h3>
          <p>{getProgress(project)}%</p>
        </div>

        <div className="info-card">
          <h3>Tasks</h3>
          <p>{project.tasks.length}</p>
        </div>
      </div>

      <h2>Tasks</h2>

      <div className="add-task">
        <input
          type="text"
          placeholder="Task name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            onClick={() => toggleTask(task.id)}
          >
            <span>{task.completed ? "✅" : "⬜"}</span>

            <span>{task.text}</span>
          </div>
        ))}
      </div>

      <div className="danger-zone">
        <h2>Danger Zone</h2>

        <p>Permanently delete this project.</p>

        <button className="delete-btn" onClick={deleteProject}>
          Delete Project
        </button>
      </div>
    </div>
  );
}

export default Project;
