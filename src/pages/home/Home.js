import React from 'react';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed'
import './home.css'

function Home(props) {
  return (
    <>
      <div className="homeContainer">
        <Leftbar/>
        <Feed {...props}/>
        <Rightbar {...props}/>
      </div>
    </>
  );
}

export default Home;
