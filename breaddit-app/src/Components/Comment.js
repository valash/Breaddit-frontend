import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.commentCreate = this.commentCreate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  commentCreate(event) {
    event.preventDefault();
    this.setState({ comments: [event.target.value] });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ comments: [] });
    console.log(this.state.comments);
  }
  addComment = () => {
    this.setState(() => {
      this.setState({
        comments: [...this.state.comments, this.state.comments]
      });
      // return together;
    });
  };
  render() {
    return (
      <div>
        {/* Need to find a way to push input into this array i just created so that multiple comments can appear on the page */}
        <h4>I am from the Comment Component!</h4>
        <form className="makeComment" onSubmit={this.handleSubmit}>
          <textarea
            rows="3"
            cols="50"
            placeholder="comment"
            maxLength="125"
            onChange={this.commentCreate}
            value={this.state.comments}
          />
          <input type="submit" value="Comment!" onClick={this.addComment} />
        </form>
        <p>New comments should appear here:</p>

        {this.state.comments}
      </div>
    );
  }
}

export default Comment;
