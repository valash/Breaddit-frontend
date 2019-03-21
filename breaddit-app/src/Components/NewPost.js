import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div className="new-post" >
        <div className="card" style={{ background: "transparent", border:"0px" }} >
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
                aria-label="Large" 
              placeholder="title"
              name={this.props.title}
              onChange={this.props.titleSet}
              style={{ margin: "auto", width: "600px", fontSize: "-webkit-x-large", borderRadius: "5px", border: "none", opacity: "0.6", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19" }}
          />
            <label
              for="postBody"
              className="grey-text font-weight-light"
                style={{ display: "block", fontSize: "-webkit-x-large", borderRadius:"5px" }}
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
      </div>
      );
    }
  }
  
  export default NewPost;
