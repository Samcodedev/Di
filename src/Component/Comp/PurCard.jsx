import React from 'react';
import './PurCard.css'

const Pur_card = (props) => {
    return(
        <div className='pur-card'>
            <div className="img-div">
                {props.icon}
            </div>
            <div className="text-div">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Pur_card;