import { useState, useEffect, useRef } from "react";

export default function Task({name}){

    // check box section
    // Ref for the checkbox and task name elements
    const checkboxRef = useRef(null);
    const taskNameRef = useRef(null);

    useEffect(() => {
        const checkbox = checkboxRef.current;
        const crossText = taskNameRef.current;

        if (checkbox&&crossText) {
            const handleCheckBoxChange = () => {
                if(checkbox.checked) {
                    crossText.style.textDecoration = "line-through";
                } else {
                    crossText.style.textDecoration = "none";
                }
            };

            checkbox.addEventListener("change", handleCheckBoxChange);

            // cleanup listener
            return () => {
                checkbox.removeEventListener("change", handleCheckBoxChange);
            };

        }
    });

    // remove button section
    const [visible, setVisible] = useState(true);
    const removeTask = () => {
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <>
            <div className="task">
                <label for="checkbox">
                    <input type="checkbox"
                        id="checkbox"
                        ref={checkboxRef}
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