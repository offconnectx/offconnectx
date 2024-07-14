import AreaCard from "./AreaCard";
import "./AreaCards.scss";

import { useState, useEffect } from "react";
//import { BsInfoCircle } from "react-icons/bs";
//import zar from '../../../assets/u4.png';
import axios from 'axios'
import { useWallet } from "@/app/(root)/hooks/useWallet";

const AreaCards = () => {
  const [balance, setBalance] = useState(0);
  const [, setError] = useState("");
  const wallet = useWallet;



  const [priceZ, setPriceZ] = useState(undefined)



  useEffect(() => {
    //set url
    // const url = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=zar'

    // https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=zar
    // https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=zar
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=avax
    // https://api.dexscreener.com/latest/dex/pairs/avalanche/0x1273227c0d368a65eb7942fa02ef68dbda466a26
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth

    //api call
    // axios.get(url).then(response => {
    //   // const priceZ = response.data.tether.zar
      
    //   // console.log(response.data.tether.zar)

    // }).catch(error => {
    //   console.log(error)
    // })

    wallet.getBalance().then((b) => {
    setBalance(b);
    }); 
  }, [balance])

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "UZAR",
          value: Number(balance * 8.20 * 17.18).toFixed(1),
          text: "Address",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "TonCoin",
          value: Number(balance).toFixed(2),
          text: "Available",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Exchange Rate",
          value: priceZ,
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;