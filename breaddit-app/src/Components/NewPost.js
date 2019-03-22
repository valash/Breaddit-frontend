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
        <div
          className="card"
          style={{
            background: "transparent",
            border: "none"
          }}
        >
          <div
            className="card-body"
            style={{
              background: "transparent",
              border: "0px"
            }}
          >
            <form
              style={{
                height: "0",
                textAlign: "center"
              }}
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
              />
              <input
                type="text"
                aria-label="Large"
                placeholder="Rye hello there"
                name={this.props.title}
                onChange={this.titleSet}
                style={{
                  margin: "auto",
                  width: "600px",
                  fontSize: "30px",
                  borderRadius: "5px",
                  border: "none",
                  boxShadow:
                    "0 4px 34px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
                  textAlign: "center"
                }}
              />
              <label
                for="postBody"
                className="grey-text font-weight-light"
                style={{
                  display: "block",
                  fontSize: "30px",
                  borderRadius: "5px"
                }}
              />
              <textarea
                rows="30"
                placeholder="We're BREAD-y for your message"
                name={this.props.body}
                onChange={this.bodySet}
                style={{
                  margin: "80px 541.441px 0px 566.128px;",
                  display: "block;",
                  fontSize: "55px",
                  width: "600px",
                  height: "21rem",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  border: "none",
                  textAlign: "center",
                  margin: "12px"
                }}
              />
              <div
                className="submit"
                style={{
                  fontSize: "x-large"
                }}
              >
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
