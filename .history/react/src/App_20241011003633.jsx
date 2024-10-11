// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm';

function App() {
  const [task, setTask] = useState([
    { id: 1, name: "Default Task 1", completed: false },
    { id: 2, name: "Default Task 2", completed: false },
    { id: 3, name: "Default Task 3", completed: false }
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

  // count remaining task
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <>
      <div>
        <h1>Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
          <h2>You have {remainingTask} task{remainingTask !== 1 ? 's' : ''} remaining</h2> {/* count remaining (more than 1 have 's') */}
          {task.map((task) => (
            <Task 
              key={task.id} 
              id={task.id}
              name={task.name}
              completed={task.completed}
              toggleComplete={toggleComplete}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
