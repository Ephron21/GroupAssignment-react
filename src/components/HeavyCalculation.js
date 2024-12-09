import React from 'react';

const performHeavyCalculation = (num) => {
  console.log('Performing heavy calculation...');
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += num; // Simulate a heavy calculation
  }
  return result;
};

// Memoized component
const HeavyCalculation = React.memo(({ number }) => {
  const calculatedValue = performHeavyCalculation(number);

  return (
    <div>
       <h1 style={{textAlign: 'center'}}>Question #23</h1>
      <h2>Heavy Calculation Result: {calculatedValue}</h2>
    </div>
  );
});

export default HeavyCalculation;
