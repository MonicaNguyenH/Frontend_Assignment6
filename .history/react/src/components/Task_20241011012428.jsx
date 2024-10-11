import { useEffect, useRef } from "react";

export default function Task({ name, toggleComplete, id, completed, removeTask }) {
  // Ref for the task name element
  const taskNameRef = useRef(null);

  useEffect(() => {
    const crossText = taskNameRef.current;

    if (crossText) {
      if (completed) {
        crossText.style.textDecoration = "line-through";
      } else {
        crossText.style.textDecoration = "none";
      }
    }
  }, [completed]); // Run this effect whenever the 'completed' status changes

  return (
    <>
      <div className="task">
        <label htmlFor="checkbox">
          <input 
            type="checkbox"
            id={`checkbox-${id}`}
            checked={completed} // Current task status based on completion 
            onChange={() => toggleComplete(id)} // Call toggleComplete to update task status
          />
        </label>
        <p id="task-name" ref={taskNameRef}>{name}</p>
        <button 
          className="task-delete"
          onClick={removeTask}>
            Remove
        </button>
      </div>
    </>
  );
}
