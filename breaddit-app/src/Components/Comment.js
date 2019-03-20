import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.commentCreate = this.commentCreate.bind(this);
  }
  commentCreate(event) {
    this.setState({ comments: event.target.value });
  }
  render() {
    return (
      <div>
        <h4>I am from the Comment Component!</h4>
        <form className="makeComment" onSubmit={this.state.submission}>
          <textarea
            rows="3"
            cols="50"
            placeholder="comment"
            maxLength="125"
            onChange={this.state.commentCreate}
            name={this.state.comments}
          />
          <input type="submit" value="Comment!" />
        </form>
        <p>New comments should appear here</p>
        {this.state.comments}
      </div>
    );
  }
}

export default Comment;
