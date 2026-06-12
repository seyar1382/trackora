import { Link, useParams } from "react-router-dom";
import "./project.css";

function Project({ projects }) {
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

  return (
    <div className="project-page">
      <Link to="/dashboard">← Back to Dashboard</Link>

      <h1>{project.title}</h1>

      <p>Status: {project.status}</p>

      <p>Progress: {getProgress(project)}%</p>

      <p>Total Tasks: {project.tasks.length}</p>

      <h2>Tasks</h2>

      {project.tasks.map((task) => (
        <div key={task.id}>
          {task.completed ? "✅" : "⬜"} {task.text}
        </div>
      ))}
    </div>
  );
}

export default Project;
