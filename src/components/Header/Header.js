import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import headerIcon from "../../Images/header-icon.png"

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to="/"><img alt='CineVerse' className='header-icon' src={headerIcon} /> </Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}} ><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top-Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header