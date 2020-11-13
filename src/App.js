import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav/nav';
import Header from './components/header/header';
import About from './components/about/about';
import Reels from './components/reels/reels';
import Contact from './components/contact/contact';
import Featured from './components/featuredNews/featuredNews';
import Resume from './components/resume/resume';

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((preState) => {
      return { sideDrawerOpen: !this.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (
      <div className='App' style={{ height: '100%' }}>
        <NavBar />
        <Header />
        <About />
        <Reels />
        <Featured />
        <Resume />
        <Contact />
      </div>
    );
  }
}
