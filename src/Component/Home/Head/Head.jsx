import React from 'react';
import './Head.css'
import TextImg from '../../Comp/TextImg';
import img from '../../../img/IMG-20230620-WA0018.jpg'

const Head = () => {

    const data = [
        {
            question: "Can the certificate be used anywhere?",
            answer: "Yes, the certificate can be used anywhere. it's globally recognized allover the world.",
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
                imgTransition="fade-up"
                textTransition="fade-right"
            />
        )
    })

    return(
        <div  className='head'>
            {comp}
        </div>
    )
}

export default Head;