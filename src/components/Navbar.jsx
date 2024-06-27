import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>PicturePandit</Link>
      </div>

      <div className='navbar-center'>
        <ul>
          <li>
            <Link to='/'>Movies</Link>
            <Link to='/'>Series</Link>
            <Link to='/'>Originals</Link>
          </li>
        </ul>
        <div className='navbar-search'>
          <input type='text' placeholder='Search...' />
        </div>
      </div>

      <div className='navbar-right'>
        <Link to='/notifications'>🔔</Link>
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
