import React from 'react';
import './TaskForm.css';

const TaskForm = props => {
    return (
        <form className="Form" onSubmit={props.sendHandler}>
            <input
                className="Input" placeholder="New text..."
                type="text" name="task"
                value={props.task}
                onChange={props.onChange}
                required
            />
            <button className="Button" type="submit">Add</button>
        </form>
    );
};

export default TaskForm;