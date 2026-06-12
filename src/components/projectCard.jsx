import { useState } from "react";

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
      <div>
        <h3>{project.title}</h3>

        <p>Progress: {getProgress(project)}%</p>

        <p>{project.tasks.length} Tasks</p>

        <div>
          {project.tasks.map((task) => (
            <p key={task.id} onClick={() => toggleTask(project.id, task.id)}>
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

        <button onClick={() => deleteProject(project.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ProjectCard;
