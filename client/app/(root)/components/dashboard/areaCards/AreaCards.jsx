import AreaCard from "./AreaCard";
import "./AreaCards.scss";

import { useState, useEffect } from "react";
//import { BsInfoCircle } from "react-icons/bs";
//import zar from '../../../assets/u4.png';
import axios from 'axios'
import { useWallet } from "@/app/(root)/hooks/useWallet";

const AreaCards = ({balance}) => {
  const [error, setError] = useState("");
  const wallet = useWallet;



  const [priceZ, setPriceZ] = useState(undefined)



  // useEffect(() => {
  //   wallet.getBalance().then((b) => {
  //   setBalance(b);
  //   }); 
  // }, [balance])

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "ZAR",
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