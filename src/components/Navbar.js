import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/logo_pack_2/logo.png'

library.add(fab)

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img id="blk_nrd_logo" src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a href="/"><FontAwesomeIcon className="social_icon" icon={['fab', 'facebook']} size="4x" color="black"/></a>
        <a href="/"><FontAwesomeIcon className="social_icon" icon={['fab', 'twitter']} size="4x" color="black"/></a>
        <a href="/"><FontAwesomeIcon className="social_icon" icon={['fab', 'instagram']} size="4x" color="black"/></a>
        <a href="/"><FontAwesomeIcon className="social_icon" icon={['fab', 'youtube']} size="4x" color="black"/></a>
      </div>
    </div>
  </nav>
)

export default Navbar
