import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Post from "./Components/Post";
import HomePage from "./Components/Homepage";
import NewPost from "./Components/NewPost";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      content: " "
    };
    this.fromForm = this.fromForm.bind(this);
    this.submission = this.submission.bind(this);
    this.fromFormCont = this.fromFormCont.bind(this);
  }
  getData() {
    //fetch data goes here
  }
  fromForm(event) {
    this.setState({ title: event.target.value });
  }
  fromFormCont(event) {
    this.setState({ content: event.target.value });
  }
  submission(event) {
    alert("your post is called " + this.state.title);
    alert("This is your post! " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="sidebar">
            <nav class="sidebar-nav">
              <ul class="nav" style={{
                position: "fixed",
                top: "0px",
                bottom: "0px",
                left: "0px",
                backgroundColor:"grey"
                }}>
                <li class="nav-title">breaddit</li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="nav-icon cui-speedometer"></i> Home
        </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="nav-icon cui-speedometer"></i>New Toast
          <span class="badge badge-primary">NEW</span>
                  </a>
                </li>
                <li class="nav-item nav-dropdown">
                  <a class="nav-link nav-dropdown-toggle" href="/">
                    <i class="nav-icon cui-puzzle"></i> Nav dropdown
        </a>
                </li>
              </ul>
            </nav>
            <button class="sidebar-minimizer brand-minimizer" type="button"></button>
          </div>
        </header>
        <Route
          path="/"
          exact
          render={props => (
            <HomePage title={this.state.title} content={this.state.content} />
          )}
        />
        <Route
          path="/post/:name"
          render={props => (
            <Post title={this.state.title} content={this.state.content} />
          )}
        />
        <Route
          path="/create"
          render={props => (
            <NewPost
              fromForm={this.fromForm}
              fromFormCont={this.fromFormCont}
              submission={this.submission}
              title={this.state.title}
              content={this.state.content}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
