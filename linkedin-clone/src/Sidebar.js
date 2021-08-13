import React from 'react'
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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" alt="Background image" />
                <Avatar className='sidebar__avatar'></Avatar>
                <h2>Parth Trehan</h2>
                <h4>Works at Cerner</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you're profile</p>
                    <p className="sidebar__statnumber">100</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statnumber">10</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('MongoDB')}
                {recentItem('HTML')}
            </div>
        </div>
    )
}

export default Sidebar