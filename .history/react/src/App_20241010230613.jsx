// import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
    console.log('App is rendering');

  return (
    <>
      <Task name="Task 1" />
      <Task name="Task 2" />
      <Task name="Task 3" />
    </>
  )
}

export default App
