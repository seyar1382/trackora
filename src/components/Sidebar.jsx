import {
  FiHome,
  FiFolder,
  FiCheckSquare,
  FiLink,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="container">
        <div className="logo">
          <h2>Trackora</h2>
          <small>From Idea to Completion</small>
        </div>

        <nav>
          <p className="active">
            <FiHome />
            Dashboard
          </p>
          <p>
            <FiFolder /> Projects
          </p>
          <p>
            <FiCheckSquare /> Tasks
          </p>
          <p>
            <FiLink /> Notes & Links
          </p>
          <p>
            <FiUser /> Profile
          </p>
          <p>
            <FiSettings /> Settings
          </p>
        </nav>
      </div>

      <div className="logout">
        <FiLogOut />
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;
