import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div>
        <form className="NewPost" onSubmit={this.props.submission} style={{marginLeft:"50%", marginRight:"50%"}}>
          <input
            type="text"
            placeholder="title"
            className="postTitle"
            onChange={this.props.titleSet}
          />
          <textarea
            rows="14"
            placeholder="We're BREAD-y for your message"
            onChange={this.props.contentSet}
          />
          <input type="submit" value="Submit" />
        </form>
        </div>
    );
  }
}


export default NewPost;
