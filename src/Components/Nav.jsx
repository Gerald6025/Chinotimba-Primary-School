import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
  <nav className="flex text-white bg-Helenmaroon list-none gap-20 items-center justify-center h-[5vh] text-[15px] font-normal font-serif mt-10 w-full z-50 ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/academics">Academics</Link>
      </li>
      <li>
        <Link to="/administration">Administration</Link>
      </li>
      <div className="bg-white w-[118px] h-[54px] rounded-bl-4xl rounded-br-4xl border-[1px] border-Helenmaroon items-center justify-center flex">
      <Link to ="/"> <img src="./Chinotimba-primary 1.png" alt="logo" /></Link> 
      </div>
      <li>
        <Link to="/news">News & Events</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="border-white border-[1px] px-2.5 rounded-[10px]">
        <Link to="/conact">Contact Us</Link>
      </li>
    </nav>
  )
}

export default Nav
