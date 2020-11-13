import React from 'react';
import styled from 'styled-components';
import { featured } from '../../strings/strings';
import img from '../../images/header_image_1.jpg';

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
  }
`;
const CONTENT = styled.p`
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
const TITLE = styled.h1`
  font-size: 60px;
  color: #9ed9ccff;
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;
  font-family: 'Dancing Script', cursive;
`;

const IMG = styled.img`
  margin: 0 auto;
  border-radius: 10px;
  width: 250px;
  box-shadow: 8px 16px 20px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 667px) {
    margin-bottom: 40px;
  }
`;

export default function featuredNews() {
  const { featuredTitle, featuredText } = featured;

  return (
    <React.Fragment>
      <ABOUT id='featuredNews'>
        <TITLE>{featuredTitle}</TITLE>
        <CONTENT>
          <IMG src={img} className='avatar2' />
          {featuredText}
        </CONTENT>
        <div
          style={{
            backgroundColor: '#9ed9ccff',
            height: '1px',
            margin: '65px 10px',
          }}
        />
      </ABOUT>
    </React.Fragment>
  );
}
