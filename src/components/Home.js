import React, { Component } from "react";
import Registration from "./auth/Registration";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
  }

  handleSuccessfullAuth(data) {
    // TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Wellcome to sample auth using session</h1>
        <h1>This is page home</h1>
        <br />
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
        <br />
        <h2>Status: {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}
