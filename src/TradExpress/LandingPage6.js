import React from 'react'
import './LandingPage6.css'
import twitter from './img/twittericon.png'
import telegram from './img/telegramicon.png'
import whatsapp from './img/whatsappicon.png'
import facebook from './img/facebookicon.png'
import clogo from './img/clogo.png'

const LandingPage6 = () => {
  return (
    <div className='Page6'>
    <div className='LandingPage6'>
        <div>
            <h3>Products</h3>
            <p>Bitcoin</p>
            <p>Alt</p>
            <p>Fiat</p>
            <p>Refill</p>
            <p>P2P</p>
        </div>
        <div>
            <h3>Learn</h3>
           <p>Blog</p>
           <p>Help Center</p>
        </div>
        <div id='Pany'>
            <h3>Contact</h3>
            <p className='hell'>hello@tradexpress.com</p>
            <p className='hell'>support@tradexpress.com</p>
            <div className='iconis'>
            <img src={twitter} alt="" />
            <img src={telegram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={facebook} alt="" />
            </div>
        </div>
        
        <div className='comPany' id='Pany'>
            <h3>Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>
        <div className='comPany' id='coM'>
            <h3>Legal</h3>
            <p>Privacy Policy</p>
            <p>Anti-Money Laundering</p>
            <p>Terms and Conditions</p>
        </div>
    </div>
        <footer className='foot'>
            <p>&copy; 2021 Tradexpress Technologies. All Right Reserved</p>
        </footer>
    </div>
  )
}

export default LandingPage6