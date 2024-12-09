import React from "react";

function Header() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Question #1</h1>
      <h2>Welcome to Group Assignment</h2>
      <h3>Group Members</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <table border={4} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>RegNo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ephron TUYISHIME</td>
              <td>222005571</td>
            </tr>
            <tr>
              <td>Herve SUGIRA</td>
              <td>222004590</td>
            </tr>
            <tr>
              <td>Emmanuel SIBONIYO</td>
              <td>222000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Header;
