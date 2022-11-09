import React from 'react';
import '../Comp/Text_img.css'
import { 
    motion
} from 'framer-motion'
import { BsJournalBookmark } from 'react-icons/bs'

const Text_img = (props) => {
    let first = "rgba(2, 2, 31, 0.57)"
    let second = "rgb(2, 2, 31)"
    return(
        <div className='text-img'>
            <div className="text-div">
                <span>About EBU scholarship with Golearn.</span>
                <motion.h2
                initial={{ x: props.anim, color: first }}
                animate={{ x: 0, color: second }}
                transition={{
                    type: "spring",
                    damping: "20",
                    delay: 0.2
                }}
                >{props.question}</motion.h2>
                <p>{props.answer}</p>
                <button><span>Click to Enroll <BsJournalBookmark/></span></button>
            </div>
            <div className="img-div">
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

export default Text_img;