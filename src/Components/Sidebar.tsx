import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="profile">
        {/* Company image Logo */}
        <img
          src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"
          alt="profile_picture"
        />
        <h3>Company Name</h3>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <Link className="active" to="/">
              <span className="item">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span className="item">My Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <span className="item">Reports</span>
            </Link>
          </li>
          
          <li>
            <Link to="/setting">
              <span className="item">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
