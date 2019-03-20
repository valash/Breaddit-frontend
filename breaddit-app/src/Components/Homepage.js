import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Homepage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card-body" style={{textAlign:"center"}} > 
        <h3>
          {posts.map(post => (
            <Link to={"/post/" + post.title} >
              <div style={{ border: "5px solid black", margin:"20%", borderRadius:"5px" }} key={post.id}>{post.title}</div>
            </Link>
          ))}
        </h3>
        {/* look up how to put post previews */}
      </div>
    );
       }
  
    }


    

export default Homepage;
