import React, { useState } from 'react';
import './Navbar.css';


const two_Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };
  return (
    <div className="navbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="logo">Logo</div>
    {menuVisible && (
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )}
  </div>
  )
}

export default two_Navbar;