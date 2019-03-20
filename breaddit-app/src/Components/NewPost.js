import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form style={{ height: "0", textAlign: "center"}} onSubmit={this.props.submission}>
            <label
              for="NewPost"
              className="grey-text font-weight-light"
              style={{ display: "block", fontSize:"x-large", marginTop: "82px" }}
            >
              Title
            </label>
            <input
              type="text"
              placeholder="title"
              name={this.props.title}
              onChange={this.props.titleSet}
              style={{ margin: "auto", width: "500px", fontSize: "-webkit-xxx-large", borderRadius: "10px", border: "none", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19" }}
          />
            <label
              for="postBody"
              className="grey-text font-weight-light"
              style={{ display: "block", fontSize:"x-large" }}
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
                display: "block;", fontSize: "80px", width: "625px", height: "669px", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"
              }}
            />
    <div className="submit" style={{fontSize:"x-large"}}>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPost;
