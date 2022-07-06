import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/research">Research</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/events">Events</Link>
    </li>
    <li>
      <Link to="/people">Peoples</Link>
    </li>
    <li>
      <Link to="/blogs">Blogs</Link>
    </li>
     <li>
      <Link to="/gallery">Gallery</Link>
    </li>
    <li>
      <Link to="/collabration">Collabrations</Link>
    </li>
  </div>
  )
}

export default Navbar