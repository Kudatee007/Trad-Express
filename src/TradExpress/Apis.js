import React, {useEffect, useState} from 'react'
import './Apis.css'
import redarrow from './img/redarrow.png'
import greenarrow from './img/greenarrow.png'

const Apis = () => {
    const [data, setData] = useState({})
    const [fetching, setFetching] = useState(false)
    const [btc, setBtc] = useState('')
    const [eth, setEth] = useState('')
    const [usdt, setUsdt] = useState('')
    const [usdc, setUsdc] = useState('')
    const [bnb, setBnb] = useState('')


    useEffect(() => {
      setTimeout(() => {
        
        const Chart = async() => {
            let respond = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
            let jsonData =await respond.json()
            setData(jsonData.data)
            setFetching(true)
            console.log(jsonData.data[1]);
            setBtc(jsonData.data[0])
            setEth(jsonData.data[1])
            setUsdt(jsonData.data[2])
            setUsdc(jsonData.data[3])
            setBnb(jsonData.data[4])
            
          } 
          


        Chart()
      }, 1000);

    }, [])

  return (
    <div className='apis'>
      <div className='btc1'>
        <div className='btc11'>
           <h1>{btc.name}</h1>
          <div className='btc22'>
           <p>{btc.percent_change_1h}</p>
           <img src={redarrow} alt="" />
          </div>
        </div>
           <h2>{`${btc.price_usd} /USD`}</h2>
      </div>

      <div className='eth1'>
        <div className='eth11'>
           <h1>{eth.name}</h1>
          <div className='eth22'>
           <p>{eth.percent_change_1h}</p>
           <img src={greenarrow} alt="" />
          </div>
        </div>
           <h2>{`${eth.price_usd} /USD`}</h2>
      </div>

      <div className='usdt1'>
        <div className='usdt11'>
           <h1>{usdt.name}</h1>
          <div className='usdt22'>
           <p>{usdt.percent_change_1h}</p>
           <img src={greenarrow} alt="" />
          </div>
        </div>
           <h2>{`${usdt.price_usd} /USD`}</h2>
      </div>

      <div className='usdc1'>
        <div className='usdc11'>
           <h1>{usdc.name}</h1>
          <div className='usdc22'>
           <p>{usdc.percent_change_1h}</p>
           <img src={redarrow} alt="" />
          </div>   
        </div>
           <h2>{`${usdc.price_usd} /USD`}</h2>
      </div>

      
        <div className='bnb11'>
           <h1>{bnb.name}</h1>
           <h2>{`${bnb.price_usd} /USD`}</h2>
      </div>
    </div>
  )
}

export default Apis