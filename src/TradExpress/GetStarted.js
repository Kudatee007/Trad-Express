import React, { useRef, useState } from 'react'
import './GetStarted.css'
import { Link } from 'react-router-dom'


const GetStarted = ({username, setUsername}) => {
   const inputRef = useRef()
   const IndiRef = useRef()
   const BusiRef = useRef()
  
 
 
   function HandleBut2() {
     inputRef.current.placeholder = 'Full Name'
    if (inputRef.current.placeholder == 'Full Name') {
      IndiRef.current.style.background = 'white'
      BusiRef.current.style.background = '#E4E4E4'
    }else{
      IndiRef.current.style.background = '#E4E4E4'
      BusiRef.current.style.background = 'white'

    }
   }

   function HandleBut() {
     inputRef.current.placeholder = 'Business Name'
    if (inputRef.current.placeholder == 'Business Name') {
      BusiRef.current.style.background = 'white'
      IndiRef.current.style.background = '#E4E4E4'

      
    }else{
      BusiRef.current.style.background = '#E4E4E4'
      IndiRef.current.style.background = 'white'
      
    }
   }
  return (
    <div className='StartedGet'>
    <div className='GetStarted'>
        <h1>Welcome</h1>
        <div className='indiBusi'>
          <button ref={IndiRef} className='indi' onClick={() => {
            HandleBut2()
          }}>Individual</button>
          <button ref={BusiRef} className='busi' onClick={() => {
            HandleBut()
          }}>Business</button>
        </div>
        <form>
          <input type="text" placeholder='Username' onChange={(e) => {
           setUsername(e.target.value)
          }}/>
          <input type="text" placeholder='Full Name'
          ref={inputRef}/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Phone Nmber'/>
          <input type="text" placeholder='Referral Code (optional)'/>
        </form>
        <p className='clicKing'>
        By clicking the Sign Up button below, you agree to TradExpress <span>terms and service</span>
        </p>
        <Link to='/verifyMail'><button className='SignUpp'>Sign Up</button></Link>
        <div className='AlreadyC'>
          <p className='already'>Already have an account ?</p>
          <p className='alreadyHere'>Click here</p>
        </div>
    </div>
    </div>
  )
}

export default GetStarted