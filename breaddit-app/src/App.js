import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Post from './Components/Post';
import HomePage from './Components/Homepage';
import NewPost from './Components/NewPost';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap'




class App extends Component {
  /*
state and shit goes here
  */
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">BREADDIT</Nav.Link>
          <br />
          <Nav.Link href="/create">CREATE A NEW TOAST</Nav.Link>
            <br />
            <Nav.Link href="/about">About Us</Nav.Link>
            <br />
            <Nav.Link href="/contact">Contact</Nav.Link>

        </Nav>
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
