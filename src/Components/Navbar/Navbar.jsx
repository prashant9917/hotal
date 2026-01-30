import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaAlignRight,
  FaHome,
  FaBed,
  FaChevronDown,
  FaUserPlus,
  FaSignInAlt,
  FaBullhorn,
  FaPaintBrush,
  FaSearch
} from "react-icons/fa";
import Logo from "../../assets/img/svg/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close menu on link click (mobile friendly) */
  const closeAll = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" onClick={closeAll}>
            <img src={Logo} alt="Logo" />
          </Link>

          <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        <ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
          {/* HOME */}
          <li>
            <Link to="/" onClick={closeAll}>
              <FaHome /> Home
            </Link>
          </li>

          {/* ROOMS */}
          <li>
            <Link to="/rooms" onClick={closeAll}>
              <FaBed /> Rooms
            </Link>
          </li>
          {/* SIGN UP */}
          <li>
            <Link to="/signup" onClick={closeAll}>
              <FaUserPlus /> Sign Up
            </Link>
          </li>

          {/* LOGIN */}
          <li>
            <Link to="/login" onClick={closeAll}>
              <FaSignInAlt /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
