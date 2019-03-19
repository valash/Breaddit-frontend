import auth0 from "auth0-js";

export default class auth {
  auth0 = new auth0.WebAuth({
    domain: "dev--j4d2w04.auth0.com",
    clientID: "4XwTROWnED52dNlCN5stXizSOYRzO9qR",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });
  login() {
    this.auth0.authorize();
  }
}
