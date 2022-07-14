import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';



function Header() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
 
const logoutOfApp = () => {
dispatch(logout());
auth.signOut();
};

  return (
    <div className='header'>
        <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png"
          alt=""
        />

<div className="header__search">
    <SearchIcon />
    <input type="text" />
</div>
</div>
        <div className="header__right">
    <HeaderOption Icon={HomeIcon} title='Home' />
    <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
    <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
    <HeaderOption Icon={ChatIcon} title='Messaging' />

    <HeaderOption Icon={NotificationsIcon} title='Notifications' />
    </div>
      <div className="header__avatar" onClick={logoutOfApp}>
        <Avatar src={user?.photoUrl}>{user?.email[0]}</Avatar>
        <h3>me</h3>
        </div>  
        </div>

  )
}

export default Header