import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import './DropDownNav.css'
import { Link } from 'react-router-dom';

const DropDownNav = () => {
    return (
        <NavDropdown id="navbarScrollingDropdown" className="NavDropdown">
        <div className="custom-dropdown-menu">
          <div className="column">
            <NavDropdown.Item ><Link to={"/products/men"} style={{textDecoration:'none',color:'black'}}><b>MEN</b></Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/products/men/sneakers"} style={{textDecoration:'none',color:'black'}}>Sneakers</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/products/men/running"} style={{textDecoration:'none',color:'black'}}>Running</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/products/men/soccers"} style={{textDecoration:'none',color:'black'}}>Soccer</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/products/men/basketball"} style={{textDecoration:'none',color:'black'}}>Basketball</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/products/men/lifestyle"} style={{textDecoration:'none',color:'black'}}>Lifestyle</Link></NavDropdown.Item>
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
