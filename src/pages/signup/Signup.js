import React from "react";
import { NavLink } from "react-router-dom";
import { signup } from "../../api";
import './signup.css'

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    await signup(username, email, password);
    this.props.history.push("/");
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <>
      <div className="signup">
        <div className="signupWrapper">
          <div className="signupLeft">
            <h3 className="signupLogo">Butler</h3>
              <span className="signupDesc">
              Connect with people and find quick services on Butler
              </span>
          </div>
          <div className="signupRight">
            <div>
              <form className="signupbox" onSubmit={this.handleFormSubmit}>
                <input
                  className="signupInput"
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                  <input
                  className="signupInput"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  className="signupInput"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button className="signupButton">Sign Up</button>
                <p>
                  Already have an account?
                  <NavLink to="/login"> Login</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Signup;




