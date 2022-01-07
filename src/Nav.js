import React from 'react'
import '.Nav.css'
import logo from './images/netflix_logo.png'
import avatar from './images/Netflix-avatar.png'

function Nav() {
    return (
        <div className='nav'>
            <img src={logo} alt="Netflix Logo" />
            <img src={avatar} alt="Netflix avatar" />
        </div>
    )
}

export default Nav
