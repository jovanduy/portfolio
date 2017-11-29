import React, { Component } from 'react';
import jordan from './img/jordan.jpg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about" >
        <div className="img">
            <img src={jordan} alt="Jordan" />
        </div>
        <div className="text">
            <p>
                Hello! I am senior at Franklin W. Olin College of Engineering, majoring in Electrical and Computer Engineering. I was raised in Honolulu, Hawaii. I was first introduced to software and engineering when I joined my high school's robotics team, and have been passionate about them since.
            </p>
        </div>
      </div>
    );
  }
}

export default About;
