import React from 'react';
import './Head.css'
import { 
    motion
} from 'framer-motion'
import Text_img from '../../Comp/Text_img';
import img from '../../../img/743ff79123af237c73b4814872341436_adobe_express.png'

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
            <Text_img 
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