import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  // 1. Initialize the "Taxi Driver"
  const navigate = useNavigate();

  const handleLogin = () => {
    // Imagine we check the password here...
    console.log("Login Successful! Redirecting...");
    
    // 2. Automatically move the user to the Profile page
    navigate('/profile');
  };

  return (
    <nav style={{ padding: '20px', background: '#f4f4f4' }}>
      {/* 3. The 'Magic Portal' for the user to click */}
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      
      <button onClick={handleLogin}>Log Me In (Auto-move)</button>
    </nav>
  );
}

export default Navigation;

/* 
RESULTS:
- Click 'About': You land on the About page instantly. No "Flicker."
- Click 'Log Me In': The console logs the message, and 0.1 seconds later, 
  the URL changes to /profile and you are looking at the Profile page.
*/