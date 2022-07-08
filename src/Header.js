import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './app/userSlice';



function Header() {

  const dispatch = useDispatch();
 
const logoutofApp = () => {
dispatch(logout());
auth.signOut();
};

  return (
    <div className='header'>
        <div className="header__left">
<img src="https://www.pikpng.com/pngl/m/57-572097_linkedin-transparent-icon-linked-in-logo-with-white.png" alt="" placeholder="Search" />

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

    <HeaderOption Icon={NotificationsActiveIcon} title='Notifications' />
    <HeaderOption avatar={true} title="me" onClick={logoutofApp} />
        </div>  
        </div>

  )
}

export default Header