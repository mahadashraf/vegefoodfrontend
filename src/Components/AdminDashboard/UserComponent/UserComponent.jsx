import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import "./UserComponent.css";

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5100/GetUsers'); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='userdashboard'>
      <div className='dashboard-header'>
        <form className="searchh-form">
          <div className="form-group">
            <IonIcon icon={searchOutline} className="searchh-icon" />
            <input type="text" placeholder="Search..." className="searchh-input" />
          </div>
        </form>
        <div className="sociall-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="Facebook" className="admin-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/notificaiton.png`} alt="Instagram" className="admin-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/hacker.png`} alt="LinkedIn" className="admin-icon" />
          </a>
        </div>
      </div>

      <div className='user-table'>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id}> {/* Assuming the ID field is _id */}
                  <td>{user.UserF_Name}</td> {/* Adjust field names based on your API response */}
                  <td>{user.UserL_Name}</td>
                  <td>{user.UserEmail}</td>
                  <td>{user.UserPhone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserComponent;
