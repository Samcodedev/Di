import React, { useRef, useState } from 'react'
import './Header.css'
import video from '../Asset/DOTUN_COLLINS_LANDING_PAGE.mp4'
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'

const Header = () => {
    const [click, clickFunc] = useState(true)
    const [control, controlFunc] = useState(true)
    const viRef = useRef(null)

    function toque(){
        clickFunc(
            !click
        )
        if(control){
          viRef.current.play()
          controlFunc(!control)
        }else{
          viRef.current.pause()
          controlFunc(!control)
        }
    }

  return (
    <div className='header'>
      <div className="sub-header">
        <div className="text-div">
            <h1>How to make money with fashion as a Nigerian.</h1>
            <p>Making money has a fashionist in Nigeria is one of the most entucial aspect in fashion and the value you give out is the tells how you earn as a fashionist. </p>
        </div>
        <div className="video-div">
            <div className="bound">
                <video src={video} ref={viRef} ></video>
                {click? <BsFillPlayCircleFill fontSize={60} onClick={toque} color='rgb(255, 255, 255)' /> : <BsFillPauseCircleFill fontSize={60} onClick={toque} style={{color: click? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.4)"}} /> }
            </div>
                <div className="cover" style={{backgroundColor: click? "rgba(0, 0, 0, 0.671)" : "rgba(0, 0, 0, 0)"}}>
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Header
