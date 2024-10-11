import { useState } from "react";

export default function Task({name}){

    // check box section
    const checkbox = document.getElementById("checkbox");
    const crossText = document.getElementById("task-name");
    checkbox.addEventListener("change", function() {
        // If checked, strike through  
        if(this.checked) {
            crossText.style.textDecoration = "line-through";
        } else {
            crossText.style.textDecoration = "none";
        }
    })

    // remove button section
    const [visible, setVisible] = useState(true);
    const removeTask = () => {
        setVisible(false);
    };

    // if (!visible) {
    //     return null;
    // }

    return (
        <>
            <div className="task">
                <label for="checkbox">
                    <input type="checkbox"
                        id="checkbox"
                    />
                </label>
                <p id="task-name">{name}</p>
                <button 
                    className="task-delete"
                    onClick={removeTask}>
                        Remove
                </button>
            </div>

        </>
    );
}
