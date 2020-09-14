import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='Task'>
            <p id={props.id} className="TextTask">{props.task}</p>
            <button className="Button" onClick={props.onClick}>Delete</button>
        </div>
    );
};

export default Task;