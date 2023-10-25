import React from 'react'
import {Typewriter , Cursor} from "react-simple-typewriter";

const CustomTypeWriter = () => {
   const words = ["Full Stack Applications" ,"Andriod Apps" , "Ios Apps" , "Web Applications" ]
  return (
    <div className="type-writer-container">
        <h2>
            <div >
            We <span className='static-text'>X</span>cel in <span className='static-text'>D</span>eveloping top notch
            </div>
            <span>
                {
                    <Typewriter
                    words={words}
                    loop={false}
                    typeSpeed={100}
                    deleteSpeed={50}
                    cursor
                    delaySpeed={1000}
                  />
                }</span>
            {/* <Cursor/> */}
        </h2>
    </div>
  )
}

export default CustomTypeWriter