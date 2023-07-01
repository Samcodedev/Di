import React, {useEffect} from 'react';
import PurCard from '../../Comp/PurCard';
import './Purpose.css'
import { GiBookCover } from 'react-icons/gi'
import { FaCertificate } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { RiGlobalLine } from 'react-icons/ri'
import AOS from 'aos'
import "aos/dist/aos.css"

const Purpose = () => {
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])


    const data = [
        {
            icon: <GiBookCover fontSize="50px" color='rgb(53, 53, 53)' />,
            content: "The  scholarship program is fully funded by the European government at Luxembourg."
        },
        {
            icon: <FaCertificate fontSize="50px" color='rgb(53, 53, 53)' />,
            content: "The 14-week Program is easy to follow through, complete and worthwhile for its certification at the end."
        },
        {
            icon: <MdOutlineWork fontSize="50px" color='rgb(53, 53, 53)' />,
            content: "Having the certificate of the European Business University on your CV would be a boost to your career!"
        },
        {
            icon: <RiGlobalLine fontSize="50px" color='rgb(53, 53, 53)' />,
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
        <div className='purpose' data-aos="fade-up">
            <h2>Reasons to enroll for Fashion Illustration with Dotun Collins</h2>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}

export default Purpose;