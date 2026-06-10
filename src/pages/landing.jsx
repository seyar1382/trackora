import Navbar from "../components/Navbar";
import "./landing.css";

function Landing() {
  return (
    <>
      <Navbar />

      <main className="hero container">
        <div className="hero-content">
          <p className="hero-slogan">From Idea to Completion</p>

          <h1>
            Track Every Project.
            <br />
            Finish Every Goal.
          </h1>

          <p className="hero-description">
            Organise projects, manage tasks, track progress, and turn ideas into
            completed work.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>

            <button className="btn btn-secondary">View Demo</button>
          </div>
        </div>

        <div className="hero-preview">
          <div className="dashboard-card">
            <div className="stat">
              <h3>12</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>43</h3>
              <p>Tasks</p>
            </div>

            <div className="stat">
              <h3>72%</h3>
              <p>Progress</p>
            </div>

            <div className="mock-projects">
              <div className="project-item">
                <span>Portfolio Website</span>
                <span>70%</span>
              </div>

              <div className="project-item">
                <span>Database Assignment</span>
                <span>90%</span>
              </div>

              <div className="project-item">
                <span>Mobile App</span>
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features container">
        <h2>Everything You Need to Stay Organised</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📁 Project Tracking</h3>
            <p>Create and manage projects from start to finish.</p>
          </div>

          <div className="feature-card">
            <h3>✅ Task Management</h3>
            <p>Break projects into smaller, manageable tasks.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Progress Analytics</h3>
            <p>Monitor completion rates and stay motivated.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works container">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Project</h3>
            <p>Start by creating a project and defining your goals.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Add Tasks</h3>
            <p>Break your project into manageable tasks.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Complete tasks and monitor your progress.</p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Achieve Goals</h3>
            <p>Stay organised and finish projects on time.</p>
          </div>
        </div>
      </section>

      <section className="cta container">
        <div className="cta-card">
          <h2>Ready to Turn Ideas into Results?</h2>

          <p>Join Trackora and start organising your projects today.</p>

          <button className="btn btn-primary">Start Using Trackora</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2>Trackora</h2>

          <p>From Idea to Completion</p>

          <p>© 2026 Trackora. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Landing;
