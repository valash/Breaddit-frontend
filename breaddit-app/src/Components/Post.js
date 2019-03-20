import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card border-success mb-3" style= {{maxWidth: "18rem"}}>
        <div className="card-header bg-transparent border-success">Header</div>
        <div className="card-body text-success">

          <h5 className="card-title">{this.props.title} </h5>
          <p class="card-text">{this.props.content}</p>
      <div className="singlePost" key={posts.id}>
        {/* {posts.map(post => (
          <div key={posts.id}>{post.body}</div>
        ))} */}
        {/*how can I get data from the form to render here????? */}
        <h2>{this.props.title} </h2>
        <p>{this.props.content}</p>
        <Comment />
      </div>
      <div className="card-footer bg-transparent border-success">Footer</div>
      </div>
      </div>
    );
  }
}

export default Post;
