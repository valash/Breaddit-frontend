import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  //i think i need to put something here so that stuff renders
  componentDidMount() {
    //create a setState method and pass props through here
  }
  render() {
    return (
      <div>
        <h2>{this.props.title} </h2>
        <p>{this.props.content}</p>
        <Comment />
      </div>
    );
  }
}

export default Post;
