import React from "react";
import { NavLink } from "react-router-dom";
import { login } from "../../api";
import './login.css'

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    const { setCurrentUser, history } = this.props;
    event.preventDefault();
    const { username, password } = this.state;
    const response = await login(username, password);
    setCurrentUser(response.data);
    history.push("/");
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Butler</h3>
                <span className="loginDesc">
                Connect with people and find quick services on Butler
                </span>
            </div>
            <div className="loginRight">
              <div>
                <form className="loginbox" onSubmit={this.handleFormSubmit}>
                  <input
                    className="loginInput"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <input
                    className="loginInput"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <button className="loginButton">Login</button>
                  <p>
                    Don't have an account?
                    <NavLink to="/signup"> Signup</NavLink>
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

export default Login;
