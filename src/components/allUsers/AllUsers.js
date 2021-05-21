import React from 'react';
import './allUsers.css'
import { getAllUsers, follow } from '../../api';
import { NavLink } from "react-router-dom";


class AllUsers extends React.Component {
  state = {
    users: []
  }

  handleFollowBtn = async () => {
    await follow(this.state._id)
  }

  AllUsersSetState = async () => {
    const response = await getAllUsers();
    this.setState({
      users: response.data,
    })
  }

  async componentDidMount() {
    const response = await getAllUsers();
    this.setState({
      users: response.data,
    })
  }

  render() {
    return (
      <div className="allUsers">
          {this.state.users.map((user) => {
            return (
              <div className="allUsersWrapper">
                <div className="allUsersCover">
                  <img className="allUsersCoverImg" alt="" src={user.coverPicture} />
                  <img className="allUsersUserImg" alt="" src={user.profilePicture} />
                </div>
                <div className="allUsersInfo">
                  <li className="allUsersLi" key={user._id}>
                    <NavLink className="allUsersLink" exact to={`/profile/${user._id}`}>{user.username}</NavLink>
                    &nbsp;
                  </li>
                  <button className="allUsersFollowBtn">Follow</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default AllUsers;
