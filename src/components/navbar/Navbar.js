import React from "react";
import { logout } from "../../api";
import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { NavLink } from "react-router-dom";



function Navbar({ loggedInUser, setCurrentUser, props }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  console.log('props:', loggedInUser)
  return loggedInUser ? ( 
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="completeLogo">
          <NavLink className="logo" to="/">Butler</NavLink>
          <img className="butlerLogo" src="/images/butlerLogo.png" alt=""/>
        </div>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search  className="searchIcon"/>
          <input placeholder="Search for services..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarlinks">
          <NavLink
          to="/login">
          <button className="logoutButton" onClick={logoutUser}>Logout</button>
          </NavLink>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person/>
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat/>
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications/>
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <NavLink className="profilePic" to={`/profile/${loggedInUser._id}`}><img src={loggedInUser.profilePicture} className="profilePic" alt=""/></NavLink>
      </div>
    </div>
  ) : (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="completeLogo">
          <NavLink className="logo" to="/">Butler</NavLink>
          <img className="butlerLogo" src="/images/butlerLogo.png" alt=""/>
        </div>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search  className="searchIcon"/>
          <input placeholder="Search for services..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarlinks">
          <NavLink className="navbarLink" to="/login"> Login</NavLink>
          <NavLink className="navbarLink" to="/Signup"> Signup</NavLink>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person/>
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat/>
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications/>
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <NavLink className="profilePic" to="/profile"><img src="/images/blank-profile-picture.png" className="profilePic" alt=""/></NavLink>
      </div>
    </div>
  )
}

export default Navbar;
