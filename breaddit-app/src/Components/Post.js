import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title} </h2>
        <p>{this.props.content}</p>
        Toast
        <Comment />
      </div>
    );
  }
}

export default Post;
