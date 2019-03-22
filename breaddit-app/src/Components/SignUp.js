import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="card" style={{ border: "none" }}>
        <div className="card-body">
          <form
            style={{
              height: "0",
              fontSize: "40px",
              display: "grid"
            }}
          >
            <p
              className="h4 text-center py-4"
              style={{
                fontSize: "-webkit-xx-large",
                marginTop: "10%"
              }}
            >
              SIGN UP
            </p>
            <div className="email" style={{ margin: "auto" }}>
              <label
                for="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                <input
                  type="text"
                  placeholder="email"
                  className="form-control"
                />
              </label>
            </div>
            <div className="password" style={{ margin: "auto" }}>
              <label
                for="defaultFormCardPasswordEx"
                className="grey-text font-weight-heavy"
              >
                <input
                  type="text"
                  placeholder="password"
                  className="form-control"
                />
              </label>
            </div>
            <div class="text-center py-4 mt-3">
              <button className="btn btn-outline-purple" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
