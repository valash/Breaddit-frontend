import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.titleSet = this.titleSet.bind(this);
    this.bodySet = this.bodySet.bind(this);
    this.submission = this.submission.bind(this);
  }
  titleSet(event) {
    this.setState({ title: event.target.value });
  }
  bodySet(event) {
    this.setState({ body: event.target.value });
  }
  submission(event) {
    event.preventDefault();
    console.log("your post is called " + this.state.title);
    console.log("This is your post! " + this.state.body);
    console.log("here are the comments: " + this.state.comments);
    return this.state.title && this.state.body;
  }
  render() {
    return (
      <div className="newPost">
        <div className="card">
          <div className="card-body">
            <form
              style={{ height: "0", textAlign: "center" }}
              onSubmit={this.submission}
            >
              <label
                for="NewPost"
                className="grey-text font-weight-light"
                style={{
                  display: "block",
                  fontSize: "x-large",
                  marginTop: "82px"
                }}
              >
                Title
              </label>
              <input
                type="text"
                placeholder="title"
                name={this.props.title}
                onChange={this.titleSet}
                style={{
                  margin: "auto",
                  width: "500px",
                  fontSize: "-webkit-xxx-large",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"
                }}
              />
              <label
                for="postBody"
                className="grey-text font-weight-light"
                style={{ display: "block", fontSize: "x-large" }}
              >
                Post:
              </label>
              <textarea
                rows="30"
                placeholder="We're BREAD-y for your message"
                name={this.props.body}
                onChange={this.bodySet}
                style={{
                  margin: "80px 541.441px 0px 566.128px;",
                  display: "block;",
                  fontSize: "80px",
                  width: "625px",
                  height: "669px",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"
                }}
              />
              <div className="submit" style={{ fontSize: "x-large" }}>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
