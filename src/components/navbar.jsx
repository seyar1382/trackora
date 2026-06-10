import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>Trackora</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
