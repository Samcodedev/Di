import React from 'react'
import './Service.css'

const Service = (props) => {
  return (
    <div className='service'>
      {props.icon}
      <h4>{props.content}</h4>
    </div>
  )
}

export default Service
