import React, { useEffect, useState } from 'react'
import egg from './../assets/images/desktop/image-transform.jpg';
import wineglass from './../assets/images/desktop/image-stand-out.jpg';
import cherries from './../assets/images/desktop/image-graphic-design.jpg';
import orange from './../assets/images/desktop/image-photography.jpg';
import milkbottles from './../assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeOnPlate from './../assets/images/desktop/image-gallery-orange.jpg';
import waffleCone from './../assets/images/desktop/image-gallery-cone.jpg';
import sugarCubes from './../assets/images/desktop/image-gallery-sugarcubes.jpg';
import emily from './../assets/images/image-emily.jpg';
import thomas from './../assets/images/image-thomas.jpg';
import jennie from './../assets/images/image-jennie.jpg';
import ServiceCard from '../components/ServiceCard';
import SmallServiceCard from './../components/SmallServiceCard';
import TestimonialCard from './../components/TestimonialCard'

const Main = () => {
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
        <div className="Main">
          <div className="Services">
            <div className='CardContainer'>
              <ServiceCard heading='Transform your brand' text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'/>
            </div>
            <img src={egg} className='ImageCard' alt="egg" />
            <img src={wineglass} className="ImageCard" alt="wineglass" />
            <div className='CardContainer'>
              <ServiceCard heading='Stand out to the right audience' text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we`ll build and extend your brand in digital places. '/>
            </div>
            <div className='ImageContainer' style={{ backgroundImage: `url(${cherries})` }}>
              <SmallServiceCard heading='Graphic Design' text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients` attention.'/>
            </div>
            <div className='ImageContainer' style={{ backgroundImage: `url(${orange})`}}>
              <SmallServiceCard heading='Photography' text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'/>
            </div>
          </div>
          <div className='TestimonialContainer'>
              <h2 className='TestimonialHeader'>Client testemonials</h2>
            <div className='TestimonialCardContainer'>
              <TestimonialCard src={emily} text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name='Emily R.' occupation='Marketing Director' />
              <TestimonialCard src={thomas} text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' name='Thomas S.' occupation='Chief Operating Officer' />
              <TestimonialCard src={jennie}  text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name='Jennie F.' occupation='Business Owner' />
            </div>
          </div>
          <div className='GalleryContainer'>
            <img src={milkbottles} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="milkbottles" />
            <img src={orangeOnPlate} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="orange on plate" />
            <img src={waffleCone} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="waffle cone" />
            <img src={sugarCubes} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="sugar cubes" />
          </div>
        </div>
    )} else {
        return (
          <div className="Main">
            <div className='Services'>
              <img src={egg} className='ImageCard' alt="egg" style={{ width: '100%'}}/>
              <div className='CardContainer'>
                <ServiceCard heading='Transform your brand' text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'/>
              </div>
              <img src={wineglass} className="ImageCard" alt="wineglass" style={{ width: '100%'}} />
              <div className='CardContainer'>
                <ServiceCard heading='Stand out to the right audience' text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we`ll build and extend your brand in digital places. '/>
              </div>
              <div className='ImageContainer' style={{ backgroundImage: `url(${cherries})` }}>
                <SmallServiceCard heading='Graphic Design' text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients` attention.'/>
              </div>
              <div className='ImageContainer' style={{ backgroundImage: `url(${orange})` }}>
                <SmallServiceCard heading='Photography' text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'/>
              </div>
              </div>
              <div className='TestimonialContainer'>
              <h2 className='TestimonialHeading'>Client testimonials</h2>
            <div className='TestimonialCardContainer'>
              <TestimonialCard src={emily} text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name='Emily R.' occupation='Marketing Director' />
              <TestimonialCard src={thomas} text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' name='Thomas S.' occupation='Chief Operating Officer' />
              <TestimonialCard src={jennie}  text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name='Jennie F.' occupation='Business Owner' />
            </div>
            </div>
            <div className='GalleryContainer'>
              <img src={milkbottles} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="milkbottles" />
              <img src={orangeOnPlate} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="orange on plate" />
              <img src={waffleCone} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="waffle cone" />
              <img src={sugarCubes} className="PictureCard" style={{ width: '100%', higth: 200 }} alt="sugar cubes" />
            </div>
          </div>
        )
      }
}

export default Main