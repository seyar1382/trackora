import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({
  project,
  deleteProject,
  addTask,
  changeStatus,
  toggleTask,
  getProgress,
}) {
  const [newTask, setNewTask] = useState("");

  return (
    <div className="project-card">
      <div className="project-top">
        <div>
          <h3>{project.title}</h3>
          <p className="project-status">{project.status}</p>
        </div>

        <button
          className="delete-btn"
          onClick={() => deleteProject(project.id)}
        >
          Delete
        </button>
      </div>

      <div className="project-progress">
        <span>Progress</span>
        <span>{getProgress(project)}%</span>
      </div>

      <progress value={getProgress(project)} max="100" />

      <h4>Tasks ({project.tasks.length})</h4>

      <div className="task-list">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            onClick={() => toggleTask(project.id, task.id)}
          >
            <span>{task.completed ? "✅" : "⬜"}</span>

            <span>{task.text}</span>
          </div>
        ))}
      </div>

      <div className="project-actions">
        <select
          value={project.status}
          onChange={(e) => changeStatus(project.id, e.target.value)}
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <input
          type="text"
          placeholder="Task name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button
          onClick={() => {
            addTask(project.id, newTask);
            setNewTask("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
