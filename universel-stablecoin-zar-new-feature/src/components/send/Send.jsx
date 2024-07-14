import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ethers } from 'ethers';
import { BsInfoCircle } from "react-icons/bs";
import { getInfoW, getInfoP } from '../mongo';
import TOKENABI from '../../contracts/erc20abi.json';
import contractABI from '../../contracts/Transactions.json'; 
//import { shortenAddress } from "../../utils/shortenAddress"
import Loader from "../Loader";
import { convertWeiToEth, uzarAddress, treasury, contractAddress, providert, updater1 } from "../Connections";
//import zar from '../../assets/u4.png';
import Button from "../Button";

export default function Dashboard() {




  const [formData, setFormData] = useState({ amount: '', account: '', country: '', currency: '' });
  const [, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [, getBalance] = useState(0);
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

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


  
 
  const sendTransaction = async () => {

      try {

        const { amount, account, country, currency } = formData;

        setIsLoading(true);
        setLoading(true);

        const ethkey = await getInfoP(currentUser.email);
        console.log(ethkey);

        
        const wallet = new ethers.Wallet(ethkey, providert);


        const updater = new ethers.Wallet(ethkey, providert);

        const trans = new ethers.Contract(contractAddress, contractABI, updater); //
        const uzarContract = new ethers.Contract(uzarAddress, ['function approve(address spender, uint256 amount)'], updater);
        
        const balanceInWei = await wallet.getBalance();
        const balanceInWeis = (balanceInWei).toString();
        const balanceInEther = await convertWeiToEth(balanceInWeis);
        console.log("Account Balance (in Ether):", balanceInEther);

        
        const gasLimit = 20000000;
        const gasPriceInWei = ethers.utils.parseUnits("1", "gwei");
        const gasFeeInWei = gasPriceInWei.mul(gasLimit);
        const gasFeeInEther = ethers.utils.formatEther(gasFeeInWei);
        console.log("Gas Fee (in Ether):", gasFeeInEther);

        // Send the gas fee from the updater wallet to the main wallet
        const transferGasFee = await updater1.sendTransaction({
          to: wallet.address,
          value: gasFeeInWei,
          gasPrice: gasPriceInWei,
      });
  
      // Wait for the gas fee transaction to be confirmed 
      await transferGasFee.wait();

        const updaterBalanceInWei = await updater1.getBalance();
        const updaterBalanceInEther = ethers.utils.formatEther(updaterBalanceInWei);
        console.log("Updater Balance (in Ether):", updaterBalanceInEther);

       
        
          


        
        await uzarContract.approve(contractAddress, ethers.utils.parseEther(amount));
          console.log('Total Amount:', ethers.utils.parseEther(amount));
        const trx = await trans.addToBlockchain(treasury, ethers.utils.parseEther(amount), account, country, currency, { gasLimit });
        
        


        
        console.log(`Loading - ${trx.hash}`);
        await trx.wait(); 
        console.log(`Success - ${trx.hash}`);
        

        const transactionsCount = await trans.getTransactionCount();
        window.localStorage.setItem('transactionCount', transactionsCount.toNumber());
        

        setIsLoading(false);
        setLoading(false);
      } catch (error) {
        setIsLoading(false); // Ensure loading state is reset on error
        console.error(error);
      }
    
  };



  return (  
    <>
      <div className="flex w-full justify-center items-center ">
        <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex-1 flex flex-col justify-start items-start mf:mr-10">
            <h1 className="text-2xl sm:text-3xl text-white text-gradient py-1">
              Send Money <br className="hidden sm:block" />
              with Ease!
              <div className="tooltip">
                <BsInfoCircle fontSize={15} color="red" className="info-icon" />
                <span className="tooltiptext">KotaniPay: <br />
                <small>Additionally, with KotaniPay, our off-ramp solution, 
                  users can easily convert their UZAR to local fiat currencies. 
                  KotaniPay offers competitive exchange rates, with different percentages for various 
                  countries, ensuring a seamless and cost-effective off-ramping experience.</small> 
                </span>
              </div>
            </h1>
            <p className="text-left mt-5 text-gray-400 font-light md:w-9/12 w-11/12 text-base">
                Our secure and efficient platform ensures a hassle-free experience for sending funds.
                Enter the recipient details, choose the desired currency, and witness swift cross-border transactions.
                Universel Protocol simplifies remittances, making it a breeze to support loved ones or transfer funds
                globally. Trust in the speed, security, and accessibility of our Send Money feature, empowering you to
                make a positive impact with just a few clicks! 💸✨
            </p>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start items-center w-full mf:mt-0 mt-10 mf:flex ml-5">
              <div className="max-w-md mx-auto mt-8">
                <h2 className="text-2xl text-center mb-4 text-color-1">Send Money</h2>
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={(e) => {e.preventDefault(); sendTransaction();}} className="">

                        
                  
                    
                    

                  
                  
                    
                  <div className="mb-2">
                    <label htmlFor="amount" className="block text-sm font-medium text-blue-500">
                      Amount
                    </label>
                    <input type="number" id="amount" 
                      className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" 
                      value={formData.amount} 
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required 
                      />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="block text-sm font-medium text-blue-500">
                      Account Number
                    </label>
                    <input type="number" id="account" name="account"
                      className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" 
                      value={formData.account}
                      onChange={(e) => setFormData({ ...formData, account: e.target.value })} 
                      required />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="account" className="block text-sm font-medium text-blue-500">
                      Country
                    </label>
                    <input type="text" id="country" name="country"
                      className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" 
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })} 
                      required />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="account" className="block text-sm font-medium text-blue-500">
                      Currency
                    </label>
                    <input type="text" id="currency" name="currency"
                      className="form-input mt-1 block w-full p-2 px-20 border rounded text-black" 
                      value={formData.currency}
                      onChange={(e) => setFormData({ ...formData, currency: e.target.value })} 
                      required />
                  </div>
                  {isLoading
                    ? <Loader />
                    : (
                      <Button
                        disabled={loading}
                        className="w-full mb-6 text-blue-500"
                        type="submit"
                      >
                        Send Tx
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
 * 
 
<section className="flex flex-1 h-full">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
              {error}
            </div>
          )}
          <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="p-10 flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <h1 className="text-4xl font-medium">Send Money with Ease! </h1>
            <h2 className="text-muted-foreground">
              Our secure and efficient platform ensures a hassle-free experience for sending funds.
              Enter the recipient details, choose the desired currency, and witness swift cross-border transactions.
              Universel Protocol simplifies remittances, making it a breeze to support loved ones or transfer funds
              globally. Trust in the speed, security, and accessibility of our Send Money feature, empowering you to
              make a positive impact with just a few clicks! 💸✨
            </h2>
              <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                <div className="flex justify-between flex-col w-full h-full">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                      <img fontSize={20} src={zar}/>
                    </div>
                    <BsInfoCircle fontSize={17} color="#fff" />
                  </div>
                  <div>
                    <p className="text-white font-light text-sm">
                      {shortenAddress(currentAccount)}
                    </p>
                    <p className="text-white font-semibold text-lg mt-1">
                      UZAR: {balance}
                    </p>
                  </div>
                </div>
              </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                  <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendTransaction();
                  }}
                >          
                
                  <input
                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                    placeholder="Amount (UZAR)"
                    name="amount"
                    type="number"
                    id="amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  />
                  <input
                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                    placeholder="Account"
                    name="account"
                    type="number"
                    id="account"
                    value={formData.account}
                    onChange={(e) => setFormData({ ...formData, account: e.target.value })}
                  />

                  <input
                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                    placeholder="Country"
                    name="country"
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                
                  <input
                    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                    placeholder="Currency"
                    name="currency"
                    type="text"
                    id="currency"
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  />
                  <div className="h-[1px] w-full bg-gray-400 my-2" />
                    {isLoading
                      ? <Loader />
                      : (
                        <button
                          type="submit"      
                          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                        >
                          Send
                        </button>
                      )}    
                  </form>
                </div>




                <form action="#" className="space-y-8">
                  <div>
                      <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount</label>
                      <input type="number" id="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="UZAR" required />
                  </div>
                  <div>
                      <label htmlFor="account" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Account</label>
                      <input type="number" id="account" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="no." required />
                  </div>
                  <div>
                      <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
                      <input type="text" id="country" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ghana" required />
                  </div>
                  <div>
                      <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Currency</label>
                      <input type="text" id="currency" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="KES" required />
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
              </div>
            </div>
          </div> 
        </section>
 * 
 */





















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
                    <h1 className="text-4xl font-medium">Send Money with Ease! </h1>
                    
                    <h3 className="text-muted-foreground">
                      Our secure and efficient platform ensures a hassle-free experience for sending funds.
                      Enter the recipient details, choose the desired currency, and witness swift cross-border transactions.
                      Universel Protocol simplifies remittances, making it a breeze to support loved ones or transfer funds
                      globally. Trust in the speed, security, and accessibility of our Send Money feature, empowering you to
                      make a positive impact with just a few clicks! 💸✨
                    </h3>
                  </div>


                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-1/2">
                      <div className="mt-2 flex w-full items-start ">
                        <input
                          id="from_email"
                          type="email"
                          className="h-15 block w-full rounded-lg bg-secondary p-5 text-sm text-slate-700 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:text-primary"
                          placeholder="Amount (UZAR)"

                        />
                      </div>

                      <div className="mt-2 flex w-full items-start ">
                        <input
                          id="from_email"
                          type="email"
                          className="h-15 block w-full rounded-lg bg-secondary p-5 text-sm text-slate-700 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:text-primary"
                          placeholder="Account Number"

                        />
                      </div>

                      <div className="mb-4 mt-2 flex w-full items-start">
                        <input
                          id="to_email"
                          type="email"
                          className="h-15 block w-full rounded-lg bg-secondary p-5 text-sm text-slate-700 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:text-primary"
                          placeholder="Country"

                        />
                      </div>

                      <div className="mb-4 mt-2 flex w-full items-start">
                        <input
                          id="to_email"
                          type="email"
                          className="h-15 block w-full rounded-lg bg-secondary p-5 text-sm text-slate-700 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:text-primary"
                          placeholder="Currency"

                        />
                      </div>
                      <div className="h-[1px] w-full bg-gray-400 my-2" />
                      {(
                        <button
                          type="submit"

                          className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                        >
                          Send Amount
                        </button>
                      )}
                    </div>
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