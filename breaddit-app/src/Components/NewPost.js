import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
      <div>
        <form className="NewPost" onSubmit={this.props.fromForm}>
          <input
            type="text"
            className="postTitle"
            onChangeCapture={this.props.fromForm}
          />
          <textarea
            cols="70"
            rows="25"
            placeholder="We're BREAD-y for your message"
          />
          <input type="submit" value="Submit" onClick={this.props.submission} />
        </form>
      </div>
    );
  }
}

export default NewPost;
