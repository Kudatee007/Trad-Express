import React from 'react'
import app from './img/appstore.png'
import play from './img/googleplay.png'
import './LandingPage4.css'
import { Link } from 'react-router-dom'
const LandingPage4 = () => {
  return (
    <div className='LandingPage4'>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h1>Create your account for free and start trading today!</h1>
        <Link to='/getStarted'><button className='buTT'>Get Started</button></Link>
        <div className='appPlay'>
        <img src={app} alt="" className='appp'/>
        <img src={play} alt="" className='plaay'/>
        </div>
    </div>
  )
}

export default LandingPage4