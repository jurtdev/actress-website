import React from 'react';
import { reelsPage } from '../../strings/strings';
import styled from 'styled-components';
import img from '../../images/header_image_3.jpg';

const Reels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  background: url(${(props) => props.image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  @media only screen and (max-width: 768px) {
    background-attachment: initial;
    background-position: left;
  }
`;

const CONTENT = styled.div`
  @media only screen and (max-width: 768px) {
    padding-top: 250px;
  }
`;

const BUTTON = styled.h1`
  border: 5px solid #9ed9ccff;
  padding: 25px;
  color: #9ed9ccff;
  background-color: #061318;
  font-family: 'Dancing Script', cursive;
  opacity: 0.8;
  cursor: pointer;
`;

export default function reels() {
  const { comedyReel, dramaticReel } = reelsPage;

  return (
    <React.Fragment>
      <Reels id='reels' className='reels' image={img}>
        <CONTENT>
          <BUTTON>
            <a
              href={comedyReel.reelLink}
              target='blank'
              style={{ textDecoration: 'none', color: '#9ed9ccff' }}>
              {comedyReel.reelTitle}
            </a>
          </BUTTON>
          <BUTTON>
            <a
              href={dramaticReel.reelLink}
              target='blank'
              style={{ textDecoration: 'none', color: '#9ed9ccff' }}>
              {dramaticReel.reelTitle}
            </a>
          </BUTTON>
        </CONTENT>
      </Reels>
    </React.Fragment>
  );
}
