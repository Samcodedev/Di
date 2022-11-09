import React from 'react';
import { 
    motion
} from 'framer-motion'
import Text_img from '../../Comp/Text_img';
import img from '../../../img/fdf29691d85e224cc6ddd59f8b6392fb_adobe_express.png'

const Head3 = () => {
    const data = [
        {
            question: "Can i pick one or multiple courses?",
            answer: "Yes, you can pick multiple courses. Taking multiple courses attracts multiple payments for each course taken.",
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
        }}  className='head3'>
            {comp}
        </motion.div>
    )
}

export default Head3;