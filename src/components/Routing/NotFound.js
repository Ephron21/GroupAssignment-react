import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', color: 'red', fontSize: '24px', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
