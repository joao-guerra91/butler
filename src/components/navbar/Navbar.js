import React from "react";
import { logout } from "../../api";
import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'


function Navbar({ loggedInUser, setCurrentUser }) {
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return(
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Butler</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search  className="searchIcon"/>
          <input placeholder="Search for services..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarlinks">
          <span className="navbarLink">Login</span>
          <span className="navbarLink">Signup</span>
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
        <img src="/images/kate.jpg" className="profilePic" alt=""/>
      </div>
    </div>
  )
}

export default Navbar;



// return loggedInUser ? (
//   <>
//     <p>Welcome {loggedInUser.username}</p>
//     <ul>
//       <li>
//         <NavLink to="/">
//           <button onClick={logoutUser}>Logout</button>
//         </NavLink>
//       </li>
//     </ul>
//   </>
// ) : (
//   <ul>
//     <li>
//       <NavLink activeStyle={{ color: "red" }} exact to="/signup">
//         Signup
//       </NavLink>
//     </li>
//     <li>
//       <NavLink activeStyle={{ color: "red" }} exact to="/login">
//         Login
//       </NavLink>
//     </li>
//     <li>
//       <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
//         Login with Google
//       </NavLink>
//     </li>
//   </ul>
// );
