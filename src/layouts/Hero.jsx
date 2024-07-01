import React, { useEffect, useState } from "react"
import arrow from './../assets/images/icon-arrow-down.svg'

const Hero = () => {
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
        <div className="Hero">
            <h1>We are Creatives</h1>
            <img src={arrow} alt="arrow-icon" />
        </div>)
    } else { 
        return(
        <div className="Hero">
            <h1>We are Creatives</h1>
            <img src={arrow} alt="arrow-icon" />
        </div>
        )
    }
}
export default Hero