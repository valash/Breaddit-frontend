import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card" style={{borderRadius:"9px", border: "1px solid black"}}>
        <div className="card-header bg-transparent border-success">HEADER</div>
        <div className="card-body text-success">

          <h5 className="card-title">{this.props.title} </h5>
          <p className="card-text">{this.props.content}</p>
      <div className="singlePost" key={posts.id}>
        {/* {posts.map(post => (
          <div key={posts.id}>{post.body}</div>
        ))} */}
        {/*how can I get data from the form to render here????? */}
        <h2>{this.props.title} </h2>
        <p>{this.props.content}</p>
        <Comment />
      </div>
      <div className="card-footer ">Burn it  Butter It</div>
      </div>
      </div>
    );
  }
}

export default Post;
