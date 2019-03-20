import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="singlePost" key={posts.id}>
        {/*how can I get data from the form to render here????? */}
        <h2>{this.props.title} </h2>
        <p>{this.props.body}</p>

        <Comment
          comments={this.props.comments}
          commentCreate={this.props.commentCreate}
        />
      </div>
    );
  }
}

export default Post;
