import React, { Component } from "react";

class NewPost extends Component {
  //   componentDidUpdate() {
  //     console.log("The button was clicked!");
  //   }
  render() {
    return (
      <div>
        <form className="NewPost" onSubmit={this.props.submission}>
          <input
            type="text"
            className="postTitle"
            onChange={this.props.titleSet}
          />
          <textarea
            cols="70"
            rows="25"
            placeholder="We're BREAD-y for your message"
            onChange={this.props.contentSet}
          />
          <input type="submit" value="Submit" onClick />
        </form>
      </div>
    );
  }
}

export default NewPost;
