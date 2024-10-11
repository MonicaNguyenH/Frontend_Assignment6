// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm';

function App() {
  const [task, setTask] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false }
  ]);

  const addTask = (newTask) => {
    setTask([...task, {...newTask, completed: false}]); // add task incompleted by default
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = task.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task // toggle task completed status
    );
    setTask(updatedTasks); // update the state with the new task list
  };

  const removeTask = (taskId) => {
    const updatedTasks = task.filter(task => task.id !== taskId);
    setTask(updatedTasks); // update the state without the removed task
  };

  // count remaining task
  const remainingTask = task.filter(task => !task.completed).length;

  return (
    <>
      <div className="main">
        <h1 className="header">Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
          <h2 className="counting">You have {remainingTask} task{remainingTask !== 1 ? 's' : ''} remaining</h2> {/* count remaining (more than 1 have 's') */}
          {task.map((task) => (
            <Task 
              key={task.id} 
              name={task.name}
              completed={task.completed}
              toggleComplete={toggleComplete(task.id)}
              removeTask={() => removeTask(task.id)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
