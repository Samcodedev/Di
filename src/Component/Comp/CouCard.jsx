import React, {useEffect} from 'react';
import './CouCard.css'
import AOS from 'aos'
import "aos/dist/aos.css"

const CouCard = (props) => {
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <div className='coucard' data-aos="fade-up">
            <div className="img-div">
                <img src={props.img} alt="" />
            </div>
            <div className="text-div">
                <h4>{props.course}</h4>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

export default CouCard;