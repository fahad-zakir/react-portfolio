import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile.js'
import Specialties from './components/Specialties.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Specialties />
      </div>
    );
  }
}

export default App;