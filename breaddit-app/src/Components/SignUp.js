import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <form className="SignUp">
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

export default SignUp;
