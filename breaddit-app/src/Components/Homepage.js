import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  //componentDidMount may need to go here
  render() {
    return (
      <div>
        <Link to="/post/:name">
          <h3>{this.props.title}</h3>
        </Link>
        {/* look up how to put post previews */}
      </div>
    );
  }
}

export default Homepage;
