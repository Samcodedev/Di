import React from 'react';
import { 
    motion
} from 'framer-motion'
import Text_img from '../../Comp/Text_img';
import img from '../../../img/403689fe701fedda5ceb6f82c7a88992_adobe_express.png'

const Head5 = () => {

    const data = [
        {
            question: "How do i pay?",
            answer: "In the registration form you will be filling there will be a payment instruction. Make payment, pick courses, sign up and send us the proof of payment.",
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
        }}  className='head5'>
            {comp}
        </motion.div>
    )
}

export default Head5;