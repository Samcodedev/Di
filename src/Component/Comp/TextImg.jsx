import React from 'react';
import './TextImg.css'
import { BsJournalBookmark } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Text_img = (props) => {
    return(
        <div className='text-img'>
            <div className="text-div">
                <span>About EBU scholarship with Golearn.</span>
                <h2>{props.question}</h2>
                <p>{props.answer}</p>
                <Link to="/register"><button><span>Click to Enroll <BsJournalBookmark/></span></button></Link>
            </div>
            <div className="img-div">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Text_img;