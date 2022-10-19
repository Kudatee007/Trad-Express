import React, { useRef, useState } from 'react'
import './InstantSell.css'


const InstantSell = () => {
  const [header5, setHeader5] = useState('Coin to Buy==')
  const BtnBuy = useRef()
  const BtnSell = useRef()


  function BuySells() {
    if (header5 == 'Coin to Sell==') {
      setHeader5('Coin to Buy==')
      BtnBuy.current.style.background = 'white'
      BtnSell.current.style.background = '#E4E4E4'
      
     }
    }

function SellBuys() {
    if (header5 == 'Coin to Buy==') {
      setHeader5('Coin to Sell==')
      BtnSell.current.style.background = 'white'
      BtnBuy.current.style.background = '#E4E4E4'
      
      
     }
    
  }
  return (
    <div className='InstantBuy'>
    <div className='InstantSell'>
        <h1>Buy/Sell Instantly</h1>
        <div className='BuySell'>
        <button ref={BtnBuy} className='Buy' onClick={BuySells}>Buy</button>
        <button ref={BtnSell} className='Sell' onClick={SellBuys}>Sell</button>
        </div>
        <div className='coinTo'>
        <h5>{header5}</h5>
        <select id="coins">
            <option value="">Bitcoin (BTC)</option>
            <option value="">Ethereum (ETC)</option>
            <option value="">Tether (USDT)</option>
            <option value="">USD coin (USDC)</option>
        </select>
        <h5>Currency</h5>
        <select id="coins">
            <option value="">US dollar (USD)</option>
            <option value="">Euro (EUR)</option>
            <option value="">Japanese yen (JPY)</option>
            <option value="">Pound sterling (GBP)</option>
            <option value="Naira (NGN)"></option>
        </select>
        <h5>Amount</h5>
        <input type="text" placeholder='USD: 3,000,000.00' className='usdMoney'/>
        </div>
        <div className='Continue11'>
        <button className='continue'>Continue</button>
        </div>
    </div>
    </div>
  )
}

export default InstantSell