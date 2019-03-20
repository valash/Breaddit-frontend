import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div>
        {/*how can I get data from the form to render here????? */}
        <h2>{this.props.title} </h2>
        <p>{this.props.content}</p>
        <Comment />
      </div>
    );
  }
}

export default Post;
