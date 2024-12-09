// CheckboxForm.jsx
import React, { useState } from 'react';

function CheckboxForm() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Select Your Interested Course:</h2>
      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleChange}
          checked={selectedOptions.includes('React')}
        />
      React Course
      </label>
      <label>
        <input
          type="checkbox"
          value="Python"
          onChange={handleChange}
          checked={selectedOptions.includes('Python')}
        />
       Python Course
      </label>
      <label>
        <input
          type="checkbox"
          value="Javascript"
          onChange={handleChange}
          checked={selectedOptions.includes('Javascript')}
        />
       Javascript Course
      </label>
      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default CheckboxForm;

