import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContext'; // Adjust path as needed

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isSticky, setIsSticky] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for authentication

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        if (!timer) {
          const newTimer = setTimeout(() => {
            setIsSticky(true);
          }, 200); // Set delay time in milliseconds (e.g., 2000ms = 2 seconds)
          setTimer(newTimer);
        }
      } else {
        setIsSticky(false);
        if (timer) {
          clearTimeout(timer);
          setTimer(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  useEffect(() => {
    // Check if the user is logged in
    const checkLoginStatus = () => {
      const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn'); // Remove the login state
    setIsLoggedIn(false); // Update state
    window.location.href = '/'; // Redirect to home or login page
  };

  return (
    <div className={`navbar-section ${isSticky ? 'sticky' : ''}`}>
      <div className={`logo-img ${isSticky ? 'sticky-logo' : ''}`}>
        <Link to="/">VegeFoods</Link>
      </div>
      <div className="navbar-list">
        <ul className="navbar-nav">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/shop">Shop</Link></li>
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/blog">Blog</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
          <li className={`navbar-item ${isSticky ? 'cart-active' : ''}`}>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className='iconn' />[{cartCount}]</Link>
          </li>
          <li className="navbar-item"><Link to="/admindashboard/adminlogin"><FontAwesomeIcon icon={faUserShield} /> Login </Link></li>
          {isLoggedIn && (
            <>
              <li className="navbar-item"><Link to="/admindashboard"><FontAwesomeIcon icon={faUserShield} /> Admin Panel</Link></li>
              <li className="navbar-item"><Link onClick={handleLogout}>Logout</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
