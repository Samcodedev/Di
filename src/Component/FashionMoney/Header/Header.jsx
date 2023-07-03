import React, { useRef, useState, useEffect } from 'react'
import './Header.css'
import video from '../Asset/Dotun collins at the first class with the Students at @aisyfashionaccademy yesterday. It was a great experience..mp4'
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsDownload} from 'react-icons/bs'
import AOS from 'aos'
import "aos/dist/aos.css"

const Header = () => {
    const [click, clickFunc] = useState(true)
    const [control, controlFunc] = useState(true)
    const viRef = useRef(null)
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])


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
        <div className="text-div" data-aos={window.innerWidth <= 800? "fade-down" : "fade-right" }>
            <h1>Building a Profitable Fashion Business in Nigeria</h1>
            <p>I know you want to learn how you can begin to earn XYZ amount in your business, but let me tell you a hilarious story about something that happened on my birthday last year when I received a text from an unknown person on Instagram. </p>
            {/* <Link to="/register"><button><span>Click to Enroll <BsJournalBookmark/></span></button></Link> */}
            <a href={video} download="Fashion_Money_Workshop"><button><span>Download video <BsDownload /></span></button></a>
        </div>
        <div className="video-div" data-aos={window.innerWidth <= 800? "fade-up" : "fade-left" }>
            <div className="bound">
                <video src={video} ref={viRef} style={{opacity: click? "20%" : "100%"}} download ></video>
                {click? <BsFillPlayCircleFill fontSize={60} onClick={toque} color='rgb(255, 255, 255)' /> : <BsFillPauseCircleFill fontSize={60} onClick={toque} style={{color: click? "rgb(255, 255, 255)" : "rgb(0, 0, 0, 0.4)"}} /> }
            </div>
                <div className="cover" style={{backgroundColor: click? "rgba(0, 0, 0, 0.671)" : "rgba(0, 0, 0, 0)"}}>
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Header
