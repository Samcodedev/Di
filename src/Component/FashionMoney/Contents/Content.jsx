import React from 'react'
import Service from '../../Comp/Service'
import './Content.css'
import img1 from '../Asset/IMG-20230702-WA0007.jpg'
import img2 from '../Asset/IMG-20230629-WA0030.jpg'
import img3 from '../Asset/IMG-20230620-WA0020.jpg'
import img4 from '../Asset/IMG-20230702-WA0008.jpg'
import img5 from '../Asset/IMG-20230702-WA0009.jpg'
import img6 from '../Asset/IMG-20230702-WA0010.jpg'
import img7 from '../Asset/IMG-20230702-WA0011.jpg'
import img8 from '../Asset/IMG-20230629-WA0029.jpg'
import img9 from '../Asset/IMG-20230629-WA0028.jpg'
import img10 from '../Asset/IMG-20230629-WA0025.jpg'
import img11 from '../Asset/IMG-20230629-WA0026.jpg'
import img12 from '../Asset/IMG-20230629-WA0024.jpg'

import {BsAwardFill} from 'react-icons/bs'
import {IoIosColorWand} from 'react-icons/io'
import {GiTakeMyMoney} from 'react-icons/gi'
import {HiOutlineLightBulb} from 'react-icons/hi'

const Content = () => {
  const data = [
    {
      icon: <BsAwardFill fontSize={80} color='#fff' />,
      content: "Valuable"
    },
    {
      icon: <IoIosColorWand fontSize={80} color='#fff' />,
      content: "Creativity"
    },
    {
      icon: <GiTakeMyMoney fontSize={80} color='#fff' />,
      content: "Profitable"
    },
    {
      icon: <HiOutlineLightBulb fontSize={80} color='#fff' />,
      content: "Innovative"
    }
  ]

  const card = data.map((item) =>{
    return(
      <Service 
        icon={item.icon}
        content={item.content}
      />
    )
  })
  return (
    <div className='content'>
      <div className="sub-content">
        <div className="service-container">
          {card}
        </div>
        <h4>Fashion in Nigeria</h4>
        <p>Some of you may already know her, but incase you don't, you can look her up on Instagram, all the explanation you will need are there. Incase you want to know how the conversation ended, check the picture below.</p>
        <div className="img-div">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <p>Prior to this time. I did some things, but got no response from any of them.</p>
        <p>There was one i got a response from but they weren't willing to pay as much as i thaught i deserved, so i didn't take it. Then few months after then, i got a text. Incase you're wondering how this ended...</p>
        <div className="img-div">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
        <p>I know you think all of this is over but let me tell you about one more thing. In June last year, we held the first batch of physical illustration course for 45,000 and guess how many students we had..?</p>
        <div className="img-div">
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <p>4 students!!! 'Not bad' you will say, but i wasn't satisfied so i went back to the drawing board, added some things and we organized another class in November. check the picture below to see the flier and the number of students.</p>
        <div className="img-div">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
        </div>
        <p>Lol yes that's right we had 3 students, that's one number below the previous batch.</p>
        <p>I'm not one to accept defeat, I know there was something we were not doing right, so i did my assignment and i remember talking to my team members earlier in one of our meeting this year, that we will surpass the sum of all students we had in 2022 (7 students). And guess what we did? </p>
        <p>We organized another class, and this time we were able to create our course outline into 4 classes, and guess how many students we had...</p>
        <p>Yes, you counted that correctly. We had 11 students, and even note that we packed the classes with more features and balled it down from 5 classes in 2022, to 4 classes.</p>
        <div className="img-div">
          <img src={img12} alt="" />
        </div>
        <p>Now, you must be wondering how we were able to do these, how i went from applying to get gigs to having high profiled clients reaching out to me, or has Dotun Collins Studio went from struggling to get students, deep to having more than 2X the amount of students from previous year, despite an increament of course fee.</p>
        
      </div>
    </div>
  )
}

export default Content
