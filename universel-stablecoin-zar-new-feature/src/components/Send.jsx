import { useState, useEffect, useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ethers } from 'ethers';
import { getInfoW, getInfoP } from './mongo';
import TOKENABI from '../contracts/erc20abi.json';

import { convertWeiToEth, uzarAddress, providert } from "./Connections";

import Sidebar from "./sidebar/Sidebar";
import "../App.scss";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import Send from "../screens/send/SendScreen";
import ButtonGradient from "../assets/svg/ButtonGradient";

export default function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);


  const [, setCurrentAccount] = useState('');
  const [, getBalance] = useState(0);
  const [, setError] = useState("");
  const { currentUser } = useAuth();

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


  




  return (
    <main className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
          <Send />
        
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </div>
      <ButtonGradient />
    </main>
    
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