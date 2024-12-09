import React, { useState } from 'react';

const HoverBackground = () => {
  // State to track if the div is being hovered
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse enter (hover) using arrow function with function named handleMouseEnter without any parameter
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave (unhover) usiing normal function
  function handleMouseLeave () {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '300px',
        height: '200px',
        margin: '0 auto',
        backgroundColor: isHovered ? 'cyan' : 'lightgray', // Change color on hover
       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        color: 'white',
        borderRadius: '10px',
      }}
    >
      {isHovered ? 'Hovering!' : 'Hover over me!'}
    </div>
  );
}

export default HoverBackground;
