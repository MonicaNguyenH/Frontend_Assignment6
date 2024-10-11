import { useState } from "react";

export default function Task({ name }) {
  // State for checkbox status (checked/unchecked)
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  // Handle checkbox toggle
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked); // Inform the parent about the status
  };

  // Remove task when clicking the remove button
  const removeTask = () => {
    setVisible(false);
  };

  // If the task is no longer visible, return null
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="task">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
        </label>
        <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {name}
        </p>
        <button className="task-delete" onClick={removeTask}>
          Remove
        </button>
      </div>
    </>
  );
}


// import { useState, useEffect, useRef } from "react";

// export default function Task({name, toggleComplete, id, completed, removeTask}){

//     // check box section
//     // Ref for the checkbox and task name elements
//     const checkboxRef = useRef(null);
//     const taskNameRef = useRef(null);

//     useEffect(() => {
//         const checkbox = checkboxRef.current;
//         const crossText = taskNameRef.current;

//         if (checkbox&&crossText) {
//             const handleCheckBoxChange = () => {
//                 toggleComplete(id); // call toggleComplete function passed from the parent to update task completion status
//                 if(checkbox.checked) {
//                     crossText.style.textDecoration = "line-through";
//                 } else {
//                     crossText.style.textDecoration = "none";
//                 }
//             };

//             checkbox.addEventListener("change", handleCheckBoxChange);

//             // cleanup listener
//             return () => {
//                 checkbox.removeEventListener("change", handleCheckBoxChange);
//             };

//         }
//     }, [toggleComplete, id]);

//     // remove button section
//     const [visible, setVisible] = useState(true);

//     // const removeTask = () => {
//     //     setVisible(false);
//     // };

//     if (!visible) {
//         return null;
//     }

//     return (
//         <>
//             <div className="task">
//                 <label htmlFor="checkbox">
//                     <input 
//                         type="checkbox"
//                         id={`checkbox-${id}`}
//                         ref={checkboxRef}
//                         checked={completed} // current taks status based on completion 
//                         onChange={() => toggleComplete(id)}
//                     />
//                 </label>
//                 <p id="task-name" ref={taskNameRef}>{name}</p>
//                 <button 
//                     className="task-delete"
//                     onClick={removeTask}>
//                         Remove
//                 </button>
//             </div>

//         </>
//     );
// }