import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <div>
        <form className="NewPost" onSubmit={this.props.submission}>
          <input
            type="text"
            className="postTitle"
            onChange={this.props.titleSet}
            value={this.props.title}
          />
          <textarea
            cols="70"
            rows="25"
            placeholder="We're BREAD-y for your message"
            onChange={this.props.contentSet}
            value={this.props.content}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;
