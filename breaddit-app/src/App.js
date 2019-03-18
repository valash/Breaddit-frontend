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
          <div className="navbar">
              <ul className="nav">
                <li className="nav-title" style={{ fontSize: "45px", justifyItems:"space-around"}}>breaddit</li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="nav-icon cui-speedometer"></i> Home
        </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">
                    <i className="nav-icon cui-speedometer"></i>New Toast
                  </a>
                </li>
              </ul>
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
