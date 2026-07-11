import { Link, useParams } from "react-router-dom";
import "./project.css";

function Project({ projects, setProjects }) {
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

  return (
    <div className="project-page">
      <Link to="/dashboard">← Back to Dashboard</Link>

      <h1>{project.title}</h1>

      <div className="project-info">
        <div className="info-card">
          <h3>Status</h3>
          <p>{project.status}</p>
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
    </div>
  );
}

export default Project;
