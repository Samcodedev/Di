import React, {useEffect} from 'react';
import './TextImg.css'
import { BsJournalBookmark } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"

const Text_img = (props) => {

    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <div className='text-img'>
            <div className="text-div" data-aos={props.textTransition} data-aos-delay="50">
                <span>Fashion Illustration With Dotun Collins</span>
                <h2>{props.question}</h2>
                <p>{props.answer}</p>
                <Link to="/register"><button><span>Click to Enroll <BsJournalBookmark/></span></button></Link>
            </div>
            <div className="img-div" data-aos={props.imgTransition}>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Text_img;