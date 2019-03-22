import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div
        className="card text-center"
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "10%"
        }}
      >
        {this.props.title}
        {this.props.body}
        <div className="card-body">
          <Comment
            comments={this.props.comments}
            commentCreate={this.props.commentCreate}
          />
          <div
            className="card-footer text-muted"
            style={{
              textAlign: "center",
              background: "none",
              borderRadius: "none",
              height: "55px"
            }}
          >
            <p className="pull-left">
              <span
                className="glyphicon glyphicon-thumbs-down"
                style={{
                  margin: "9px"
                }}
              />
              Burn It
            </p>
            <p className="pull-right">
              <span
                className="glyphicon glyphicon-thumbs-up"
                style={{
                  margin: "9px"
                }}
              />
              Butter It
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
