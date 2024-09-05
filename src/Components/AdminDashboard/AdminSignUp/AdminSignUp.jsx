import React, { useState } from 'react';
import axios from 'axios';
import "./AdminSignUp.css";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    UserF_Name: '',
    UserL_Name: '',
    UserEmail: '',
    UserPhone: '',
    UserPassword: '',
    UserConfirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    // Email validation
    if (formData.UserEmail && !/\S+@\S+\.\S+/.test(formData.UserEmail)) {
      newErrors.UserEmail = 'Invalid email format';
    }

    // Phone number validation
    if (formData.UserPhone && !/^\d{11}$/.test(formData.UserPhone)) {
      newErrors.UserPhone = 'Phone number must be 11 digits long and contain only numbers';
    }

    // Password match validation
    if (formData.UserPassword && formData.UserPassword !== formData.UserConfirmPassword) {
      newErrors.UserConfirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:5100/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error details:', error.response);
      const errorMessage = error.response?.data?.error || 'An error occurred';
      alert(errorMessage);
    }
  };

  return (
    <div className="signup-page">
      <a href="/"><h1 className='logotext'>VegeFoods</h1></a>
      <div className="left-section">
        <h1>Nourishing Your Life with Fresh Veggies</h1>
      </div>
      <div className="right-section">
        <div className="header">
          <span className="company-logo">VF</span>
        </div>
        <h2>Create An Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="mainn">
          <div className="input-row">
          {errors.UserF_Name && <p className="error">{errors.UserF_Name}</p>}
            <input
              type="text"
              name="UserF_Name"
              placeholder="First Name"
              className="input-field"
              onChange={handleChange}
            />
            </div>
            <div className="input-row">
            {errors.UserL_Name && <p className="error">{errors.UserL_Name}</p>}
            <input
              type="text"
              name="UserL_Name"
              placeholder="Last Name"
              className="input-field"
              onChange={handleChange}
            />
           
          </div>

          </div>

          <div className="mainn">

          <div className="input-row">
          {errors.UserEmail && <p className="error">{errors.UserEmail}</p>}
            <input
              type="email"
              name="UserEmail"
              placeholder="Email"
              className="input-field"
              onChange={handleChange}
            />
      </div>
            <div className="input-row">
            {errors.UserPhone && <p className="error">{errors.UserPhone}</p>}
            <input
              type="text"
              name="UserPhone"
              placeholder="Phone Number"
              className="input-field"
              onChange={handleChange}
            />
           
          </div>

          </div>

<div className="mainn">
          <div className="input-row">
            
          {errors.UserPassword && <p className="error">{errors.UserPassword}</p>}
            <input
              type="password"
              name="UserPassword"
              placeholder="Create Password"
              className="input-field"
              onChange={handleChange}
            />
</div>
    <div className="input-row">
    {errors.UserConfirmPassword && <p className="error">{errors.UserConfirmPassword}</p>}
            <input
              type="password"
              name="UserConfirmPassword"
              placeholder="Confirm Password"
              className="input-field"
              onChange={handleChange}
            />
          
          </div>

          </div>

          <div className="checkbox-row">
            <label>
              <input type="checkbox" /> Creating your account and you accepting <a href="/" className="terms-link">Terms & Conditions</a>.
            </label>
          </div>
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
        <div className="social-signupp">
          <p className='socialstylee'>
            <div className="line1"><hr /></div>
            <div className="texttlogin">Signup with</div>
            <div className="line1"><hr /></div>
          </p>
          <div className="social-icons">
            <a href="/" className='social-button facebook'><img src="../facebook.png" alt="Facebook" width={35}/></a>
            <a href="/" className='social-button facebook'><img src="../twitter.png" alt="Twitter" width={35}/></a>
            <a href="/" className='social-button facebook'><img src="../social.png" alt="Social" width={35}/></a>
          </div>
          <div className="create-accountt">
            <p>Already have an account? <a href="/admindashboard/adminlogin" className="login-link"> Sign in here!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
