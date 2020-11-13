import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { resumePage } from '../../strings/strings';
import img from '../../images/header_image_2.jpg';

const RESUME = styled.div`
    display: flex
    justify-content: center;
    align-items: center;
    background: url(${(props) => props.image}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    height: 600px;
    z-index: 100;

    @media only screen and (max-width: 768px) {
      background-attachment: initial;
      background-position: left;
}

`;

const BUTTON = styled.h1`
  display: inline-block;
  border: 5px solid #9ed9ccff;
  padding: 25px;
  color: #9ed9ccff;
  background-color: #061318;
  font-family: 'Dancing Script', cursive;
  opacity: 0.8;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin-top: 300px;
  }
`;

export default function resume() {
  const { resumeTitle, resumeLink } = resumePage;

  return (
    <React.Fragment>
      <RESUME id='resume' className='resume' image={img}>
        <BUTTON>
          <a
            href={resumeLink}
            download
            style={{ textDecoration: 'none', color: '#9ed9ccff' }}>
            {resumeTitle}
          </a>
        </BUTTON>
      </RESUME>
    </React.Fragment>
  );
}
