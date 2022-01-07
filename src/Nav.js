import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './images/netflix_logo.png'
import avatar from './images/Netflix-avatar.png'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src={logo} alt="Netflix Logo" />
            <img className='nav_avatar' src={avatar} alt="Netflix avatar" />
        </div>
    )
}

export default Nav
