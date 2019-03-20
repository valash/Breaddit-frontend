import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/Breaddit")
      .then(result => {
        return result.json();
      })
      .then(post => {
        this.setState({ post: post.title });
      });
  }
  render() {
    return (
      <div>
        <Link to="/post/:name">
          <h3>
            {this.state.posts.map(post => (
              <div key={post.id}>{post.title}</div>
            ))}
          </h3>
        </Link>
        {/* look up how to put post previews */}
      </div>
    );
  }
}

export default Homepage;
