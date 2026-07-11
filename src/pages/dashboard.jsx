import { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import ProjectCard from "../components/ProjectCard";
import { FiFolder, FiCheckCircle, FiList, FiTrendingUp } from "react-icons/fi";
import DashboardHeader from "../components/DashboardHeader";
import "./dashboard.css";

function Dashboard({ projects, setProjects }) {
  // const [projects, setProjects] = useState(() => {
  //   const savedProjects = localStorage.getItem("projects");

  //   return savedProjects
  //     ? JSON.parse(savedProjects)
  //     : [
  //         {
  //           id: 1,
  //           title: "Portfolio Website",
  //           status: "In Progress",
  //           tasks: [
  //             {
  //               id: 1,
  //               text: "Design UI",
  //               completed: true,
  //             },
  //             {
  //               id: 2,
  //               text: "Build Landing Page",
  //               completed: false,
  //             },
  //           ],
  //         },
  //         {
  //           id: 2,
  //           title: "Database Assignment",
  //           status: "Completed",
  //           tasks: [
  //             {
  //               id: 1,
  //               text: "Create Schema",
  //               completed: true,
  //             },
  //           ],
  //         },
  //       ];
  // });

  const [newProject, setNewProject] = useState("");

  const totalProjects = projects.length;

  const totalTasks = projects.reduce(
    (total, project) => total + project.tasks.length,
    0,
  );

  const completedProjects = projects.filter(
    (project) => project.status === "Completed",
  ).length;

  const overallProgress =
    projects.length === 0
      ? 0
      : Math.round(
          projects.reduce((total, project) => total + getProgress(project), 0) /
            projects.length,
        );

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

  function addTask(projectId, taskName) {
    if (!taskName.trim()) return;

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
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader />

        <section className="stats">
          <StatsCard
            icon={<FiFolder />}
            value={totalProjects}
            label="Total Projects"
          />

          <StatsCard
            icon={<FiCheckCircle />}
            value={completedProjects}
            label="Completed Projects"
          />

          <StatsCard icon={<FiList />} value={totalTasks} label="Total Tasks" />

          <StatsCard
            icon={<FiTrendingUp />}
            value={`${overallProgress}%`}
            label="Progress"
          />
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
            <ProjectCard
              key={project.id}
              project={project}
              deleteProject={deleteProject}
              addTask={addTask}
              changeStatus={changeStatus}
              toggleTask={toggleTask}
              getProgress={getProgress}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
