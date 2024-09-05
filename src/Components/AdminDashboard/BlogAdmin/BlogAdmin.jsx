import React from 'react';
import './BlogAdmin.css';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

const BlogAdmin = () => {
  return (
    <div className="admin-blog-container">
      <div className="dashboard-header">
        <form className="searchh-form">
          <div className="form-group">
            <button className="searchbutton">
              <IonIcon icon={searchOutline} className="searchh-icon" />
            </button>
          </div>
        </form>
        <div className="sociall-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="Pakistan Flag" className="admin-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/notificaiton.png`} alt="Notification" className="admin-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/hacker.png`} alt="Hacker" className="admin-icon" />
          </a>
        </div>
      </div>

      <div className="adminblog-content">
        <div className="long-container">
          <span className="category-tag">Vegetables</span>
          <div className="left-contentt">
            <div className="left-text-contentt">
              <h2>How Healthy Are Your Vegetables</h2>
              <div className="document-textt">
                <div><a href="#">By Mahad Ashraf</a></div>
                <div><a href="#">July 20, 2019</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-container">
          <span className="category-tag">Fruits</span>
          <div className="left-contentt">
            <div className="left-text-contentt">
              <h2>Even the all-powerful</h2>
              <div className="document-textt">
                <div><a href="#">By Mahad Ashraf</a></div>
                <div><a href="#">July 20, 2019</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Containers */}
      <div className="additional-content">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="additional-container">
            <img src="https://www.nutritionindemand.com/wp-content/uploads/2021/03/SOTP-Blog-Cover-1080x675.png" className="additional-image" />
            <span className="category-tagg">Vegetables</span>
            <div className="document-texttt">
              <div><a href="#">July 20, 2019 </a></div>
              <div><h2>How to Make Best Fruit Juice</h2></div>
              <div><p>By Mahad Ashraf</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin;
