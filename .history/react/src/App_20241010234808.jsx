// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/text';

function App() {
    const [task, setTask] = useState([]);

    const addTask = (newTask) => {
      setTask([...task, newTask]);
    };

  return (
    <>
      <div>
        <h1>Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
          {tasks.map((task) => (
            <Task key={task.id} name={task.name} />
          ))}
        </div>
        <Task name="Task 1" />
        <Task name="Task 2" />
        <Task name="Task 3" />
      </div>
    </>
  )
}

export default App
