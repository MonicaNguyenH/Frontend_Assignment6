import { useState, useRef, useEffect } from "react";

export default function Task({ name }) {
    // Ref for the checkbox and task name elements
    const checkboxRef = useRef(null);
    const taskNameRef = useRef(null);

    // State to track the task's visibility
    const [visible, setVisible] = useState(true);

    // useEffect to add event listener after component renders
    useEffect(() => {
        const checkbox = checkboxRef.current;
        const crossText = taskNameRef.current;

        if (checkbox && crossText) {
            const handleCheckboxChange = () => {
                if (checkbox.checked) {
                    crossText.style.textDecoration = "line-through";
                } else {
                    crossText.style.textDecoration = "none";
                }
            };

            // Attach event listener
            checkbox.addEventListener("change", handleCheckboxChange);

            // Cleanup listener on component unmount
            return () => {
                checkbox.removeEventListener("change", handleCheckboxChange);
            };
        }
    }, []); // Empty dependency array ensures this runs once on mount

    // Remove task function
    const removeTask = () => {
        setVisible(false);
    };

    // If not visible, do not render the component
    if (!visible) {
        return null;
    }

    return (
        <>
            <div className="task">
                <label htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" ref={checkboxRef} />
                </label>
                <p id="task-name" ref={taskNameRef}>
                    {name}
                </p>
                <button className="task-delete" onClick={removeTask}>
                    Remove
                </button>
            </div>
        </>
    );
}
