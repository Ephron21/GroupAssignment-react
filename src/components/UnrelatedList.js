import React from 'react';

// UnrelatedList is memoized to avoid unnecessary re-renders
const UnrelatedList = React.memo(({ items }) => {
  console.log('UnrelatedList rendered');
  return (
    <p>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </p>
  );
});

export default UnrelatedList;
