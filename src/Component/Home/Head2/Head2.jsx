import React from 'react';
import TextImg from '../../Comp/TextImg';
import './Head2.css'
import { 
    motion
} from 'framer-motion'
import img from '../../../img/403689fe701fedda5ceb6f82c7a88992_adobe_express.png'

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
        initial={{x: 400}}
        animate={{x: 0}} 
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