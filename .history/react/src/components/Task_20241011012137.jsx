import React from "react";

export default function Task({ name, toggleComplete, id, completed, removeTask }) {

    return (
        <>
            <div className="task">
                <label htmlFor={`checkbox-${id}`}>
                    <input
                        type="checkbox"
                        id={`checkbox-${id}`}
                        checked={completed} // current task status based on completion 
                        onChange={() => toggleComplete(id)} // toggle task completion status
                    />
                </label>
                {/* Apply conditional style based on completion status */}
                <p style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    fontWeight: completed ? 'bold' : 'normal',
                    fontStyle: completed ? 'italic' : 'normal'
                }}>
                    {name}
                </p>
                <button 
                    className="task-delete"
                    onClick={removeTask}>
                    Remove
                </button>
            </div>
        </>
    );
}
