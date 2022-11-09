import React from 'react';
import './Pur_card.css'
import { GiBookCover } from 'react-icons/gi'

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