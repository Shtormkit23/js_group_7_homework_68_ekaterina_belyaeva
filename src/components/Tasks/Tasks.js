import React from 'react';
import './Tasks.css';

const Tasks = props => {
    return (
        <div className="Todo-items">
            {props.children}
        </div>
    );
};

export default Tasks;