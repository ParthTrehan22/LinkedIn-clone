import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Linkedin Icon" />
                <div className="header__search">
                    <SearchIcon></SearchIcon>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
                <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
                <HeaderOption avatar = "true" title="Me" onClick={logoutOfApp} ></HeaderOption>            
            </div>
        </div>
    )
}

export default Header
