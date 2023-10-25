import React from 'react'
import DropDownNav from '../dropDown_btn/DropDownNav'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'


const navBar = () => {


    return (
        <>
            <header className="header">
                <div className="header-content">
                    <span className="header-text" id="headerText"></span>
                </div>
            </header>
            <header className="main-header">
                <div className="left-section">
                    <Link to='/'>
                    <img src="data:image/png;base64,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"
                        alt="Adidas Logo" className="logo" /></Link>
                </div>


                <DropDownNav/>
                <div className="center-section">
                    
                </div>
                <div className="right-section">
                    <div className="search">

                        <input type="text" className="search-input" />

                        <div className="icon">
                            <box-icon name='search-alt'></box-icon>
                        </div>
                    </div>
                    <Link to='/cart'>
                    <div className="cart-icon">
                        <box-icon name='cart'></box-icon>
                    </div>
                    </Link>
                    <div className="login-icon">
                    <Link to='http://localhost:3030/login'><box-icon name='user-circle'></box-icon></Link>
                    </div>

                </div>
            </header>



        </>
    )
}

export default navBar