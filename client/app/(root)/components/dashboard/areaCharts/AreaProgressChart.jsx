import { useState, useEffect } from "react";
import axios from 'axios'


  
  const AreaProgressChart = () => {
    const [, setPriceN] = useState(undefined)

    useEffect(() => {
      //set url
      const url = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ngn'
  
      // https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=zar
      // https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=zar
      // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=avax
      // https://api.dexscreener.com/latest/dex/pairs/avalanche/0x1273227c0d368a65eb7942fa02ef68dbda466a26
      // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network
      // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth
  
      //api call
      axios.get(url).then(response => {
        const priceZ = response.data.tether.zar
        setPriceN(priceZ)
        console.log(response.data.tether.zar)
  
      }).catch(error => {
        console.log(error)
      })
    }, [])


    const data = [
      {
        id: 1,
        name: "Ghana: Cedi", //ghs
        percentValues: 0.68, //13.04,
      },
      {
        id: 2,
        name: "Botswana: Pula", //bwp
        percentValues: 0.72, //13.71,
      },
      {
        id: 3,
        name: "Zambia: Kwacha", // zmw
        percentValues: 1.38, //26.27,
      },
      {
        id: 4,
        name: "Kenya: KES",
        percentValues: 6.96, //132.50,
      },
      
      {
        id: 5,
        name: "Nigeria: Naira", //ngn
        percentValues: 74.16, //1410.94
      },
    ];


    return (
      <div className="progress-bar">
        <div className="progress-bar-info">
          <h4 className="progress-bar-title">Exchange Rates to ZAR</h4>
        </div>
        <div className="progress-bar-list">
          {data?.map((progressbar) => {
            return (
              <div className="progress-bar-item" key={progressbar.id}>
                <div className="bar-item-info">
                  <p className="bar-item-info-name">{progressbar.name}</p>
                  <p className="bar-item-info-value">
                    {progressbar.percentValues}
                  </p>
                </div>
                <div className="bar-item-full">
                  <div
                    className="bar-item-filled"
                    style={{
                      width: `${progressbar.percentValues}%`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default AreaProgressChart;