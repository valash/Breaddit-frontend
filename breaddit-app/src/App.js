import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Post from "./Components/Post";
// import HomePage from "./Components/Homepage";
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
    const { posts } = this.state;
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
        <div className="card-body" style={{ textAlign: "center" }}>
          <h1
            style={{
              marginTop: "30p"
            }}
          >
            BAKED BREAD
          </h1>
          <h3>
            {posts.map(post => (
              // in backend the route is Breaddit/post.id
              <Link to={"/post/" + post.title}>
                <div
                  className="card-body"
                  style={{
                    borderRadius: "1px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
                    textAlign: "center",
                    width: "60%",
                    marginTop: "40px",
                    marginLeft: "20%",
                    backgroundColor: " rgba(255, 255, 255, 0.6)"
                  }}
                  key={post}
                >
                  <div
                    className="card-header"
                    style={{
                      textAlign: "-webkit-left"
                    }}
                  >
                    {post.title}
                  </div>
                  <div
                    className="card-body"
                    style={{
                      height: "50px",
                      margin: "12px"
                    }}
                  >
                    {post.body}
                  </div>
                </div>
              </Link>
            ))}
          </h3>
        </div>
        );
        {/* <Route
          path="/"
          exact
          render={props => (
            <HomePage
              title={this.state.title}
              body={this.state.body}
              posts={this.state.posts}
            />
          )}
		/> */}
        <Switch>
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
        </Switch>
      </div>
    );
  }
}

export default App;

//localhost://3001/breaddit/:postId
//          :/post/Chase
