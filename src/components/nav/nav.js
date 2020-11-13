import React from 'react';
// import '../../index.css';
import './nav.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark nav__styling'>
      <div className='logo__section'>
        <img className='avatar' src='../carly_avatar2.jpg' alt='Logo' />
        <a className='' href='http://carlyfawcett.com'>
          Carly Fawcett
        </a>
      </div>

      <div
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <DrawerToggleButton />
      </div>

      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='#about'>
              About Carly
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#reels'>
              Reels
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#featuredNews'>
              One Woman Show
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#resume'>
              Resume
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
