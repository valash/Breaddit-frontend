import React, { Component } from "react";

class logIn extends Component {
  render() {
    return (
      <div>
        <form className="logIn">
          <label>
            Email:
            <input type="email" placeholder="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
        </form>
      </div>
    );
  }
}

export default logIn;
