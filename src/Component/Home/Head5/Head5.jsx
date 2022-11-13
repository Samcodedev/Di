import React from 'react';
import { 
    motion
} from 'framer-motion'
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
                anim="-100"
            />
        )
    })
    return(
        <motion.div
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once:false, amount: 0.3}}
        transition={{
            type: "spring",
            damping: "20"
        }}  className='head'>
            {comp}
        </motion.div>
    )
}

export default Head5;