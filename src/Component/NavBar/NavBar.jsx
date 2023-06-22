import React, { useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
// import { MdClose } from 'react-icons/md'

const NavBar = () => {

    const [open, openFunc] = useState(false)
    function navi(){
        openFunc(
            !open
        )
    }

    setInterval(() => {
        window.innerWidth > 1202 ? openFunc(true) : console.log("hello")
    });

    return(
        <div className='navbar'>
            <div className="img-div">
                <img src={logo} alt="logo" />
            </div>
            <div className="dd">
                {/* <GiCancel fontSize="30px" color='#ffffff' /> */}
                <ul id='ull' style={{display: open? "flex" : "none" }}>
                <MdClose fontSize="45px" color='#ffffff'  id='close' onClick={navi} style={{display: open? "flex" : "none"}}/>
                    <Link to="/" onClick={navi}><li >Home</li></Link>
                    <Link to="/about" onClick={navi}><li >About Us</li></Link>
                    <Link to="/Fashion_Money_Workshop" onClick={navi}><li >Fashion Money</li></Link>
                    <Link to="/register" onClick={navi}><span >Enrol Now</span></Link>
                </ul>
                <BiMenu fontSize="45px" color='#ffffff' onClick={navi} style={{display: open? "none" : "flex"}}/>
            </div>
        </div>
    )
}

export default NavBar;