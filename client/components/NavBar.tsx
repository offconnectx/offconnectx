"use client"
// import {Link} from "react-scroll";
import React, { useState } from "react";
import Image from "next/image";
import dropdown from "../public/dropwdown.svg";
import logo from "../public/logo.svg";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Link from "next/link";



const NavBar = () => {
    const [isClick, setisClick] = useState(false);

    const dropDown = () => {
        setisClick(!isClick);
    };

    return (
        <nav id="nav" className="w-full z-20 top-0 start-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={logo} className="h-8" alt="OffConnectX Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-400">OffConnectX</span>
            </Link>
      
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={dropDown}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-sky-100"
                aria-controls="navbar-sticky"
                aria-expanded={isClick}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
      
            <div
              className={`${
                isClick ? "block" : "hidden"
              } items-center justify-between w-full md:flex md:w-auto md:order-1 ml-auto`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-lg duration-300 block py-2 px-3 text-white rounded-lg hover:bg-sky-200 hover:text-black md:bg-transparent md:text-white md:p-0 md:hover:bg-sky-200"
                    aria-current="page"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-lg duration-300 block py-2 px-3 text-white rounded hover:bg-sky-200 hover:text-black md:hover:bg-transparent md:hover:bg-sky-200 md:p-0"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-lg duration-300 block py-2 px-3 text-white rounded hover:bg-sky-200 hover:text-black md:hover:bg-transparent md:hover:bg-sky-200 md:p-0"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    href="#"
                    className="text-lg duration-300 block py-2 px-3 text-white rounded hover:bg-sky-200 hover:text-black md:hover:bg-transparent md:hover:text-sky-200 md:p-0"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
      



};

export default NavBar;