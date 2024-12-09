import React, { useState } from 'react';

function Counter() {
  // Set up state to keep track of the counter value
  const [count, setCount] = useState(0);

  // Increment function
  function increment () {
    setCount(count + 1);
  };

  // Decrement function using arrow function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>question #7 </h1>
      <h2>Counter: {count}</h2>
      <div>
        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            marginRight: '10px',
            cursor: 'pointer',
            backgroundColor: 'green',
            color: 'white',
            border: '5px 5px 5px solid cyan',
            boxShadow: '4px 4px solid green',
            borderRadius: '8px',
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            border: '5px 5px 5px solid cyan',
            boxShadow: '4px 4px solid green',
            borderRadius: '8px',
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
