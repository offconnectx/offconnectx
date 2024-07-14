import AreaCard from "./AreaCard";
import "./AreaCards.scss";

import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { ethers } from 'ethers';
//import { BsInfoCircle } from "react-icons/bs";
import { getInfoW, getInfoP } from '../../mongo';
import TOKENABI from '../../../contracts/erc20abi.json';
import { shortenAddress } from "../../../utils/shortenAddress"
import { convertWeiToEth, uzarAddress, providert } from "../../Connections";
//import zar from '../../../assets/u4.png';
import axios from 'axios'

const AreaCards = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [balance, getBalance] = useState(0);
  const [, setError] = useState("");
  const { currentUser } = useAuth();

  const [, setWallet] = useState("");

  const [priceZ, setPriceZ] = useState(undefined)

  useEffect(() => {
    //set url
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=zar'

    // https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=zar
    // https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=zar
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=avax
    // https://api.dexscreener.com/latest/dex/pairs/avalanche/0x1273227c0d368a65eb7942fa02ef68dbda466a26
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network
    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&symbols=eth

    //api call
    axios.get(url).then(response => {
      const priceZ = response.data.tether.zar
      setPriceZ(priceZ)
      console.log(response.data.tether.zar)

    }).catch(error => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userWallet = await getInfoW(currentUser.email);
        setWallet(userWallet);
        console.log(userWallet);
      } catch (error) {
        console.error("Error fetching user information", error);
        setError("Failed to fetch user information");
      }
    };

    fetchData();
  }, [currentUser.email]); // Dependency array to re-run effect when email changes


  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {

    const accounts = await getInfoW(currentUser.email);
    const ethkey = await getInfoP(currentUser.email);

    if (accounts) {
      setCurrentAccount(accounts);

      const signer = new ethers.Wallet(ethkey, providert);

      const tokenctr = new ethers.Contract(uzarAddress, TOKENABI, signer); // zar token

    
      const balance = await tokenctr.balanceOf(accounts);
      const tokenbalance = (balance).toString();
      const tokenbalformat = await convertWeiToEth(tokenbalance);

      getBalance(tokenbalformat);

    } else {
      console.log('No accounts found');
    }
  };




  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "UZAR",
          value: Number(balance).toFixed(1),
          text: shortenAddress(currentAccount),
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "UUSD",
          value: Number(balance/priceZ).toFixed(2),
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