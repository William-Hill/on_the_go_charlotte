import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="On the Go Charlotte" />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
