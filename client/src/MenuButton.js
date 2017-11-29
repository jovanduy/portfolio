import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuButton extends Component {
    render() {
        let name = "menu-button " + (this.props.active ? "active" : "");
        return (
            <li className={name}>
                <NavLink to={this.props.link}>
                    {this.props.text}
                    <div className="underline">
                    </div>
                </NavLink>
            </li>
        );
    }
}

export default MenuButton;
