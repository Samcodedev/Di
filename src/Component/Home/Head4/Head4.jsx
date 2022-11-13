import React from 'react';
import TextImg from '../../Comp/TextImg';
import '../Head2/Head2.css'
import img from '../../../img/Work time-rafiki.png'

const Head4 = () => {
    const data = [
        {
            question: "When is the registration closing?",
            answer: "Registration for the January session closes Jan 3rd, 2023 while the section begins mid Jan. 2023.",
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
        <div className='head2'>
            {comp}
        </div>
    )
}

export default Head4;