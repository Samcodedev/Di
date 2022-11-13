import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../img/GoLearnFull Color.png'
import { BiMenu } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

const NavBar = () => {

    document.addEventListener("click", close)
    function close(){
        let ull = document.getElementById("ull")

        if( ull.style.display==="block" || ull.style.display==="flex"){
            ull.style.display="none"
        }
        else{
            ull.style.display="flex"
        }

        if( window.innerWidth >= 1201 ){
            ull.style.display="flex"
        }
    }
    return(
        <div className='navbar'>
            <div className="img-div">
                <img src={logo} alt="logo" />
            </div>
            <div className="dd">
                <ul id='ull'>
                <MdClose fontSize="45px" color='#ffffff' onClick={close} id='close'/>
                    <Link to="/"><li onClick={close} >Home</li></Link>
                    {/* <Link to=""><li>Contact Us</li></Link> */}
                    <Link to="/about"><li onClick={close} >About Us</li></Link>
                    <Link to="/register"><span onClick={close} >Enrol Now</span></Link>
                </ul>
                <BiMenu fontSize="40px" color='#ffffff' onClick={close} />
            </div>
        </div>
    )
}

export default NavBar;