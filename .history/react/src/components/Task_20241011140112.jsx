import { useState } from "react";

export default function Task({ task }) {
  return (
    <>
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCheckbox(task.id)}
          />
        </label>
        <span>{task.name}</span>
        <button className="task-delete" onClick={() => removeTask(task.id)}>Remove</button>
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