import React, { useEffect, useState } from 'react'
import logo from './../assets/images/logo.svg'
import hb from './../assets/images/icon-hamburger.svg'

const NavBar = () => {
    let [open, setOpen] = useState(false)
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

    document.className = open ? 'visible' : 'hidden';

    if (window.innerWidth >= 429) {
    return (
        <header>
            <img src={logo} className="Logo" alt="logo" />
            <div className="Menu">
                <div>
                    <a
                        className="MenuLink"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    About
                    </a>
                </div>
                <div>
                    <a
                        className="MenuLink"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Services
                    </a>
                </div>
                <div>
                    <a
                        className="MenuLink"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Projects
                    </a>
                </div>
                <div>
                    <button className="MenuButton">Contact</button>
                </div>
            </div>
        </header>)
        } else { 
            return (
                <header>    
                    <img src={logo} className="Logo" alt="logo" />
                    <img  src={hb} className="MenuIcon" alt="MenuIcon" onClick={() => setOpen(!open)}/>
                    <div className={document.className}>
                        <div className="arrow-up"></div>
                        <div className="Menu">
                            <div className='LinkContainer'>
                                <a
                                    className="MenuLink"
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                About
                                </a>
                            </div>
                            <div className='LinkContainer'>
                                <a
                                    className="MenuLink"
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Services
                                </a>
                            </div>
                            <div className='LinkContainer'>
                                <a
                                    className="MenuLink"
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Projects
                                </a>
                            </div>
                            <div className='LinkContainer'>
                                <button className="MenuButton">Contact</button>
                            </div>
                        </div>
                    </div>
                </header>   
            )} 
}

export default NavBar