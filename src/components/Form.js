import React, { useState } from 'react';

function Form() {
  // State to store form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState('');
  // arrow function with function name called handeSubmit with one paramenter named event
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior (page reload)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state with input value
            placeholder="Enter your name"
            style={{ padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ marginRight: '10px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state with input value
            placeholder="Enter your email"
            style={{ padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label htmlFor="password" style={{ marginRight: '10px' }}>Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setName(e.target.value)} // Update state with input value
            placeholder="Enter your password"
            style={{ padding: '10px', fontSize: '16px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '18px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
