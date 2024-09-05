import React from 'react';
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin,  } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IonIcon } from '@ionic/react';
import {  arrowUpOutline } from 'ionicons/icons';

export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footer-section">
      <div className="arrowup-footer">
          <div className="up-icon" onClick={scrollToTop}>
           <IonIcon icon={arrowUpOutline} className="iconn2" />
          </div>
        </div>
      <div className="footer-container">
        
        <div className="coll-1">
          <h5 className="text-heading">VegeFoods</h5>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="coll-2">
          <h5 className="text-heading">Menu</h5>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="coll-3">
          <h5 className="text-heading">Help</h5>
          <ul>
            <li><a href="#">Shipping Information</a></li>
            <li><a href="#">Returns & Exchange</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
      
        </div>
        <div className="coll-4">
          <h5 className="text-heading">Have a Question?</h5>
         

<div className="info-footer">
            <div className="icons2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon22"  />
            </div>
            <div className="iconns-text">
            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </div>
          </div>
          <div className="info-footer">
          <div className="icons2">
          <FontAwesomeIcon icon={faPhone} className="icon22" />
          </div>
          <div className="iconns-text">
          <span>+92 3414427668</span>
          </div>
          </div>
          <div className="info-footer">
          <div className="icons2">
          <FontAwesomeIcon icon={faEnvelope} className="icon22" />
          </div>
          <div className="iconns-text">
          <span>mahadashraf.850@gmail.com</span>
          </div>
          </div>

        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 VegeFoods. All rights reserved. This template is made by <a href="https://mahad-portfolio-two.vercel.app/">Mahad Ashraf</a></p>
      </div>
    </div>
  );
};
