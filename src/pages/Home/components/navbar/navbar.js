import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () =>{

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
      window.addEventListener("scroll", ()=>{
         window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  },[])
  return(
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src ="" alt=""/>
      <ul>
        <li>Home</li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar;