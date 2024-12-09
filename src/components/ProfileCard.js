import React from 'react';

const ProfileCard=(props) => {//arrow function 
  const { name, age, email } = props;

  return (
    
    <div style={styles.card}>
     
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.email}>Email: {email}</p>
    </div>
    
  );
}

// Styles for the card component
const styles = {
  card: {
    width: '400px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'cyan',
    boxShadow: '0 8px 8px blue',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    
  },
  name: {
    fontSize: '24px',
    color: '#333',
  },
  age: {
    fontSize: '18px',
    color: '#555',
  },
  email: {
    fontSize: '16px',
    color: '#101',
  }
};

export default ProfileCard;
