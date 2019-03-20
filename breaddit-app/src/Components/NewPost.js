import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form style={{ height: "0" }} onSubmit={this.props.submission}>
            <label
              for="NewPost"
              className="grey-text font-weight-light"
              style={{ display: "block" }}
            >
              Title
            </label>
            <input
              type="text"
              placeholder="title"
              name={this.props.title}
              onChange={this.props.titleSet}
              style={{ margin: "auto", width: "500px" }}
            />
            <label
              for="postBody"
              className="grey-text font-weight-light"
              style={{ display: "block" }}
            >
              Body:
            </label>
            <textarea
              rows="30"
              placeholder="We're BREAD-y for your message"
              name={this.props.content}
              onChange={this.props.contentSet}
              style={{
                margin: "80px 541.441px 0px 566.128px;",
                display: "block;"
              }}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
