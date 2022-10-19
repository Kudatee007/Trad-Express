import React from "react";
import profile from './img/profile-pic/cuate.png'
import piggy from './img/piggy-bank/rafiki.png'
import bitcoin from './img/bitcoin/cuate.png'
import one from './img/1.png'
import two from './img/2.png'
import three from './img/3.png'
import './LandingPage3.css'

const LandingPage3 = () => {
  return (
    <div className="LandingPage3">
      <h1 className="buySell">Buy and Sell your Cryptocurrency in 3 simple steps</h1>
      <p className="buySellP">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
        faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris
        ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam
        consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio
        molestie amet.
      </p>
      <div className="ones">
        <div className="one">
            <img src={one} alt="" />
            <div>
            <h3>Create a free Account</h3>
            <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
            </div>
        </div>
        <img src={profile} alt="" />
      </div>
      <div className="twos">
        <img src={piggy} alt="" />
        <div className="two">
            <img src={two} alt="" />
            <div>
            <h3>Deposit</h3>
            <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
            </div>
        </div>
      </div>
      <div className="threes">
        <div className="three">
            <img src={three} alt="" />
            <div>
            <h3>Buy/ Sell Crypto</h3>
            <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
            </div>
        </div>
        <img src={bitcoin} alt="" />
      </div>
    </div>
  );
};

export default LandingPage3;
