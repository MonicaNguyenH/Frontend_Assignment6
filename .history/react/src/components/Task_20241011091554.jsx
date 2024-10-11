import { useState } from "react";

export default function Task({ name }) {
  // State for checkbox status (checked/unchecked)
  const [isChecked, setIsChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  // Handle checkbox toggle
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
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
