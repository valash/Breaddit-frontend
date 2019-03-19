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
  signIn(event) {
    event.preventDefault();
    //axios
    // email: this.state.email;
    // password: this.state.password;
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
          <div className="sidebar">
            <nav className="sidebar-nav">
              <ul
                className="nav"
                style={{
                  position: "fixed",
                  top: "0px",
                  bottom: "0px",
                  left: "0px",
                  backgroundColor: "grey"
                }}
              >
                <li className="nav-title">breaddit</li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="nav-icon cui-speedometer" /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">
                    <i className="nav-icon cui-speedometer" />
                    New Toast
                    <span className="badge badge-primary">NEW</span>
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
            <HomePage
              {...props}
              title={this.state.title}
              content={this.state.content}
            />
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
