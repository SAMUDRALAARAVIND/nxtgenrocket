import React from 'react'

const OurStyle = ({props}) => {
  return (
    <article className = "ourstyle-article">
      <div className='ourstyle-icon'>
        {props.icon}
      </div>
      <h5>{props.title}</h5>
    </article>
  )
}

export default OurStyle