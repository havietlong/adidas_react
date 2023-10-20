import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import './DropDownNav.css'

const DropDownNav = () => {
    return (
        <NavDropdown id="navbarScrollingDropdown" className="NavDropdown">
        <div className="custom-dropdown-menu">
          <div className="column">
            <NavDropdown.Item href="#action3"><b>MEN</b></NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          </div>
          <div className="column">
            <NavDropdown.Item href="#action5"><b>WOMAN</b></NavDropdown.Item>
          </div>
          <div className="column">
            <NavDropdown.Item href="#action5"><b>KIDS</b></NavDropdown.Item>
          </div>
          <div className="column">
            <NavDropdown.Item href="#action5"><b>SPORTS</b></NavDropdown.Item>
          </div>
          <div className="column">
            <NavDropdown.Item href="#action5"><b>SALE</b></NavDropdown.Item>
          </div>
        </div>
      </NavDropdown>
        
    )
}

export default DropDownNav
