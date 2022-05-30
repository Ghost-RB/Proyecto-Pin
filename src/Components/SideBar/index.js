import React from 'react'
import { Link } from 'react-scroll'
import './index.scss'

const SideBar = ( {isOpen, toggle}) => {
    // console.log("Entramos a la SideBar ", isOpen)
  return (
    <aside className="sideBarContainer" onClick={toggle}>
        <div className="icon" onClick={toggle}>
            <i className='bx bx-x closeIcon'></i>
        </div>
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <Link className="sideBarLink" to='home' onClick={toggle}>Home</Link>
                <Link className="sideBarLink" to='about' onClick={toggle}>About</Link>
                <Link className="sideBarLink" to='discover' onClick={toggle}>Discover</Link>
                <Link className="sideBarLink" to='FAQ' onClick={toggle}>FAQ</Link>
                <Link className="sideBarLink" to='contact' onClick={toggle}>Contact Us</Link>
            </div>
        </div>
    </aside>
  )
}

export default SideBar