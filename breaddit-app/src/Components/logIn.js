import React, { Component } from "react";

class logIn extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form style={{ height: "0", fontSize: "40px", display: "grid" }}>

            <p className="h4 text-center py-4" style={{ marginTop: "12%", fontSize: "-webkit-xxx-large" }}>LOG IN</p>
            <div className="whole-signup" style={{ fontSize: "-webkit-xxx-large" }}>
              <div className="email">
                <label for="defaultFormCardEmailEx" className="grey-text font-weight-light">
                  <input type="text" placeholder="email" className="form-control" />
                </label>
              </div>
              <div className="password">
                <label for="defaultFormCardPasswordEx" className="grey-text font-weight-heavy">
                  <input type="text" placeholder="password" className="form-control" />
                </label>
              </div>
              <div class="text-center py-4 mt-3">
                <button className="btn btn-outline-purple" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default logIn;
