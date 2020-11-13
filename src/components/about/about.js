import React from 'react';
import styled from 'styled-components';
import { aboutPage } from '../../strings/strings.js';

const ABOUT = styled.div`
  min-height: 550px;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 50px;
  background-color: #061318;

  @media only screen and (max-width: 667px) {
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
`;
const CONTENT = styled.div`
  display: grid;
  font-family: 'poppins', sans-serif;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  align-items: center;
  word-spacing: 5px;
  line-height: 1.8;
  color: #9ed9ccff;

  @media only screen and (max-width: 667px) {
    grid-template-columns: 1fr;
  }
`;

const PARA2 = styled.p`
  padding-right: 200px;

  @media only screen and (max-width: 1300px) {
    padding-right: 0px;
  }
`;

const TITLE = styled.h1`
  font-size: 60px;
  color: #9ed9ccff;
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
  font-family: 'Dancing Script', cursive;
`;

const IMG = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  width: 250px;

  @media only screen and (max-width: 1300px) {
    width: 200px;
  }
  @media only screen and (max-width: 900px) {
    width: 150px;
  }

  @media only screen and (max-width: 667px) {
    width: 70%;
    margin: auto;
    margin: 40px;
    padding-right: 0;
    border-radius: 50%;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  }
`;

export default function about() {
  const { aboutText, aboutTitle } = aboutPage;

  return (
    <ABOUT id='about'>
      <TITLE>{aboutTitle}</TITLE>
      <CONTENT>
        <IMG src='../carly_avatar2.jpg' className='avatar2' />
        <PARA2>{aboutText}</PARA2>
      </CONTENT>
      <div
        style={{
          backgroundColor: '#9ed9ccff',
          height: '1px',
          margin: '65px 10px',
        }}
      />
    </ABOUT>
  );
}
