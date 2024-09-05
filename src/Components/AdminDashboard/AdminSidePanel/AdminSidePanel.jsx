import React from 'react';
import "./AdminPanel.css";
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaBox, FaBlog, FaSignInAlt } from 'react-icons/fa';

const AdminSidePanel = () => {
  return (
    <div className="admin-side-panel">
      <div className="logoo">
        <Link to="/" className="logo-link">
          <div className="logo-container">
            <div className="logo-front">
              <span className="logo-short">VF</span>
            </div>
            <div className="logo-back">
              <span className="logo-expanded">VegeFood</span>
            </div>
          </div>
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li><Link to="/admindashboard" className="nav-link"><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/admindashboard/useradmin" className="nav-link"><FaUser /> User</Link></li>
          <li><Link to="/admindashboard/productadmin" className="nav-link"><FaBox /> Product</Link></li>
          <li><Link to="/admindashboard/blogadmin" className="nav-link"><FaBlog /> Blog</Link></li>
          <li><Link to="/admindashboard/adminlogin" className="nav-link"><FaSignInAlt /> Login</Link></li>
         
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidePanel;
