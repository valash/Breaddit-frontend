import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div>
        <h4>I am from the Comment Component!</h4>
        <form className="makeComment" onSubmit={this.props.submission}>
          <textarea
            rows="3"
            cols="50"
            placeholder="comment"
            maxLength="125"
            name={this.props.comments}
            onChange={this.props.commentCreate}
          />
          <input type="submit" value="Comment!" />
        </form>
        <p>New comments should appear here</p>
        {this.props.comments}
      </div>
    );
  }
}

export default Comment;
