import React from 'react';
import './Head.css'
import { 
    motion
} from 'framer-motion'
import TextImg from '../../Comp/TextImg';
import img from '../../../img/Certification-rafiki.png'

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
                anim="-100"
            />
        )
    })

    return(
        <motion.div
        initial={{x: -400}}
        animate={{x: 0}} 
        transition={{
            type: "spring",
            damping: "20"
        }}  className='head'>
            {comp}
        </motion.div>
    )
}

export default Head;