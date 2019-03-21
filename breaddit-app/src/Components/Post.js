import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  render() {
    return (
      <div
        className="card"
        style={{ borderRadius: "9px", border: "1px solid black" }}
      >
        <div className="card-header bg-transparent border-success">HEADER</div>
        <div className="card-body text-success">
          <h5 className="card-title">{this.props.title} </h5>
          <p className="card-text">{this.props.body}</p>
          <div className="singlePost">
            {/*how can I get data from the form to render here????? */}
            <h2>{this.props.title} </h2>
            <p>{this.props.body}</p>

            <Comment
              comments={this.props.comments}
              commentCreate={this.props.commentCreate}
            />
          </div>
          <div className="card-footer ">Burn it Butter It</div>
        </div>
      </div>
    );
  }
}

export default Post;
