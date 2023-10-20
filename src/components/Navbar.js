import React from 'react'
import Search from './Search'
import DarkMode from './DarkMode'
import './Navbar.css'
import { useGlobalContext } from "../context/context";

const Navbar = () => {
    const { setToggle } = useGlobalContext();
  return (
    <div className='nav-main-container'>
        <div className='nav-title-container'>
       <h1 onClick={()=>setToggle(true)}>Image Gallery</h1>  
        </div>
        <div className='Search-Container'>
        {/* search component */}
            <Search/>
        </div>
        <div className='list-container'>
            <ul>
                <li>Explore</li>
                <li>Collection</li>
                <li>Community</li>
            </ul>
        </div>
        <div>
        {/* dark mode component */}
            <DarkMode/>
        </div>
    </div>
  )
}

export default Navbar