import React from 'react';
import { 
    motion
} from 'framer-motion'
import TextImg from '../../Comp/TextImg';
import img from '../../../img/Select-rafiki.png'

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
                anim="-100"
            />
        )
    })
    return(
        <motion.div
        initial={{x: 400, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once:false, amount: 0.3}}
        transition={{
            type: "spring",
            damping: "20"
        }}  className='head3'>
            {comp}
        </motion.div>
    )
}

export default Head3;