import React, { useState } from 'react';
import UnrelatedList from './UnrelatedList';

const Counts = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(['React', 'CSS', 'HTML', 'JAVASCRIPT']);

  return (
    <div style={{textAlign: 'center'}}>
       <h1 style={{textAlign: 'center'}}>Question #22</h1>
      <h2>Counter Component</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
      <h2>Unrelated List</h2>
      <UnrelatedList items={items} />
    </div>
  );
};

export default Counts;
