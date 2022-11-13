import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../img/GoLearnFull Color.png'
import { BiMenu } from 'react-icons/bi'
// import { MdClose } from 'react-icons/md'

const NavBar = () => {
    function close(){
        document.getElementById("ull").style.display="none"
    }
    return(
        <div className='navbar'>
            <div className="img-div">
                <img src={logo} alt="logo" />
            </div>
            <div className="dd">
                <ul id='ull'>
                {/* <MdClose fontSize="45px" color='#ffffff' className='close'/> */}
                    <Link to="/"><li onClick={close}>Home</li></Link>
                    {/* <Link to=""><li>Contact Us</li></Link> */}
                    <Link to="/about"><li onClick={close}>About Us</li></Link>
                    <Link to="/register"><span onClick={close}>Enrol Now</span></Link>
                </ul>
                <BiMenu fontSize="40px" color='#ffffff' />
            </div>
        </div>
    )
}

export default NavBar;