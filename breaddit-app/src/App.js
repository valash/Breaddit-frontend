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
    this.titleSet = this.titleSet.bind(this);
    this.submission = this.submission.bind(this);
    this.contentSet = this.contentSet.bind(this);
  }
  getData() {
    //fetch data goes here
  }
  titleSet(event) {
    this.setState({ title: event.target.value });
  }
  contentSet(event) {
    this.setState({ content: event.target.value });
  }
  submission(event) {
    console.log("your post is called " + this.state.title);
    console.log("This is your post! " + this.state.content);
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
                  <a class="nav-link" href="/create">
                    <i class="nav-icon cui-speedometer"></i>New Toast
          <span class="badge badge-primary">NEW</span>
                  </a>
                </li>
              </ul>
            </nav>
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
              titleSet={this.titleSet}
              contentSet={this.contentSet}
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
