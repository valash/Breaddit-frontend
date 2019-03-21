import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Post from "./Components/Post";
import HomePage from "./Components/Homepage";
import NewPost from "./Components/NewPost";
import SignUp from "./Components/SignUp";
import logIn from "./Components/logIn";
import './images/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      content: " ",
      posts: []
    };
    this.titleSet = this.titleSet.bind(this);
    this.submission = this.submission.bind(this);
    this.contentSet = this.contentSet.bind(this);
  }
  componentDidMount() {
    //remember to pull from heroku in deployed version
    fetch("http://localhost:3001/Breaddit")
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }
  titleSet(event) {
    this.setState({ title: event.target.value });
  }
  contentSet(event) {
    this.setState({ content: event.target.value });
  }
  submission(event) {
    event.preventDefault();
    console.log("your post is called " + this.state.title);
    console.log("This is your post! " + this.state.content);
    return this.state.title && this.state.content;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar" style={{background:"transparent"}}>
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                </a>
                <img src={require('./images/logo.png')} alt="reddit bread" style={{height:"40px"}} ></img>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/create">New Toast</a>
                </li>
                <li>
                  <a href="/">About</a>
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
              content={this.state.content}
              posts={this.state.posts}
            />
          )}
        />
        <Route path="/login" component={logIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/post/:name"
          render={props => (
            <Post
              title={this.state.title}
              content={this.state.content}
              posts={this.state.posts}
            />
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

{/* 
        <div className="footer" style={{ position: "fixed", left: "0", bottom: "0", width: "100%", backgroundColor: "white", color: "black", textAlign: "center", lineHeight: "30px", fontSize: "xx-large" }} >Footer
        </div> */}
      </div>
    );
  }
}

export default App;

