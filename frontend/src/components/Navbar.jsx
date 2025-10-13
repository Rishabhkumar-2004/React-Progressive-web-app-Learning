import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <FaGraduationCap className="logo-icon" />
          <h2>EduLearn</h2>
        </div>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {/* Show button below menu on mobile */}
          {/* <button className="nav-btn mobile-btn">Start Learning</button> */}
          <Link
            to="/courses"
            className="nav-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Start Learning
          </Link>
        </div>

        {/* Desktop Button */}
        {/* <button className="nav-btn desktop-btn">Start Learning</button> */}
        <Link to="/courses" className="nav-btn desktop-btn">
            Start Learning
        </Link>


        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
