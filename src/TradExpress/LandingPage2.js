import React, { useRef, useState } from 'react'
import freelancer from './img/freelancer/cuate.svg'
import investment from './img/investment-data/amico.svg'
import payment from './img/mobile-payments/rafiki.svg'
import './LandingPage2.css'

const LandingPage2 = () => {
  const seeRef = useRef()
  const seeRefs = useRef()
  const [butN, setButN] = useState("See Less")

  function SeeLess() {
    if (butN == 'See Less'){
      seeRef.current.style.display = 'none'
      setButN('See More')
  
    } else {
      setButN('See Less')
      seeRef.current.style.display = 'grid'
    }

  }
  return (
    <div className='LandingPage2' ref={seeRefs}>
        <div className='landin'>
        <h1>Why do people get involved with Cryptocurrencies?</h1>
        <button onClick={SeeLess}>{butN}</button>
        </div>
        <div className='land' ref={seeRef}>
        <div className='payment'>
          <img src={payment} alt="" />
          <h1>Easy Mode of Payment</h1>
          <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
        </div>
        <div className='freelancer'>
          <img src={freelancer} alt="" />
          <h1>Financial Freedom</h1>
          <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
        </div>
        <div className='investment'>
          <img src={investment} alt="" />
          <h1>Investment</h1>
          <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
        </div>
        </div>
    </div>
  )
}

export default LandingPage2