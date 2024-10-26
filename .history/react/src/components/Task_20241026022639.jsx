import { useState } from "react";

export default function Task({ task, toggleComplete, removeTask }) {
  return (
    <>
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <label>
          <input
            id="checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={toggleComplete}
          />
        </label>
        <span className="task-name" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
        <button className="task-delete" onClick={removeTask}>Remove</button>
      </div>
    </>
  );
}

