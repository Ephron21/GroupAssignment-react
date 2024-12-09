import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f0f0f0' }}>
      {/* Links to different routes */}
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'blue' }}>About</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'blue' }}>Contact</Link>
      <Link to="/product/1" style={{ textDecoration: 'none', color: 'blue' }}>Product 1</Link>
      <Link to="/product/2" style={{ textDecoration: 'none', color: 'blue' }}>Product 2</Link>
    </nav>
  );
};

export default Navbar;
