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
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Link to="/post/:name">
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
