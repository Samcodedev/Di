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
        <p>Some of you may already know her, but in case you don't, you can look her up on Instagram. All the explanations you will need are there. If you want to know how the conversation ended, check the picture below.</p>
        <div className="img-div">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <p>Prior to this time, I did some things but received no response from any of them. There was one I received a response from, but they weren't willing to pay as much as I thought I deserved, so I didn't take it. Then, a few months later, I received a text. In case you're wondering how this ended...</p>
        <div className="img-div">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
        <p>I know you think all of this is over, but let me tell you about one more thing. In June last year, we held the first batch of a physical illustration course for 45,000, and guess how many students we had...?</p>
        <div className="img-div">
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <p>4 students!!! "Not bad," you might say, but I wasn't satisfied. So, I went back to the drawing board, made some additions, and organized another class in November. Check the picture below to see the flyer and the number of students.</p>
        <div className="img-div">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
        </div>
        <p>Lol, yes, that's right! We had 3 students, just one less than the previous batch.</p>
        <p>I'm not one to accept defeat. I knew there was something we were not doing right, so I did my assignment. I remember discussing with my team members in one of our meetings earlier this year, stating our goal to surpass the total number of students we had in 2022 (7 students). And guess what? We did it!</p>
        <p>We organized another class, and this time we divided our course outline into 4 classes. And guess how many students we had...</p>
        <p>Yes, you counted that correctly. We had 11 students. Not only that, but we also added more features and streamlined it from 5 classes in 2022 to 4 classes.</p>
        <div className="img-div">
          <img src={img12} alt="" />
        </div>
        <p>Now, you must be wondering how we were able to achieve these results. How did I transition from applying to get gigs to having high-profile clients reaching out to me? And how did Dotun Collins Studio go from struggling to attract students to having more than double the number of students compared to the previous year, even with an increase in course fees?

Well, it all comes down to a combination of strategic changes and improvements we made. Firstly, I focused on enhancing my skills and expertise, constantly refining and upgrading my craft. This allowed me to deliver exceptional work and build a strong reputation in the industry.

Additionally, I revamped our marketing strategies. We developed a comprehensive online presence, optimizing our social media platforms, and utilizing targeted advertising to reach our desired audience. This helped us attract the attention of high-profile clients and generated more interest in our courses.

Furthermore, we prioritized student satisfaction and success. We incorporated valuable feedback from previous students to improve our course structure, materials, and teaching methods. By providing a top-notch learning experience, word-of-mouth referrals started to pour in, contributing to the increased number of students.

Lastly, we positioned ourselves as industry leaders. Through networking, attending relevant events, and showcasing our expertise, we gained credibility and visibility within the industry. This, in turn, attracted more students who were eager to learn from reputable professionals.

By implementing these strategic changes, we were able to achieve remarkable growth and exceed our goals. It's been an exciting journey, and we're grateful for the support and opportunities that have come our way.</p>
        
      </div>
    </div>
  )
}

export default Content
