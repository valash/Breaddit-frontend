import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";


class Homepage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="card-body" style={{textAlign:"center"}} > 
      <h1 style={{marginTop:"30p"}}>BAKED BREAD</h1>
        <h3>
          {posts.map(post => (
            <Link to={"/post/" + post.title} >
              <div className="card-body" style={{ border: "1px solid black", borderRadius: "30px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19", height: "150px", textAlign: "center", width: "60%", marginTop: "40px", marginLeft: "20%", backgroundColor:" rgba(255, 255, 255, 0.4)", paddingTop:"50px", fontSize:'70px'}} key={post.id}><div className="card-body">{post.title}</div>
              </div>
            </Link>
           
          ))}
        </h3>
        </div>
    );
       }
       
  
    }


    

export default Homepage;
