import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home'
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import { loggedin } from "./api";
import PrivateRoute from './components/PrivateRoute'
import ListUsers from './pages/listUsers/ListUsers'


class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  async componentDidMount() {
    if (this.state.loggedInUser === null) {
      const response = await loggedin();
      if (response.data._id) {
        this.setCurrentUser(response.data);
      }
    }
  }

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser : user,
    });
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div>
        <Navbar
          loggedInUser={loggedInUser}
          setCurrentUser={this.setCurrentUser}
        />
        <Switch>
          <PrivateRoute 
            exact
            path={["/", "/posts"]}
            render={(props) => 
            <Home {...props} loggedInUser={loggedInUser}/>
            }
          />
          <PrivateRoute 
            exact
            path="/profile/:id"
            render= {(props) =>
            <Profile {...props} loggedInUser={loggedInUser}/>
            }
          />
            <PrivateRoute 
            exact
            path="/listusers"
            render= {(props) =>
            <ListUsers {...props} loggedInUser={loggedInUser}/>
            }
          />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/login"
            render={(props) => {
              return <Login {...props} setCurrentUser={this.setCurrentUser} />;
            }}
          />
          <Route
            exact
            path="/login-google"
            render={() => {
              window.location.href = `${process.env.REACT_APP_FINAL_PROJECT_API}/api/auth/google`;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
