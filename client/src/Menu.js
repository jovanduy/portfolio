import React, { Component } from 'react';
import MenuButton from './MenuButton.js';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="nav">
                <nav>
                    <ul className="menu">
                        <MenuButton link="/about" text="ABOUT" />
                        <MenuButton link="/experience" text="EXPERIENCE" />
                        <MenuButton link="/projects" text="PROJECTS" />
                        <MenuButton link="/interests" text="INTERESTS" />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
