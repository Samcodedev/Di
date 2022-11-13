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
            content: "The  scholarship program is fully funded by the European government at Luxembourg."
        },
        {
            icon: <FaCertificate fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "The 14-week Program is easy to follow through, complete and worthwhile for its certification at the end."
        },
        {
            icon: <MdOutlineWork fontSize="50px" color='rgb(22, 70, 228)' />,
            content: "Having the certificate of the European Business University on your CV would be a boost to your career!"
        },
        {
            icon: <RiGlobalLine fontSize="50px" color='rgb(22, 70, 228)' />,
            content: " The European Business University is one of the most renowned business Universities in the world."
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