import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // const removeTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
 // <button onClick={() => removeTask(index)}>Remove</button>
  // };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask();
   }
  }

  function toggleDone(event) {
    const target = event.target;
    if (target.tagName === "LI") {
      target.classList.toggle("done");
    }

  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} onClick={toggleDone}>
            {task}
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
