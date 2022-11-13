import React from 'react';
import TextImg from '../../Comp/TextImg';
import img from '../../../img/Mobile payments-rafiki.png'
import '../Head/Head.css'

const Head5 = () => {

    const data = [
        {
            question: "How do I pay?",
            answer: "In the registration form you will be filling there will be a payment instruction. Make payment, pick courses, sign up and send us the proof of payment.",
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

export default Head5;