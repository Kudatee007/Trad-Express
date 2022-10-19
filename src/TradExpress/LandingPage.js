import React from 'react'
import backImg from './img/Group 127.png'
import './LandingPage.css'
import cc from './img/cc.svg'
import dd from './img/dd.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    // <div className='landing'>
    //    <div className='landingimg'>
    //     <img src={backImg} alt="" className='imgg'/>
    //    </div>
    //    <div>
    //     <h1 className='hh1'>Buy, sell and manage your Crypto on TradExpress</h1>
    //     <p className='ppp'>Easily Trade  Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
    //     <Link to='/getStarted'><button className='btnGet'>Get Started</button></Link>
    //     <div className='ccc'>
    //     <img src={cc} alt="" className='ccc1'/>
    //     <img src={dd} alt="" className='ccc2'/>
    //     </div>
    //    </div>
    // </div>
    <div className='landing'>
      <div>
        <h1 className='hh1'>Buy, sell and manage your Crypto on TradExpress</h1>
       <p className='ppp'>Easily Trade  Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
        <Link to='/getStarted'><button className='btnGet'>Get Started</button></Link>
        <div className='ccc'>
        <img src={cc} alt="" className='ccc1'/>
        <img src={dd} alt="" className='ccc2'/>
        </div>
       </div>
       <img src={backImg} alt="" className='imgg'/>

    </div>
  )
}

export default LandingPage