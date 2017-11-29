import React, { Component } from 'react';
import Menu from './Menu';
import Routes from './Routes';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
