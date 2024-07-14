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
import Transfer from "../screens/transfer/TransferScreen"
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
          <Transfer />
        
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


