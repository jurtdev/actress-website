import React from 'react';
import styled from 'styled-components';
import { contactPage } from '../../strings/strings';
import img from '../../images/header_image_1.jpg';

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.image}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 90vh;
  margin-top: 0px;

  @media (max-width: 768px) {
    background-attachment: initial;
    background-position: left;
  }
`;

const SPAN = styled.span`
  display: inline-block;
  grid-column: 4;
  color: #9ed9ccff;
  font-size: 95;
  font-family: 'Dancing Script', sans-serif;
  @media (max-width: 768px) {
  display: none;
  }
}
`;

const TITLE = styled.h1`
  display: inline-block;
  grid-column: 4;
  color: #9ed9ccff;
  font-size: 95px;
  font-family: 'Dancing Script', sans-serif;
  text-shadow: 10px 10px 5px #08171b;
  text-align: center;
  margin-top: -200px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function header() {
  const { actorInfo } = contactPage;
  const { actorFirstName, actorLastName } = actorInfo;
  return (
    <React.Fragment>
      <Header id='home' image={img}>
        <TITLE>
          {actorFirstName}
          <SPAN> {actorLastName}</SPAN>
        </TITLE>
      </Header>
    </React.Fragment>
  );
}
