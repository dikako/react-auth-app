import axios from "axios";
import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registartionError: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfullAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            for-test="email"
            placeholder="input email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            for-test="password"
            placeholder="input password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            for-test="password_confirmation"
            placeholder="password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit" for-test="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
