import React, { useState } from 'react';
import Child from './Child.js';

const Parents = () => {
  const [message, setMessage] = useState('Hello, React.memo!');
  const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <button onClick={() => setMessage('Updated Message')}>Update Message</button>
      <Child message={message} />
    </div>
  );
};

export default Parents;
