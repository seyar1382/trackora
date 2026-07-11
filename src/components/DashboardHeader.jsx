import { FiBell, FiSearch } from "react-icons/fi";

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back to Trackora</p>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search projects..." />
        </div>

        <button className="icon-btn">
          <FiBell />
        </button>

        <div className="user-avatar">S</div>
      </div>
    </header>
  );
}

export default DashboardHeader;
