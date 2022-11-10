import React from 'react';
import './NavBar.css'
import logo from '../../img/GoLearnFull Color.png'
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

const NavBar = () => {
    return(
        <div className='navbar'>
            <div className="img-div">
                <img src={logo} alt="logo" />
            </div>
            <div className="dd">
                <ul id='ull'>
                <MdClose fontSize="45px" color='#ffffff' className='close'/>
                    <li>Reasons</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <span>Enrol Now</span>
                </ul>
                <BiMenu fontSize="40px" color='#ffffff' />
            </div>

        </div>
    )
}

export default NavBar;