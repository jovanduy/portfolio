import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import pdf from './JordanVResume.pdf';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to="/"><span className="name">Jordan Van Duyne</span></NavLink>
                <div className="links">
                    <a className="fa fa-github" href="https://github.com/jovanduy"></a>
                    <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/jordan-van-duyne-561a43a4/"></a>
                    <a className="fa fa-envelope" href="mailto:jordan.vanduyne@students.olin.edu"></a>
                    <a className="resume" href={pdf} target="_blank">RESUME</a>
                </div>
            </div>
        );
    }
}

export default Header;

