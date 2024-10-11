import { useState } from "react";
import { nanoid } from 'nanoid';

const taskTemplate = {
    name: 'new task'
};

function TaskForm() {

    const [editing, setEditing] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setTask(taskTemplate);
        setEditing(false);
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
            <div 
                className="btn-save"
                onClick={() => setEditing('task')}
            >
                Save 
            </div>
        </>
    )
}