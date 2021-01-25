import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import './Navigation.css'

const links = [
  { to: 'home', name: 'Home' },
  { to: 'history', name: 'History' },
  { to: 'terminal', name: 'Terminal' },
  { to: 'distributions', name: 'Distributions' },
  { to: 'quiz', name: 'Quiz' },
]

function Navigation() {
  const [sizeWidth, setSizeWidth] = useState(window.innerWidth);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    setSizeWidth(window.innerWidth)
  }

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div className='Navigation'>
        {sizeWidth >= 520 ?
          links.map((link) =>
            <Link className='Navigation-link' to={`#${link.to}`} smooth key={`link_${link.name}`}>
              {link.name}
            </Link>
          ) :
          <div className="Navigation-lines" onClick={handleOpenMenu} />
        }
      </div>
      {
        menuIsOpen &&
        <>
          <div className="Navigation-menu-mobile">
            {
              links.map((link) =>
                <Link className='Navigation-link-mobile' to={`#${link.to}`} key={`link_${link.name}`} smooth onClick={handleOpenMenu}>
                  {link.name}
                </Link>
              )
            }
          </div>
          <div className='Navigation-background'
            onPointerDown={handleOpenMenu}
            onMouseDown={handleOpenMenu}
            onContextMenu={handleOpenMenu}
          />
        </>
      }
    </>
  )
}

export default Navigation;