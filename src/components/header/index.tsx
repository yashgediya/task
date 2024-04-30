import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <ul className="navlink-container">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users/1"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            User Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
