import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About.js';
import Experiences from './Experiences.js';
import Projects from './Projects.js';
import Interests from './Interests.js';

class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={About}/>
            <Route exact path='/about' component={About}/>
            <Route path='/experience' component={Experiences}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/interests' component={Interests}/>
        </Switch>
    );
  }
}

export default Routes;
