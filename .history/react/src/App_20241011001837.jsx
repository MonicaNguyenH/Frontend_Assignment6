// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm';

function App() {
    const [task, setTask] = useState([]);

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
    const remainingTask = task.filter(task => !task.completed).length;

  return (
    <>
      <div>
        <h1>Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
          <h2>{remainingTask} task{remainingTask !== 1 ? 's' : ''} remaining</h2> {/* count remaining (more than 1 have 's') */}
          {task.map((task) => (
            <Task 
              key={task.id} 
              name={task.name}
              completed={task.completed}
              toggleComplete={toggleComplete}
            />
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
