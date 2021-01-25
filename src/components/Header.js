import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import Logo from './../assets/logo.png'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
      <Link smooth to='#home'>
        <img alt="logo" className='Header-logo' src={Logo} />
      </Link>
      <p className='Header-text'>Wszystko o linuxie</p>
    </div>
  )
}

export default Header;