import React, { Component } from "react";
import "./NewPost.css";

class NewPost extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
        <form style={{height:"0"}}>
        <label for="NewPost" onSubmit={this.props.submission}className="grey-text font-weight-light" style={{display:"block"}}> Title</label>
          <input type="text" placeholder="title"  onChange={this.props.titleSet} style={{margin:"auto", width:"500px"}}/>
              <label for="postBody" className="grey-text font-weight-light" onSubmit={this.props.submission}style={{display:"block"}}>Body:</label>
          <textarea
            rows="30"
            placeholder="We're BREAD-y for your message"
            onChange={this.props.contentSet}
              style={{ margin:"80px 541.441px 0px 566.128px;", display:"block;"
               }}
          />       
          <form>
            <input type="submit" value="Submit" />
          </form>
            </form>
          
        </div>
      </div>
    );
  }
}


export default NewPost;
