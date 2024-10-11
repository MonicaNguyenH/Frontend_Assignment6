import { useState } from "react";

export default function Task({ task, toggleComplete, removeTask }) {
  return (
    <>
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleComplete}
          />
        </label>
        <span className="checkbox" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
        <button className="task-delete" onClick={removeTask}>Remove</button>
      </div>
    </>
  );
}


// import { useState } from "react";

// export default function Task({ name }) {
//   // State for checkbox status (checked/unchecked)
//   const [isChecked, setIsChecked] = useState(false);
//   const [visible, setVisible] = useState(true);

//   // Handle checkbox toggle
//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//     onToggle(!isChecked); // Inform the parent about the status
//   };

//   // Remove task when clicking the remove button
//   const removeTask = () => {
//     setVisible(false);
//     onRemove();
//   };

//   // If the task is no longer visible, return null
//   if (!visible) {
//     return null;
//   }

//   return (
//     <>
//       <div className="task">
//         <label>
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={toggleCheckbox}
//           />
//         </label>
//         <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
//           {name}
//         </p>
//         <button className="task-delete" onClick={removeTask}>
//           Remove
//         </button>
//       </div>
//     </>
//   );
// }