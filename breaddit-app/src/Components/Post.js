import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card text-center" key={posts.id} style={{width:"50%", margin:"auto", marginTop:"10%"}}>
        {/* <div class="card-header">{this.props.title}</div> */}
        <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.content}</p>
           <Comment />
          <div className="card-footer text-muted" style={{ textAlign: "center" }}><h4>Burn it Butter it</h4></div>
          </div>

          
</div>
    );
  }
}

export default Post;





//  <img src={require('../images/logo.png')} alt="reddit bread" style={{ height: "40px" }} ></img> */}

// <div class="card bg-light mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Light card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
//  */

// style = {{ marginLeft: "30%", marginTop: "15%" }}>

//  <img className="card-top" src={require('../images/bread.jpg')} alt="Card cap" style={{height:"301px"}}/>  

