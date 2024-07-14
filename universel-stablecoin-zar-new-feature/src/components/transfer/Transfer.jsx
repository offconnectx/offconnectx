import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ethers } from 'ethers';
//import { BsInfoCircle } from "react-icons/bs";
import { getInfoW, getInfoP } from '../mongo';
import TOKENABI from '../../contracts/erc20abi.json';
//import contractABI from '../../contracts/Transactions.json';
//import { shortenAddress } from "../../utils/shortenAddress"
import Loader from "../Loader";
import { convertWeiToEth, uzarAddress, providert } from "../Connections";
//import zar from '../../assets/u4.png';
import { useRef } from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button";

export default function Dashboard() {
  //const [formData, setFormData] = useState({ amount: '', account: '', country: '', currency: '' });
  const [, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [, getBalance] = useState(0);
  const { currentUser } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [, setWallet] = useState("");

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

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setIsLoading(false);
    setLoading(false);
  }




  return (
    <>

      <div className="flex w-full justify-center items-center ">
        <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start mf:mr-10">
            <h1 className="text-2xl sm:text-3xl text-white text-gradient py-1">
              Transfer UZAR Between <br className="hidden sm:block" />
              ERC-20 Wallets
            </h1>
            <p className="text-left mt-5 text-gray-400 font-light md:w-9/12 w-11/12 text-base">
            Transfer Universel Stablecoin (UZAR) between ERC-20 wallets with ease. Universel Protocol 
            enables quick and secure transactions, making it simple to move your UZAR holdings between 
            wallets. With a nominal fee of just 0.5%, you can efficiently manage your UZAR assets across 
            different wallets, ensuring flexibility and convenience in your digital currency transactions.
            </p>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start items-center w-full mf:mt-0 mt-10 mf:flex ml-5">
              <div className="max-w-md mx-auto mt-8">
                <h2 className="text-2xl text-center mb-4 text-color-1">Transfer</h2>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="">
                  <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-blue-500">
                      Amount
                    </label>
                    <input type="number" id="amount" className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" ref={emailRef} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-blue-500">
                      ERC-20 Wallet
                    </label>
                    <input type="address" id="address" className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" ref={passwordRef} required />
                  </div>
                  {isLoading
                    ? <Loader />
                    : (
                      <Button
                        disabled={loading}
                        className="w-full mb-6 text-blue-500"
                        type="submit"
                      >
                        Transfer
                      </Button>
                    )}
                </form>
              </div>


            </div>
        </div>
      </div>

    </>
  );
}




























/** 

import Loader from './Loader'
import Nav from './shared/Nav';


import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { getInfoW } from './mongo';
import Topbar from "./shared/Topbar";
import LeftSidebar from "./shared/LeftSidebar";
import Bottombar from "./shared/Bottombar";


export default function Send({

}) {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [wallet, setWallet] = useState("");

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


  async function handle() {
    setError("");

    try {
      
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }


  return (

    <div className="w-full md:flex flex-col">
      <Topbar />
      <div className="w-full md:flex">
      <LeftSidebar />
        <section className="flex flex-1 h-full">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
              {error}
            </div>
          )}

          <div className="">
          
              <div>
              <div className="flex flex-col py-8 text-center sm:py-24">
                  <div className="mx-auto max-w-3xl p-4">
                  <div className="mb-8">
                    <Nav />
                  </div>
                  <div className="flex flex-col gap-2 pb-8">
                  <h1 className="text-4xl font-medium">Empower Your Finances with Web3 Transfers!</h1>
                      <h2 className="text-muted-foreground">
                          Swiftly transfer funds to your other Web3 
                          wallets using Universel Protocol. Seamlessly navigate through the process, ensuring your 
                          assets are where you need them. Take control of your financial journey with the ease and 
                          security of Web3 transfers. Your assets, your way! 🚀💸
                      </h2>
                  </div>
                  

                  </div>
              </div>
              </div>

          </div>
        </section>
      </div>
      <Bottombar />
    </div>   
  );
}
*/
