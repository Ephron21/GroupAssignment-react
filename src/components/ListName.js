import React from 'react';

function ListName(props) {
  const { items } = props; // Destructure the 'items' prop
  
  return (
    <div>
      <h2>Item List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '8px', fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListName;
