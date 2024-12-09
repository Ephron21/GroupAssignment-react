import React from 'react';

const TodoListApp = React.memo(({ tasks }) => {
  console.log('TodoList component re-rendered');
  
  return (
    <div>
         <h1 style={{textAlign: 'center'}}>Question #24</h1>
      <h2>Your Tasks:</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet! Add some tasks above.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task, index) => (
            <li key={index} style={{ padding: '5px 0', borderBottom: '1px solid #ddd' }}>
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default TodoListApp;
