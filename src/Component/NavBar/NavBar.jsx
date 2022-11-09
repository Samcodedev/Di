import React from 'react';
import './NavBar.css'
import logo from '../../img/GoLearnFull Color.png'

const NavBar = () => {
    return(
        <div className='navbar'>
            <div className="img-div">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Reasons</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <span>Enrol Now</span>
            </ul>
        </div>
    )
}

export default NavBar;