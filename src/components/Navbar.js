import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 class="title is-1">On the Go Charlotte</h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
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
