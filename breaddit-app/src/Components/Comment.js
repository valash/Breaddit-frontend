import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div>
        <h4>I am from the Comment Component!</h4>
        <form className="makeComment">
          <textarea rows="3" cols="50" placeholder="comment" maxLength="125" />
          <input type="submit" value="Comment!" />
        </form>
        <p>New comments should appear here</p>
      </div>
    );
  }
}

export default Comment;
