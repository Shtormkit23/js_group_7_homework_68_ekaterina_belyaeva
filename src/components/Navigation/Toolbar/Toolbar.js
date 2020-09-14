import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => (
    <header className="Toolbar">
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;