import React from 'react';
import TextImg from '../../Comp/TextImg';
import img from '../../../img/Select-rafiki.png'
import '../Head/Head.css'

const Head3 = () => {
    const data = [
        {
            question: "Can I pick one or multiple courses?",
            answer: "Yes, you can pick multiple courses. Taking multiple courses attracts multiple payments for each course taken.",
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
            />
        )
    })
    return(
        <div className='head'>
            {comp}
        </div>
    )
}

export default Head3;