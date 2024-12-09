import React from 'react';

function Button(props) {
  const { text, color, onClick } = props;

  const buttonStyle = {
    backgroundColor: color || 'blue', // Default color is blue if no color is passed
    color: 'white', // Button text color
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
  
    <button style={buttonStyle} onClick={onClick}>
      {text || 'Delete'} {/* Default text is "Delete" if no text is passed */}
    </button>
   
  );
}

export default Button;
