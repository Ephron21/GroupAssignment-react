import React, { useState } from 'react';

const ToggleButton=() =>{
  // Use state to track the toggle status
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>question #6 </h1>
      <button
        onClick={toggle}
        style={{
          backgroundColor: isOn ? 'green' : 'red', // Green when ON, Red when OFF
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px',
        }}
      >
        {isOn ? 'ON' : 'OFF'} {/* Display "ON" or "OFF" based on the state */}
      </button>
    </div>
  );
}

export default ToggleButton;
