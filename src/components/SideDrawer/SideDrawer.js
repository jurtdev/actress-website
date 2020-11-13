import React, { Component } from 'react';
import './SideDrawer.css';
import { Button } from 'reactstrap';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerToogle: true,
    };
  }

  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = ['side-drawer open'];
    }

    function CloseDrawer(props) {}

    return (
      <nav className={drawerClasses}>
        <div className='menubar__logo menubar_logo__side-drawer'>
          <img
            src='../carly_avatar.jpg'
            className='avatar'
            alt='Carly Fawcett'
          />
          <div className='side-drawer__title'>
            <a href='www.carlyfawcett.com'>Carly Fawcett</a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#9ed9ccff',
            height: '1px',
            margin: '15px 10px',
          }}
        />
        <div className='side-drawer__navigation'>
          <a className='cursor nav__item' href='#about'>
            <Button color='primary'>About Carly</Button>
          </a>
          <a className='cursor nav__item' href='#reels'>
            Reel
          </a>
          <a className='cursor nav__item' href='#featuredNews'>
            One Woman Show
          </a>
          <a className='cursor nav__item' href='#resume'>
            Resume
          </a>
          <a className='cursor nav__item' href='#contact'>
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default SideDrawer;
