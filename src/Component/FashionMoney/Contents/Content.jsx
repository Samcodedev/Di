import React from 'react'
import Service from '../../Comp/Service'
import './Content.css'
import img1 from '../Asset/IMG-20230629-WA0030.jpg'
import img2 from '../Asset/IMG-20230620-WA0020.jpg'
import img3 from '../Asset/IMG-20230702-WA0008.jpg'
import img4 from '../Asset/IMG-20230702-WA0009.jpg'
import img5 from '../Asset/IMG-20230702-WA0010.jpg'
import img6 from '../Asset/IMG-20230702-WA0011.jpg'
import img7 from '../Asset/IMG-20230620-WA0023.jpg'
import img8 from '../Asset/IMG-20230620-WA0022.jpg'
import img9 from '../Asset/IMG-20230629-WA0029.jpg'
import img10 from '../Asset/IMG-20230629-WA0028.jpg'
import img11 from '../Asset/IMG-20230629-WA0027.jpg'
import img12 from '../Asset/IMG-20230629-WA0026.jpg'
import img13 from '../Asset/IMG-20230629-WA0025.jpg'
import img14 from '../Asset/IMG-20230629-WA0024.jpg'

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
        <p>Some of you may already know her, but in case you don't, you can look her up on Instagram. All the explanations you will need are there. If you want to know how the conversation ended, check the picture below.</p>
        <div className="img-div">
          <img src={img1} alt="_Aisy_ student" />
          <img src={img2} alt="_Aisy_ student" />
        </div>
        <p>Prior to this time, I did some things</p> 
        <div className="img-div">
          <img src={img3} alt="CV application" />
          <img src={img4} alt="CV application" />
        </div>
        <p>but received no response from any of them. There was one I received a response from, but they weren't willing to pay as much as I thought I deserved, so I didn't take it. Then, a few months later, I received a text.</p>
        <div className="img-div">
          <img src={img5} alt="Iris response from CIworkshop. IG" />
          <img src={img6} alt="Her follow up text on WhatsApp" />
        </div>
        <p>In case you're wondering how this ended...</p>
        <div className="img-div">
          <img src={img7} alt="Dotun beside claire" />
          <img src={img8} alt="dotun teaching" />
        </div>
        <p>I know you think all of this is over, but let me tell you about one more thing. In June last year, we held the first batch of a physical illustration course for 45,000, and guess how many students we had...?</p>
        <div className="img-div">
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
        <p>4 students!!! "Not bad," you might say, but I wasn't satisfied. So, I went back to the drawing board, made some additions, and organized another class in November. Check the picture below to see the flyer and the number of students.</p>
        <div className="img-div">
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
        <p>Lol, yes, that's right! We had 3 students, just one less than the previous batch.</p>
        <p>I'm not one to accept defeat. I knew there was something we were not doing right, so I did my assignment. I remember discussing with my team members in one of our meetings earlier this year, stating our goal to surpass the total number of students we had in 2022 (7 students). And guess what?</p>
        <div className="img-div">
          <img src={img13} alt="" />
        </div>
        <p>We organized another class, and this time we divided our course outline into 4 classes. And guess how many students we had...</p>
        <div className="img-div">
          <img src={img14} alt="" />
        </div>
        <p>Yes, you counted that correctly. We had 11 students. Not only that, but we also added more features and streamlined it from 5 classes in 2022 to 4 classes.</p>
        <p>Now, you must be wondering how we were able to achieve these results. How did I transition from applying to get gigs to having high-profile clients reaching out to me? And how did Dotun Collins Studio go from struggling to attract students to having more than double the number of students compared to the previous year, even with an increase in course fees?</p>
      </div>
    </div>
  )
}

export default Content
