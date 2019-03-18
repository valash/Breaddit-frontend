import React, { Component } from "react";

class Homepage extends Component {
  //componentDidMount may need to go here
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        {/* <p> home page yall! </p> */}
      </div>
    );
  }
}

export default Homepage;
