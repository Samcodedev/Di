import React from 'react';
import TextImg from '../../Comp/TextImg';
import './Head2.css'
import img from '../../../img/IMG-20230620-WA0022.jpg'

const Head2 = () => {
    const data = [
        {
            question: "How flexible is the program?",
            answer: "Very flexible, All lectures are always recorded and can be accessed at your convenience during the week, real time class hold once in a week with a weekly task.",
            link: ""
        }
    ]

    const comp = data.map((item) =>{
        return(
            <TextImg 
                question={item.question}
                answer={item.answer}
                link={item.link}
                img={img}
                imgTransition="zoom-in-up"
                textTransition="fade-left"
            />
        )
    })


    return(
        <div className='head2'>
            {comp}
        </div>
    )
}

export default Head2;