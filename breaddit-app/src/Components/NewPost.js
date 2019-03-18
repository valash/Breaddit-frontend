import React, { Component } from "react";

class NewPost extends Component {
  render() {
    return (
        <form className="NewPost" onSubmit={this.props.fromForm}>
        <input class="form-control form-control-lg" type="text" className="postTitle" placeholder= "title" onChangeCapture={this.props.fromForm} />
          <textarea class="form-control form-control-lg" cols="70" rows="25" placeholder="We're BREAD-y for your message" onChangeCapture={this.props.fromFormCont}/>
          <input type="submit" value="Submit" onClick={this.props.submission} />
        </form>
    );
  }
}


export default NewPost;
