import React, {useEffect} from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import './ChartKuti.css'
import AOS from 'aos'
import "aos/dist/aos.css"

const ChartKuti = () => {
    
  useEffect(()=>{
      AOS.init()
      AOS.refresh()
  }, [])

  return (
    <div className='chartkuti' data-aos="fade-up">
        <a href="https://wa.me/message/3QGND6LVYP7KM1">
          <FaWhatsapp fontSize={30} />
          <p>Chart DOTUN</p>
        </a>
    </div>
  )
}

export default ChartKuti
