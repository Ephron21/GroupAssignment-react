// ControlledForm.jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <form>
        <label>Enter Text: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <p style={{textAlign:'center'}}>Entered Value: {inputValue}</p>
    </div>
  );
}

export default ControlledForm;

