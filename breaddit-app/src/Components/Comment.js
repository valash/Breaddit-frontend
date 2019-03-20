import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.commentCreate = this.commentCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  commentCreate(event) {
    this.setState({ comments: event.target.value });
    event.preventDefault();
  }
  handleSubmit(event) {
    console.log(event.target.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h4>I am from the Comment Component!</h4>
        <form className="makeComment" onSubmit={this.handleSubmit}>
          <textarea
            rows="3"
            cols="50"
            placeholder="comment"
            maxLength="125"
            onChange={this.commentCreate}
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
