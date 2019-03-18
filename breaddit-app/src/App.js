import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Post from './Components/Post';
import HomePage from './Components/Homepage';
import NewPost from './Components/NewPost';
import './App.css';
import {Nav} from 'react-bootstrap'




class App extends Component {
  /*
state and shit goes here
  */
  render() {
    return (
      <div className="App" >
        <div className="App-header">
          <div class="navbar">
            <a class="navbar-brand" href="/">BREADDIT</a>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/create">Create New Toast</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Routes">
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:name" component={Post}/>
        <Route path="/create" component={NewPost}/>
     
        </div>
      </div>
    );
  }
}
export default App;
