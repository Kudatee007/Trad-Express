import React from 'react'
import './Login.css'

const Login = () => {
  return (  
    <div className='LoginLogin'>
    <div className='Login'>
        <h1>Welcome Back</h1>
        <form>
          <input type="text" placeholder='Username' className='inp'/>
          <input type="text" placeholder='Password' className='inp'/>
          <div className='checkBox'>
           <div className='remFor'>
           <input type="checkbox" id='rp'/>
           <label htmlFor="rp">Remember Password</label>
           </div>
           <p className='forgot'>Forgot Password?</p>
          </div>
          <button className='btnlogIn'>Log In</button>
          <div className='newClick'>
           <p className='newUser'>New User ?</p>
           <p className='clickHere'>Click here</p>
          </div>        
        </form>    
    </div>
    </div>
  )
}

export default Login