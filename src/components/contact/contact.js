import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { contactPage } from '../../strings/strings.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebook, FaImdb, FaYoutube, FaInstagram } from 'react-icons/fa';

const Contact = styled.div`
  background-color: #061318;
  height: 500px;

  @media only screen and (max-width: 991px) {
    height: 600px;
  }

  @media only screen and (max-width: 767px) {
    height: 810px;
  }

  @media only screen and (max-width: 576px) {
    height: 880px;
  }
`;

const H1 = styled.h1`
  font-size: 60px;
  color: #9ed9ccff;
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;
  font-family: 'Dancing Script', cursive;
`;

export default function contact() {
  let newDate = new Date();
  let year = newDate.getFullYear();

  const {
    contactTitle,
    agencyInfo,
    actorInfo,
    contactFooterMenu,
  } = contactPage;
  const { agencyTitle, agencyName, agencyEmail, agencyPhone } = agencyInfo;
  const { actorTitle, actorFirstName, actorEmail } = actorInfo;
  const {
    menuTitle,
    menuItems,
    copyrightInfo,
    socialLinks,
  } = contactFooterMenu;
  const { home, about, reels, featuredNews, resume } = menuItems;
  const { facebook, instagram, imdb, youtube } = socialLinks;
  const { copyrightTitle, copyrightText } = copyrightInfo;

  return (
    <React.Fragment>
      <Contact id='contact'>
        <H1>{contactTitle}</H1>
        <footer className='site-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-5'>
                <h6>{agencyTitle}</h6>
                <ul>
                  <li className='text-justify'>{agencyName} </li>
                  <li className='text-justify'>
                    <a href={`mailto: ${agencyEmail}`}>{agencyEmail}</a>
                  </li>
                  <li className='text-justify'>
                    <a href={`tel: ${agencyPhone}`}>{agencyPhone}</a>
                  </li>
                </ul>
              </div>

              <div className='col-sm-12 col-md-4'>
                <h6>{`${actorFirstName}'s
                ${actorTitle}`}</h6>
                <ul>
                  <li className='text-justify'>Email: </li>
                  <li className='text-justify'>
                    <a href={`mailto: ${actorEmail}`}>{actorEmail}</a>
                  </li>
                </ul>
              </div>

              <div className='col-xs-6 col-md-3'>
                <h6>{menuTitle}</h6>
                <ul className='footer-links'>
                  <li>
                    <a href={`#${home.link}`}>{home.name}</a>
                  </li>
                  <li>
                    <a href={`#${home.link}`}>{about.name}</a>
                  </li>
                  <li>
                    <a href={`#${reels.link}`}>{reels.name}</a>
                  </li>
                  <li>
                    <a href={`#${featuredNews.link}`}>{featuredNews.name}</a>
                  </li>
                  <li>
                    <a href={`#${resume.link}`}>{resume.name}</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-sm-6 col-xs-12'>
                <p className='copyright-text'>
                  {copyrightTitle}
                  <span> &copy; </span>
                  {`${year} ${copyrightText}`}
                </p>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
                <ul className='social-icons'>
                  <li>
                    <a className='instagram' href={instagram}>
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a className='facebook' href={facebook}>
                      <FaFacebook />
                    </a>
                  </li>
                  {/* <li>
                    <a className='twitter' href={twitter}>
                      <FaTwitter />
                    </a>
                  </li> */}
                  <li>
                    <a className='youtube' href={youtube}>
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a className='imdb' href={imdb}>
                      <FaImdb />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Contact>
    </React.Fragment>
  );
}
