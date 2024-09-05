import React from 'react';
import './ContactContent.css';

export const ContactContent = () => {
  return (
    <div className="contact-content-section">
      <div className="contact-content-container">
        <div className="uppercontent">
          <div className="uppercontent-text">
            <p><span>Address: </span>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className="uppercontent-text">
            <p><span>Phone: </span><a href="tel:+1235235598">+92 341 4427668</a></p>
          </div>
          <div className="uppercontent-text">
            <p><span>Email: </span><a href="mailto:mahadashraf.850@gmail.com">MahadAshraf</a></p>
          </div>
          <div className="uppercontent-text">
            <p><span>Website: </span><a href="https://mahad-portfolio-two.vercel.app/">Website</a></p>
          </div>
        </div>
        <div className="lowercontent">
          <div className="lowercontent-map">
            <div className="map-error">
              <i className="map-icon">!</i>
              <p>Oops! Something went wrong.</p>
              <span>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</span>
            </div>
          </div>
          <div className="lowercontent-form">
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
