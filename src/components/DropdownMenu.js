import React, { useState } from 'react';

const DropdownMenu =() => {
  // State to track if the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close using arrow function
  let toggleDropdown =()  => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button 
        onClick={toggleDropdown} 
        style={{
          padding: '10px 20px', 
          fontSize: '18px', 
          cursor: 'pointer',
          backgroundColor: '#1f32d3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px'
        }}
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {isOpen && (
        <ul style={{
          listStyle: 'none', 
          padding: '0', 
          marginTop: '10px', 
          backgroundColor: '#f1f1f1',
          width: '200px', 
          margin: '0 auto', 
          borderRadius: '5px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>HTML</li>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>CSS</li>
          <li style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>JAVASCRIPT</li>
          <li style={{ padding: '10px' }}>REACT</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
