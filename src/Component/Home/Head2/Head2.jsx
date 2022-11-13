import React from 'react';
import TextImg from '../../Comp/TextImg';
import './Head2.css'
import { 
    motion
} from 'framer-motion'
import img from '../../../img/Working remotely-rafiki.png'

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
                anim="100"
            />
        )
    })


    return(
        <motion.div
        initial={{x: 200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once:false, amount: 0.3}}
        transition={{
            type: "spring",
            damping: "20"
        }} 
        className='head2'>
            {comp}
        </motion.div>
    )
}

export default Head2;