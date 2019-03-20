import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Homepage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="titleList" key={posts.id}>
        <h3>
          {posts.map(post => (
            <Link to={"/post/" + post.title}>
              <div key={post.id}>{post.title}</div>
            </Link>
          ))}
        </h3>
        {/* look up how to put post previews */}
      </div>
    );
  }
}

export default Homepage;
