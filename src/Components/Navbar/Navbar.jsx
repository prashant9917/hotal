// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import Logo from "../../assets/img/svg/logo.svg";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* App Logo */}
          <Link to="/">
            <img src={Logo} alt="Beach Resort Logo" />
          </Link>

          {/* Toggle Button */}
          <button
            type="button"
            className="nav-btn"
            aria-label="Toggle navigation menu"
            onClick={handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
