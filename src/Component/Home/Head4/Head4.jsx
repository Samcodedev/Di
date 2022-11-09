import React from 'react';
import { 
    motion
} from 'framer-motion'
import Text_img from '../../Comp/Text_img';
import '../Head2/Head2.css'
import img from '../../../img/743ff79123af237c73b4814872341436_adobe_express.png'

const Head4 = () => {
    const data = [
        {
            question: "When is the registration closing?",
            answer: "Registration for the January section closes Jan 3rd, 2023 while the section begins mid Jan. 2023.",
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

export default Head4;