import React, { 
  // useRef, 
  // useState, 
  useEffect 
} from 'react'
import './Header.css'
// import video from '../Asset/Dotun collins at the first class with the Students at @aisyfashionaccademy yesterday. It was a great experience..mp4'
// import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsDownload} from 'react-icons/bs'
import img from '../Asset/IMG-20230620-WA0017.jpg'
import AOS from 'aos'
import "aos/dist/aos.css"
// import { HiArrowNarrowRight } from 'react-icons/hi'

const Header = () => {
    // const [click, clickFunc] = useState(true)
    // const [control, controlFunc] = useState(true)
    // const viRef = useRef(null)
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])


    // function toque(){
    //     clickFunc(
    //         !click
    //     )
    //     if(control){
    //       viRef.current.play()
    //       controlFunc(!control)
    //     }else{
    //       viRef.current.pause()
    //       controlFunc(!control)
    //     }
    // }

  return (
    <div className='header'>
      <div className="sub-header">
        <div className="text-div" data-aos={window.innerWidth <= 800? "fade-down" : "fade-right" }>
            <h1>Building a Profitable Fashion Business in Nigeria</h1>
            <p>
              Before you read further, I want you to have a statement in mind, that is:
            </p>
            <p>
              ‘The Amount of money (no matter how big it is) that you are looking for is also looking for you, but not this current version of you’.
            </p>
            <p>READ THAT AGAIN! This time without the bracket. </p>
            <p>
              In case you’re wondering why I made that statement, let me share a brief story of how I got what I’ll call a big Birthday gift when I received a DM from a very Big name in the Fashion Industry.
            </p>
            
            {/* <Link to="/register"><button><span>Click to Enroll <BsJournalBookmark/></span></button></Link> */}
            {/* <a href={video}><button><span>About Aisy<HiArrowNarrowRight /></span></button></a> */}
        </div>
        <div className="video-div" data-aos={window.innerWidth <= 800? "fade-up" : "fade-left" }>
          <img src={img} alt="_aisy_, Instagram user name" />
        </div>
        {/* <div className="video-div" data-aos={window.innerWidth <= 800? "fade-up" : "fade-left" }>
            <div className="bound">
                <video src={video} ref={viRef} style={{opacity: click? "20%" : "100%"}} download ></video>
                {click? <BsFillPlayCircleFill fontSize={60} onClick={toque} color='rgb(255, 255, 255)' /> : <BsFillPauseCircleFill fontSize={60} onClick={toque} style={{color: click? "rgb(255, 255, 255)" : "rgb(0, 0, 0, 0.4)"}} /> }
            </div>
                <div className="cover" style={{backgroundColor: click? "rgba(0, 0, 0, 0.671)" : "rgba(0, 0, 0, 0)"}}>
                    
                </div>
        </div> */}
      </div>
    </div>
  )
}

export default Header
