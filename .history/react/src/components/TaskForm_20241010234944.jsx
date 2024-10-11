import { useState } from "react";
import { nanoid } from 'nanoid';

// const taskTemplate = {
//     name: 'new task'
// };

function TaskForm({addTask}) {
    const [taskName, setTaskName] = useState(''); // state for the task input
    const [editing, setEditing] = useState(false); // editing task

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // the form submission will be handled by JavaScript instead of triggering a page refresh
        if (taskName.trim()) { // checks if the taskName (the text the user entered) is not an empty string after trimming whitespace
            addTask({ 
                id: nanoid(), 
                name: taskName 
            }); 
            setTaskName(''); // clear the input field
            //setEditing(false); // close the form after saving
        }
    }

    const addingNewTask = ( 
        <form onSubmit={handleSubmit}>
            <div className="formContainer">
                <input
                    id="task-name"
                    name="task-name"
                    type="text"
                    value={name}
                    onChange={(e) => setTask({name: e.target.value})}
                />
            </div>
            <div className="btn-group">
                <button className="btn-save">Save</button>
            </div>
        </form>
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="formContainer">
                    <input
                        id="task-name"
                        name="task-name"
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Enter a new task"
                    />
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn-save">Save</button>
                </div>
            </form>

            <div 
                className="btn-save"
                onClick={() => setEditing('task')}
            >
                Save 
            </div>
        </>
    )
}