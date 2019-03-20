import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Homepage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Link to="/post/:title">
          <h3>
            {posts.map(post => (
              <div key={post.id}>{post.title}</div>
            ))}
          </h3>
          {/* for each??????? */}
        </Link>
        {/* look up how to put post previews */}
      </div>
    );
  }
}

export default Homepage;
