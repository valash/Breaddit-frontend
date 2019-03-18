import React, { Component } from 'react';
import { Route } from "react-router-dom"
import './App.css';
import Post from './Components/Post';
import HomePage from './Components/Homepage';


class App extends Component {
  /*
state and shit goes here
  */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Breaddit</h1>
          <h2>WELCOME Bread LOVERS</h2>
        </header>
        <Route path="/" exact render={HomePage} />
        <Route path="/bird/:name" render={Post}/>
        <Route path="/create" render={Post}/>
      </div>
    );
  }
}
export default App;
