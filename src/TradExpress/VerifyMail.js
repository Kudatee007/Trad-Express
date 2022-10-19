import React from 'react'
import message from './img/messageicon.svg'
import './VerifyMail.css'

const VerifyMail = ({username}) => {
  return (
    <div className='VerifyMail'>
    <div className='Verify'>
        <h2>You're Almost In!</h2>
        <h1>Welcome {username}</h1>
        <img src={message} alt="" />
        <p className='kuda'>An activation link has been sent to Timilehinkudaisi01@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>
        <button>Sign Up</button>
        <div className='Here11'>
            <p className='here1'>Already have an account ?</p>
            <p className='here11'>Click here</p>
        </div>
    </div>
    </div>
  )
}

export default VerifyMail