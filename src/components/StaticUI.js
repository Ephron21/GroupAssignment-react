import React from 'react';

const StaticUI = React.memo(() => {
  console.log('StaticUI re-rendered');

  return (
    <div style={{ marginTop: '20px', color: 'white' }}>
      <p>This is static content that does not re-render when the time updates.</p>
      <p>Enjoy your day!</p>
    </div>
  );
});

export default StaticUI;
