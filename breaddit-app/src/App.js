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
      title: "title",
      content: "content"
    };
    this.fromForm = this.fromForm.bind(this);
    this.submission = this.submission.bind(this);
  }
  getData() {
    //fetch data goes here
  }
  fromForm(event) {
    this.setState({ title: event.target.title });
  }
  submission(event) {
    alert("your post is called " + this.state.title);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Breaddit</h1>
          <h2>WELCOME Bread LOVERS</h2>
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
            <NewPost fromForm={this.fromForm} submission={this.submission} />
          )}
        />
      </div>
    );
  }
}
export default App;
