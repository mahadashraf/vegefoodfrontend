import React, { useState } from 'react';
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch('http://localhost:5100/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserEmail: email,
          UserPassword: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError('Login failed');
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);
      sessionStorage.setItem('isLoggedIn', 'true'); // Set session storage item
      window.location.href = '/'; // Redirect to home
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error during login');
    }
  };

  return (
    <div className="login-pagee">
      <a href="/"><h1 className='logotext'>VegeFoods</h1></a>
      <div className="overlay">
        <div className="login-container">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="options">
              <label className='labellogin'>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className='forgetpass'>Forgot Password?</a>
            </div>
            <br />
            <button className='buttonlogin' type="submit">LOGIN</button>
          </form>
          
          <div className="social-signup">
            <p className='socialstyle'>
              <div className="line1"><hr /></div>
              <div className="texttlogin">Login with</div>
              <div className="line1"><hr /></div>
            </p>
            <div className="social-icons">
              <a href="#" className='social-button facebook'><img src="../facebook.png" alt="Facebook" width={35}/></a>
              <a href="#" className='social-button twitter'><img src="../twitter.png" alt="Twitter" width={35}/></a>
              <a href="#" className='social-button social'><img src="../social.png" alt="Social" width={35}/></a>
            </div>
            <div className="create-account">
              <p>Don't have an account? <a href="/admindashboard/signup" className="signup-link">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>2024 VegeFoods. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AdminLogin;
