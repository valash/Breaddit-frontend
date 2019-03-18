import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Post from './Components/Post';
import HomePage from './Components/Homepage';
import NewPost from './Components/NewPost';
import './App.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'




class App extends Component {
  /*
state and shit goes here
  */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">BREADDIT</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                  <NavDropdown.Item href="/create" >New Post</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:name" component={Post}/>
        <Route path="/create" component={NewPost}/>
      </div>
    );
  }
}
export default App;
