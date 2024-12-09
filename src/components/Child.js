import React from 'react';

// Child component wrapped with React.memo
const Child = React.memo(({ message }) => {
  console.log('Child component rendered');
  return <div>Message: {message}</div>;
});

export default Child;
