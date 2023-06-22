import React, {useEffect} from 'react';
import './About.css'
import img from '../../img/IMG-20230620-WA0018.jpg'
import AOS from 'aos'
import "aos/dist/aos.css"

const About = () => {
    
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    }, [])

    return(
        <div className='about'>
            <img src={img} alt="About_avatar" data-aos={ window.innerWidth > 800  ? "fade-up" : "fade-down"} />
            <p data-aos="fade-left">Go Learn is Nigeria's foremost learning and earning platform.<br /> <br />
            Our goal is to eradicate poverty, and its offshoots like fraud and un-fulfillment by giving people financial education and helping them become financial literates.<br /> <br />
            People do not know, think about or act on making money and therefore they cannot be masters or even owners of it. We have the goal to in various ways, styles, methods and settings preach the gospel of financial emancipation and freedom.<br /> <br />
            Hence, our partnership with the European Business University! It needs no saying that business is an integral door to money making but not just that, a great knowledge of it and its management would help persons do quality and make more. <br /> <br />
            What we are doing by partnering with the EBU is to open the door of learning for those who want to learn to manage business and related fields well, while also scaling the third world fence and going international! <br /> <br />
            An international certification, from an international school, learning in a word class way, we believe, is a great way to start-for anyone.
            </p>
        </div>
    )
}

export default About;