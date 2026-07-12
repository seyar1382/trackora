// import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, getProgress }) {
  return (
    <div className="project-card">
      <div className="project-top">
        <div>
          <h3>
            <Link to={`/project/${project.id}`} className="project-title-link">
              {project.title}
            </Link>
          </h3>

          <span
            className={`status-badge ${project.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="project-progress">
        <span>Progress: {getProgress(project)}%</span>
      </div>

      <progress value={getProgress(project)} max="100" />

      <p className="task-count">
        {project.tasks.filter((t) => t.completed).length}
        {" / "}
        {project.tasks.length} Tasks Completed
      </p>

      <Link className="open-project-btn" to={`/project/${project.id}`}>
        Open Project →
      </Link>
    </div>
  );
}

export default ProjectCard;
