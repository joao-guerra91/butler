import React from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import AllUsers from '../../components/allUsers/AllUsers'
import './listUsers.css'

function ListUsers (props) {
  return (
    <>
      <div className="listUsersContainer">
        <Leftbar/>
        <AllUsers {...props}/>
        <Rightbar/>
      </div>
    </>
  );
}

export default ListUsers;