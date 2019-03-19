import React, { Component } from "react";

class logInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;
    if (!(username && password)) {
      return;
    }
  }
  render() {
    return <div />;
  }
}

export default logInPage;
