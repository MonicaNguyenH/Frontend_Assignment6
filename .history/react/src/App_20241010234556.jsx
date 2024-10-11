// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Task from './components/Task'
import TaskForm from './components/text';

function App() {
    const [task, setTask] = useState([]);


  return (
    <>
      <Task name="Task 1" />
      <Task name="Task 2" />
      <Task name="Task 3" />
    </>
  )
}

export default App
