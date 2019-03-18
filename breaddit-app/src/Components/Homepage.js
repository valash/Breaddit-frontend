import React, { Component } from "react";

class Homepage extends Component {
  //componentDidMount may need to go here
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        {/* look up how to put post previews */}
      </div>
    );
  }
}

export default Homepage;
