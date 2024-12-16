import React from 'react';
import './Navbar.css';
import netflix_logo_icon from '../../assets/netflix_logo_icon.png';
import search_icon from '../../assets/search_icon.png';
import bell_icon from '../../assets/bell_icon.png';
import blue from '../../assets/blue.jpg';
import caret_icon from '../../assets/caret_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={netflix_logo_icon} alt="Netflix Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/">TV Shows</Link></li>
          <li><Link to="/">Recently Added</Link></li>
          <li><Link to="/">My List</Link></li>
          <li><Link to="/">News & Popular</Link></li>
          <li><Link to="/">Browse By Language</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="profiles">
          <img src={blue} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Caret" className='caret' />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
