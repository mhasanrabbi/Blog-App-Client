import React from 'react';
import './topbar.css';

function Topbar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-f'></i>
        <i className='topIcon fab fa-twitter'></i>
        <i className='topIcon fab fa-instagram'></i>
        <i className='topIcon fab fa-pinterest-p'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg'
          src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='profile'
        />
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}

export default Topbar;
