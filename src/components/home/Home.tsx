import React from 'react'
import "./home.css"
import Lottie from "lottie-react"
import dev from "../../images/dev.json"
import CustomTypeWriter from './widgets/CustomTypeWriter'
import OurStyle from './widgets/OurStyle'
import ContactButton from './widgets/ContactButton'

import { GiTakeMyMoney } from "react-icons/gi"
import { MdAutoGraph } from "react-icons/md"
import { BsFillCalendar2CheckFill } from "react-icons/bs"
import { IoIosSpeedometer } from "react-icons/io"

const ourStyle = [
  {
    icon: <IoIosSpeedometer />,
    title: "Fast Development"
  },
  {
    icon: <MdAutoGraph />,
    title: "Scalable Apps"
  },
  {
    icon: <BsFillCalendar2CheckFill />,
    title: "on Time Delivery"
  },
  {
    icon: <GiTakeMyMoney />,
    title: "Affordable Cost"
  },
];

const Home = () => {
  return (
    <header className='home-container' id='home'>
      <section className='title'>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <h1>NxtGen <span>Rocket</span></h1>
        </div>
        <h5>Expect Nothing less than Xtreme perfect</h5>
        <CustomTypeWriter />
        <div className='bottom-container'>
          <h4 style={{margin: 0}}>We are <span>X</span>tremly <span>D</span>edicated to deliver </h4>
          <div className="handle-our-style">
            {
              ourStyle.map((e) => {
                return <OurStyle props={e} />
              })
            }
          </div>
          <a className="contact-button" href='#contacts' >
            Contact Us
          </a>
        </div>
      </section>
      <section className='dev-lottie'>
        <Lottie animationData={dev} />
      </section>
    </header>
  )
}

export default Home