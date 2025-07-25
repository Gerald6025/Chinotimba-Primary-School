import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' 

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-Helenmaroon text-white font-sans z-50">
    
      <div className="hidden md:flex items-center justify-evenly list-none  gap-5 lg:gap-10 xl:gap-16 h-[5vh] mt-10 text-[14px]">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/administration">Administration</Link></li>
        <div className="bg-white w-[118px] h-[54px] rounded-bl-4xl rounded-br-4xl border-[1px] border-Helenmaroon flex items-center justify-center">
          <Link to="/"><img src="src/assets/Chinotimba-primary 1.png" alt="logo" /></Link>
        </div>
        <li><Link to="/news">News & Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li className="border-white border-[1px] px-2.5 rounded-[10px]">
          <Link to="/conact">Contact Us</Link>
        </li>
      </div>

      
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="src/assets/Chinotimba-primary 1.png" alt="logo" className="w-10 h-10" />
          <span className="text-sm font-semibold">Chinotimba Primary School</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center py-4 text-[15px] bg-Helenmaroon border-t border-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link>
          <Link to="/administration" onClick={() => setIsOpen(false)}>Administration</Link>
          <Link to="/news" onClick={() => setIsOpen(false)}>News & Events</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/conact" onClick={() => setIsOpen(false)} className="border-white border-[1px] px-3 py-1 rounded-[10px]">Contact Us</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav
