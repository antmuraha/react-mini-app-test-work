import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to='/'>Sign up</Link></li>
        <li><Link to='/aboutme'>About me</Link></li>
        <li><Link to='/successful'>Successful</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer
