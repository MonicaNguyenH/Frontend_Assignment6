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

  // Adding filter
  const [filter, setFilter] = useState("all"); // by default, all tasks will be displayed 

  const filteredTask = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // show all tasks if return is true (all selected)
  });

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  // For the task with the matching id, we update its completed property to the opposite of its current value.

  return (
    <>
      <div className="main">
        <h1 className="header">Daily Planner</h1>
        <div>
          <TaskForm addTask={addTask} />

          <div className="btn-filters">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("pending")}>Pending</button>
          </div>

          <h2 className="counting">
            You have {tasks.filter(task => !task.completed).length} tasks remaining
          </h2>
          {filteredTask.map((task) => (
            <Task 
              key={task.id} 
              task={task}
              toggleComplete={() => toggleComplete(task.id)} 
              removeTask={() => removeTask(task.id)}
              onToggle={() => toggleTaskCompletion(task.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


