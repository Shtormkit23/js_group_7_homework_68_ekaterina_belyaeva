import React from 'react';
import './NavigationItems.css';
import {NavLink} from "react-router-dom";

const NavigationItems = () => (
    <ul className="NavigationItems">
        <li className='NavigationItem'>
            <NavLink exact to={`/`}>Counter</NavLink>
        </li>
        <li className='NavigationItem'>
            <NavLink exact to={`/todo`}>To-Do List</NavLink>
        </li>
    </ul>
);

export default NavigationItems;