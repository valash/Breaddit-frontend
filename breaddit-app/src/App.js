import React, { Component } from 'react';
import { Route } from "react-router-dom"
import './App.css';
import Post from './Components/Post';
import HomePage from './Components/Homepage';
import NewPost from './Components/NewPost';


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
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:name" component={Post}/>
        <Route path="/create" component={NewPost}/>
      </div>
    );
  }
}
export default App;
