import { useState } from "react";
import { nanoid } from 'nanoid';

// const taskTemplate = {
//     name: 'new task'
// };

export default function TaskForm({addTask}) {
    const [taskName, setTaskName] = useState('');

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // the form submission will be handled by JavaScript instead of triggering a page refresh
        if (taskName.trim()) { // checks if the taskName (the text the user entered) is not an empty string after trimming whitespace
            addTask( taskName ); 
            setTaskName(''); // clear the input field
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="formContainer">
                    <input
                        id="task-name"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter a new task"
                    />
                    <div className="btn-group">
                        <button type="submit" className="btn-save">Save</button>
                    </div>
                </div>
            </form>
        </>
    )
}

