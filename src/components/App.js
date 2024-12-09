import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './Header';
import CurrentDate from './CurrentDate';
import Parent from './Parent';
import Button from './Button';
import ProfileCard from './ProfileCard';
import ListName from './ListName';
import ToggleButton from './ToggleButton';
import Counter from './Counter';
import HoverBackground from './HoverBackground';
import Form from './Form';
import DropdownMenu from './DropdownMenu';
import LoginForm from './LoginForm';
import ControlledForm from './ControlledForm';
import ValidationForm from './ValidationForm';
import MultiStepForm from './MultiStepForm';
import CheckboxForm from './CheckboxForm';

import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';
import ProductDetails from './Routing/ProductDetails';
import NotFound from './Routing/NotFound';
import Blog from './Routing/Blog';
import BlogPost from './Routing/BlogPost';
import Navbar from './Navbar';

import LecturerForm from './LecturerForm';
import StudentForm from './StudentForm';
import DriverForm from './DriverForm';
import BookForm from './BookForm';
import ModuleForm from './ModuleForm';

import Parents from './Parents';
import Counts from './Counts';
import HeavyCalculation from './HeavyCalculation';
import TodoList from './TodoListApp';
import StaticUI from './StaticUI';

function App() {
  // Handlers for reusable buttons
  function handleSubmit() {
    alert('Submit Button clicked');
  }
  function handleCancel() {
    alert('Cancel Button clicked');
  }
  function handleDelete() {
    alert('Delete Button clicked');
  }

  // Question 23 - Heavy Calculation
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Question 24 - To-do List
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  // Question 25 - Live Clock
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const items = ['Diano', 'Esron', 'Marthe', 'Diane', 'Chanella', 'Renatha', 'Ruth'];

  return (
    <>
      <Router>
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', background: '#007BFF', padding: '10px' }}>
              <li style={{ margin: '0 15px' }}>
                <Link to="/lecturer" style={{ color: 'white', textDecoration: 'none' }}>Lecturer Registration</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/student" style={{ color: 'white', textDecoration: 'none' }}>Student Registration</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/driver" style={{ color: 'white', textDecoration: 'none' }}>Driver Registration</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/book" style={{ color: 'white', textDecoration: 'none' }}>Book Registration</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/module" style={{ color: 'white', textDecoration: 'none' }}>Module Registration</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/lecturer" element={<LecturerForm />} />
            <Route path="/student" element={<StudentForm />} />
            <Route path="/driver" element={<DriverForm />} />
            <Route path="/book" element={<BookForm />} />
            <Route path="/module" element={<ModuleForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <Header />
      <CurrentDate />
      <Parent />

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Reusable Button Component</h2>
        <Button text="Submit" color="green" onClick={handleSubmit} />
        <Button text="Cancel" color="red" onClick={handleCancel} />
        <Button text="Delete" color="blue" onClick={handleDelete} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: '35%' }}>
        <ProfileCard name="Esron TUYISHIME" age={20} email="esron21@gmail.com" />
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Welcome to the List of Names</h2>
        <ListName items={items} />
      </div>

      <ToggleButton />
      <Counter />
      <HoverBackground />
      <Form />
      <DropdownMenu />
      <LoginForm />
      <ControlledForm />
      <ValidationForm />
      <MultiStepForm />
      <CheckboxForm />
      <Parents />
      <Counts />

      <div style={{ textAlign: 'center' }}>
        <h2>React.memo for Heavy Calculation</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter ({counter})</button>
        <button onClick={() => setNumber(number + 1)}>Increment Number for Calculation ({number})</button>
        <HeavyCalculation number={number} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>To-Do List App</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <TodoList tasks={tasks} />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2>Live Clock with Optimized Static UI</h2>
        <StaticUI />
        <div>Current Time: {currentTime}</div>
      </div>

      <Router>
  <nav style={{ display: 'flex', justifyContent: 'center', background: '#007BFF', padding: '10px' }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
    <Link to="/about" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>About</Link>
    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Contact</Link>
    <Link to="/blog" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Blog</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route path="/blog" element={<Blog />}>
      <Route path=":postId" element={<BlogPost />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
    </>
  );
}

export default App;
