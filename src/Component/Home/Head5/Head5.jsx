import React from 'react';
import { 
    motion
} from 'framer-motion'
import TextImg from '../../Comp/TextImg';
import img from '../../../img/a611e453d9e5a5961c364cc06195b3fa.jpg'

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