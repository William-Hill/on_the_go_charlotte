import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
  <div className="footer">
    <div className="container has-text-centered">
      <div className="nav-center">
        <a className="nav-item" href="">
          <span className="icon">
            <FontAwesomeIcon className="social_icon" icon={['fab', 'facebook']} size="3x" color="black"/>
          </span>
        </a>
        <a className="nav-item" href="">
          <span className="icon">
            <FontAwesomeIcon className="social_icon" icon={['fab', 'twitter']} size="3x" color="black"/>
          </span>
        </a>
        <a className="nav-item" href="">
          <span className="icon">
            <FontAwesomeIcon className="social_icon" icon={['fab', 'instagram']} size="3x" color="black"/>
          </span>
        </a>
        <a className="nav-item" href="">
          <span className="icon">
            <FontAwesomeIcon className="social_icon" icon={['fab', 'youtube']} size="3x" color="black"/>
          </span>
        </a>
    </div>
      <p>template by <a href="http://github.com/plasticneko">github.com/plasticneko</a></p>
    </div>
  </div>
)


export default Footer
