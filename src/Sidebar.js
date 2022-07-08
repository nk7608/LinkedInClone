import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";


function Sidebar() {

const user = useSelector(selectUser);

const recentItem = (topic) => (
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
<p>{topic}</p>
  </div>
);

  return (
    <div className='sidebar'>
     <div className="sidebar__top">
        <img src="https://wallup.net/wp-content/uploads/2017/03/27/440727-digital_art-minimalism-simple_background-dots-lines-2D-geometry-CGI-abstract-circle.jpg" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar' >{user.displayName[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>

<div className="sidebar__stats">
  <div className="sidebar__stat">
  <p>Who viewed your Profile</p>
<p className="sidebar__statNumber">
  1,543
</p>
</div>
<div className="sidebar__stat">
<p>Views of your post</p>
<p className="sidebar__statNumber">
  1,448
</p>
  </div>
</div>

<div className="sidebar__button">
  <p>Recent</p>
  {recentItem('Programming')}
  {recentItem('Frontend')}
  {recentItem('React.js')}
  {recentItem('Design')}
  {recentItem('Software engineering')}

</div>

        </div>

  )
}

export default Sidebar







