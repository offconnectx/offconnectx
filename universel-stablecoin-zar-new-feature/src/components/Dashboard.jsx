import { useContext, useEffect } from "react";
import "../App.scss";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import BaseLayout from "../layout/BaseLayout";
import { Dashboard, PageNotFound } from "../screens";
import { Sidebar } from "../components"

function Dashboard1() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Switch>
          <Route element={<BaseLayout />}>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Switch>
        
        <main className="page-wrapper">
          {/* left of page */}
          <Sidebar />
          {/* right side/content of the page */}
          <div className="content-wrapper">
            <Dashboard />
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
        </main>

       
      </Router>
    </>
  );
}

export default Dashboard1;


/*
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [, setError] = useState("");

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
  }, [currentUser.email]); // Dependency array to re-run effect when email changes

  return (
    <div className="w-full md:flex flex-col">
      <div className="w-full md:flex">
        <section className="flex flex-1 h-full">
          
          <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            
            <div className="flex-1 flex flex-col justify-start items-start mf:mr-10">
              <h1 className="text-3xl sm:text-5xl text-black text-gradient py-1">
                  Deposit UUSD  & <br className="hidden sm:block" />
                  mint UZAR
              </h1>
              <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                  UZAR is backed by a collateralization mechanism, where each UZAR token is fully backed 
                  by an equivalent amount of South African Rand held in reserves. This overcollateralization 
                  ensures the stability of UZAR value.
              </p>


              <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                    Fast Transactions
                </div>
                <div className={companyCommonStyles}> Reliability</div>
                <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                    Security
                </div>
                <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                    Borderless Payments
                </div>
                <div className={companyCommonStyles}>Low Transaction Fees</div>
                <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                    Inflation Protection
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center w-full mf:mt-0 mt-10 mf:flex ml-5">
                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism ">
                <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        
                    </div>
                    
                    </div>
                    <div>
                    <p className="text-white font-light text-sm">
                    Balance: 0 UZAR
                    </p>
                    <p className="text-white font-light text-sm">
                    Balance: {Number(0).toLocaleString(undefined, { maximumFractionDigits: '2' })}&nbsp; UUSD
                    </p>
                    <p className="text-blue-400 font-semibold text-lg mt-1">
                        Universel Stablecoin
                    </p>
                    <Button className="hidden lg:flex" onClick={handleLogout}>
                      Sign out
                    </Button>
                    </div>
                </div>
                </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                  <div className="flex justify-between mb-[-1]">
                    <p className="text-[11px] absolute left-[20px] top-[18px] text-blue-900">Deposit UUSD</p>
                    <p className="text-[11px] absolute right-[40px] top-[18px] text-blue-900">Amount in ZAR</p>
                  </div>


                    
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  );
}
*/







/*

<div className="max-w-md mx-auto mt-8">
      <div>
        <h2 className="text-2xl text-center mb-4">Profile</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
            {error}
          </div>
        )}
        <strong>Email:</strong> {currentUser.email}
        <h2 className=" text-center mb-2">Wallet: {wallet}</h2>

        <Link to="/update-profile" className="bg-blue-500 text-white rounded px-4 py-2 w-full mt-3 inline-block text-center">
          Update Profile
        </Link>
        <Link to="/transactions" className="bg-blue-500 text-white rounded px-4 py-2 w-full mt-3 inline-block text-center">
          Transactions
        </Link>
      </div>
      <Deposit />
      <div className="text-center mt-4">
        <button className="text-blue-500" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
*/