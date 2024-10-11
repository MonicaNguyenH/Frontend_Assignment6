import { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function App() {
  // Initial default tasks
  const defaultTasks = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false }
  ];

  // State for tasks and pending task count
  const [tasks, setTasks] = useState(defaultTasks);
  const [pendingTasks, setPendingTasks] = useState(0);

  // Effect to calculate initial pending tasks
  useEffect(() => {
    const initialPending = tasks.filter(task => !task.completed).length;
    setPendingTasks(initialPending);
  }, [tasks]);

  // Add a new task
  const addTask = (name) => {
    const newTask = { id: tasks.length + 1, name: name, completed: false };
    setTasks([...tasks, newTask]);
    setPendingTasks(pendingTasks + 1); // Increase the pending count for new tasks
  };

  // Toggle task completion status
  const handleToggle = (isCompleted) => {
    setPendingTasks((prev) => (isCompleted ? prev - 1 : prev + 1));
  };

  // Remove a task
  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Pending Tasks: {pendingTasks}</h1>
      <TaskForm onAddTask={addTask} />
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            name={task.name}
            onToggle={handleToggle}
            onRemove={() => handleRemoveTask(task.id)} // Pass remove handler
          />
        ))}
      </div>
    </div>
  );
}
