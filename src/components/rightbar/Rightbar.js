import React from 'react';
import './rightbar.css'
import {ArrowForward, MoreVert} from '@material-ui/icons'
import { Dropdown } from 'react-bootstrap'
import { NavLink } from "react-router-dom";



function Rightbar (props) {
  const {profile} = props;

  const HomeRightbar = () => {
    return (
      <>
        <div className="whoToFollow">
          <ul className="whoToFollowUl">
            <li className="whoToFollowList">
              <span className="AddToFeedText">Add to your feed</span>
              <hr className="whoToFollowHr"/>
            </li>
            <li>
              <div className="whoToFollowListWrapper">
                <div>
                  <img className="whoToFollowImg" src="/images/Bill_Gates.jpg" alt=""/>
                  <span className="whoToFollowdName">Bill Gates</span>
                </div>
                <button className="rightbarFollowBtn">Follow</button>
              </div>
            <hr className="whoToFollowHr"/>
            </li>
            <li>
            <div className="whoToFollowListWrapper">
              <div>
                <img className="whoToFollowImg" src="/images/steve-jobs.jpg" alt=""/>
                <span className="whoToFollowdName">Steve Jobs</span>
              </div>
              <button className="rightbarFollowBtn">Follow</button>
            </div>
            <hr className="whoToFollowHr"/>
            </li>
            <li>
            <div className="whoToFollowListWrapper">
              <div>
                <img className="whoToFollowImg" src="/images/KenThompson.jpg" alt=""/>
                <span className="whoToFollowdName">Ken Thompson</span>
              </div>
              <button className="rightbarFollowBtn">Follow</button>
            </div>
            <hr className="whoToFollowHr"/>
            </li>
            <NavLink  to="/listusers"><button className="whoToFollowBtn">View all recommendations<ArrowForward/></button></NavLink>
          </ul>
        </div>
      </>
    )
  }

  const ProfileRightbar = (props) => {
    return(
      <>
        <div className="rightbarTitleWrapper">
          <h4 className="rightbarTitle">User Information:</h4>
          <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <MoreVert />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Edit details</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Name:</span>
            <span className="rightbarInfoValue">{props.username}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{props.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Service:</span>
            <span className="rightbarInfoValue">{props.service}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Description:</span>
            <span className="rightbarInfoValue">{props.description}</span>
          </div>
        </div>
      </>
    )
  }
  return(
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar {...props}/> : <HomeRightbar/>}
        <img className="rightbarAdd" src="/images/add.png" alt=""/>
      </div>
    </div>
  )
}

export default Rightbar;