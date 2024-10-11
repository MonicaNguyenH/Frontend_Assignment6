// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm';

function App() {
    const [task, setTask] = useState([]);

    const addTask = (newTask) => {
      setTask([...task, newTask]);
    };

    const toggleComplete = (taskId) => {
      const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };

  return (
    <>
      <div>
        <h1>Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
          {task.map((task) => (
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
