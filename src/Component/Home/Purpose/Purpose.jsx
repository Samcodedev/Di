import React from 'react';
import PurCard from '../../Comp/PurCard';
import './Purpose.css'
import { GiBookCover } from 'react-icons/gi'
import { FaCertificate } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { RiGlobalLine } from 'react-icons/ri'

const Purpose = () => {

    const data = [
        {
            icon: <GiBookCover fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "lorem lorem empum terh fetui sadiya eweh kinig oleren mulerwn"
        },
        {
            icon: <FaCertificate fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "lorem lorem empum terh fetui sadiya eweh kinig oleren mulerwn"
        },
        {
            icon: <MdOutlineWork fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "lorem lorem empum terh fetui sadiya eweh kinig oleren mulerwn"
        },
        {
            icon: <RiGlobalLine fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "lorem lorem empum terh fetui sadiya eweh kinig oleren mulerwn"
        }
    ]

    const cards = data.map((item) =>{
        return(
            <PurCard 
                icon={item.icon}
                content={item.content}
            />
        )
    })
    return(
        <div className='purpose'>
            <h2>Reasons to enroll for the European Business University scholarship</h2>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}

export default Purpose;