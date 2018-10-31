import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo_pack_2/header_logo.jpg'

const Sidebar = () => (
  <div class="column 3 is-narrow">
	    <div class="nav-header">
        <Link to="/" >
          <figure className="image">
            <img id="blk_nrd_logo" src={logo} alt="logo" style={{width: "80%", maxHeight: "100%"}} />
          </figure>
        </Link>
	    </div>
	    <hr/>
	    {/* navigation */}
	    <aside class="menu">
	      <p class="menu-label">
          <Link className="navbar-item" to="/about"> About </Link>
	      </p>
	    </aside>
  </div>

)


export default Sidebar
