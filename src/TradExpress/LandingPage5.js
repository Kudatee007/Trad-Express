import React from 'react'
import union from './img/Union.png'
import './LandingPage5.css'
import group from './img/Group 208.png'
import ireti from './img/ireti.svg'
import bayo from './img/bayo.svg'
import olagoke from './img/olagoke.svg'

const LandingPage5 = () => {
  return (
    <div className='LandLand'>
        <h1>Customer’s Review</h1>
    <div className='LandingPage5'>
        <div className='union1'>
         <div className='union11'>
         <img src={group} alt="" className='grp'/>
          <p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
         </div>
          <img src={union} alt="" className='im'/>
          <div className='ireti'>
           <img src={ireti} alt="" />
           <div>
            <h3>Ireti</h3>
            <p>Nigeria</p>
           </div>
          </div>
        </div>
        <div className='union2'>
         <div className='union22'>
          <img src={group} alt="" className='grp'/>
          <p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
         </div>
          <img src={union} alt="" className='im'/>
          <div className='bayo'>
            <img src={bayo} alt="" />
            <div>
                <h3>Bayo</h3>
                <p>USA</p>
            </div>
          </div>
        </div>
        <div className='union3'>
         <div className='union33'>
          <img src={group} alt="" className='grp'/>
          <p>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.</p>
         </div>
          <img src={union} alt="" className='im'/>
          <div className='olagoke'>
            <img src={olagoke} alt="" />
            <div>
                <h3>Olagoke</h3>
                <p>Nigeria</p>
            </div>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default LandingPage5