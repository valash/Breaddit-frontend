import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Post from "./Components/Post";
import HomePage from "./Components/Homepage";
import NewPost from "./Components/NewPost";
import SignUp from "./Components/SignUp";
import logIn from "./Components/logIn";
import About from "./Components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      body: " ",
      posts: []
    };
    this.titleSet = this.titleSet.bind(this);
    this.submission = this.submission.bind(this);
    this.bodySet = this.bodySet.bind(this);
  }

  titleSet(event) {
    this.setState({ title: event.target.value });
  }
  bodySet(event) {
    this.setState({ body: event.target.value });
  }

  submission(event) {
    event.preventDefault();
    console.log("your post is called " + this.state.title);
    console.log("This is your post! " + this.state.body);
  }
  componentDidMount() {
    fetch("https://breaddit123.herokuapp.com/breaddit")
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav
            className="navbar"
            style={{
              background: "transparent"
            }}
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                  <img
                    src={require("./images/logo.png")}
                    alt="reddit bread"
                    style={{
                      height: "40px"
                    }}
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create">New Toast</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signup">
                    <span className="glyphicon glyphicon-user" /> Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span className="glyphicon glyphicon-log-in" /> Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route
          path="/"
          exact
          render={props => (
            <HomePage
              title={this.state.title}
              body={this.state.body}
              posts={this.state.posts}
            />
          )}
        />
        <Route exact path="/login" component={logIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route
          exact
          path="/create"
          render={props => (
            <NewPost
              titleSet={this.titleSet}
              bodySet={this.bodySet}
              submission={this.submission}
              title={this.state.title}
              body={this.state.body}
            />
          )}
        />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/post/:name"
          render={props => (
            <Post
              {...props}
              comments={this.state.comments}
              commentCreate={this.state.commentCreate}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

//localhost://3001/breaddit/:postId
//          :/post/Chase
