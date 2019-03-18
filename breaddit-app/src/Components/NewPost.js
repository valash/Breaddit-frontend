import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <div>
        <form className="NewPost" onSubmit={this.fromForm}>
          <input
            type="text"
            className="postTitle"
            value={this.props.title}
            onChange={this.submission}
          />
          <textarea
            cols="70"
            rows="25"
            placeholder="We're BREAD-y for your message"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;
