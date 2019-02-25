import React, { Component } from 'react';
import '../App.css';
import HogContainer from './HogContainer'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer />
      </div>
    )
  }
}

export default App;
