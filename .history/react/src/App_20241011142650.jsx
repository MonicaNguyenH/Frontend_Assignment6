import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Task 1", completed: false },
    { id: 1, name: "Task 2", completed: false },
    { id: 2, name: "Task 3", completed: false }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, name: task, completed: false }]); // Adds task incomplete by default
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const remainingTask = tasks.filter(task => !task.completed).length;

  return (
    <>
      <div className="main">
        <h1 className="header">Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} />
          <h2 className="counting">
            You have {remainingTask} task{remainingTask !== 1 ? 's' : ''} remaining
          </h2>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task}
              toggleComplete={() => toggleComplete(task.id)} 
              removeTask={() => removeTask(task.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


