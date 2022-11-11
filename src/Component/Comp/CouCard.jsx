import React from 'react';
import './CouCard.css'

const CouCard = (props) => {
    return(
        <div className='coucard'>
            <div className="img-div">
                <img src={props.img} alt="" />
            </div>
            <div className="text-div">
                <h4>{props.course}</h4>
                <span>${props.price}</span>
            </div>
        </div>
    )
}

export default CouCard;