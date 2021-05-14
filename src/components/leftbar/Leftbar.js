import React from 'react';
import './leftbar.css';
import { RssFeed, HelpOutline, WorkOutline, Event, School, Bookmark, Group  } from '@material-ui/icons'

function Leftbar () {
  return(
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon"/>
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon"/>
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon"/>
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon"/>
            <span className="leftbarListItemText">Calendar</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon"/>
            <span className="leftbarListItemText">Courses</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon"/>
            <span className="leftbarListItemText">Bookmark</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon"/>
            <span className="leftbarListItemText">Groups</span>
          </li>
        </ul>
        <button className="leftbarbutton">See more</button>
        <hr className="leftbarHr"/>
        <ul className="leftbarFriendList">
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>
          <li className="leftbarFriend">
            <img className="leftbarFriendImg" src="/images/kate.jpg" alt=""/>
            <span className="leftbarFriendName">Kate Moss</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Leftbar;