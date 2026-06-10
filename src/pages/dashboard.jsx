import "./dashboard.css";

function Dashboard() {
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
          <h2>Recent Projects</h2>

          <div className="project-card">Portfolio Website</div>

          <div className="project-card">Database Assignment</div>

          <div className="project-card">Mobile App</div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
