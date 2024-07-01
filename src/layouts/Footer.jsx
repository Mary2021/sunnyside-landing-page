import React, { useEffect, useState } from "react"
import logo from './../assets/images/logo.svg'
import fb from './../assets/images/icon-facebook.svg';
import instagram from './../assets/images/icon-instagram.svg';
import twitter from './../assets/images/icon-twitter.svg';
import pinterest from './../assets/images/icon-pinterest.svg';

const Footer = () => {
  let [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
  function handleResize() {
      setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
      }) 
  }

  window.addEventListener('resize', handleResize)

  return _ => {
    window.removeEventListener('resize', handleResize)

  }

  })
    if (window.innerWidth >= 429) {
        return (
          <footer className='FooterBackground'>
            <div className="FooterLogoContainer">
              <img src={logo} className="FooterLogo" alt="logo" />
            </div>
            <div className="FooterMenuContainer">
            <div className='FooterMenu'>
              <a
                className="FooterMenuLink"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              </div>
              <div className='FooterMenu'>
              <a
                className="FooterMenuLink"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
              </div>
              <div className='FooterMenu'>
              <a
                className="FooterMenuLink "
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </a>
              </div>
            </div>
            <div className="FooterIconContainer">
              <div className='Icons'>
                <img src={fb} alt="facebookIcon" ></img>
              </div>
              <div className='Icons'>
                <img src={instagram} alt="instagramIcon" ></img>
              </div>
              <div className='Icons'>
                <img src={twitter} alt="twitterIcon" ></img>
              </div>
              <div className='Icons'>
                <img src={pinterest} alt="pinterestIcon" ></img>
              </div>
            </div>
            <div className="AttributionContainer ">
              <div className='Attribution'>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://google.com" target="_blank" rel="noopener noreferrer">Mary P.</a>.
              </div>
            </div>
        </footer>
        )
    }else {
        return (
          <footer className='FooterContainer'>
          <img src={logo} className="FooterLogo" alt="logo" />
          <div className='FooterMenuContainer'>
            <div className='FooterMenu'>
              <a
                className="FooterMenuLink"
                href="https://https://create-react-app.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              </div>
              <div className='FooterMenu'>
              <a
                className="FooterMenuLink"
                href="https://https://create-react-app.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
              </div>
              <div className='FooterMenu'>
              <a
                className="FooterMenuLink "
                href="https://https://create-react-app.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </a>
              </div>
            </div>
            <div className='Icons'>
              <img src={fb} alt="facebookIcon" ></img>
            </div>
            <div className='Icons'>
              <img src={instagram} alt="instagramIcon" ></img>
            </div>
            <div className='Icons'>
              <img src={twitter} alt="twitterIcon" ></img>
            </div>
            <div className='Icons'>
              <img src={pinterest} alt="pinterestIcon" ></img>
            </div>
            <div className='Attribution'>
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
              Coded by <a href="https://google.com" target="_blank" rel="noopener noreferrer">Mary P.</a>.
            </div>
        </footer>
        )
    }
}

export default Footer