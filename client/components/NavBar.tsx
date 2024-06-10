"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import dropdown from "../public/dropwdown.svg";
import logo from "../public/logo.svg";


const NavBar = () => {
    const [isClick, setisClick] = useState(false);

    const dropDown = () => {
        setisClick(!isClick);
    };


    return (
        <nav className="py-4 sticky top-0">
            <div className="max-w-7xl mx-32 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* <div className="flex items-center"> */}
                            <a href="" className="-ml-7 flex items-center">
                                {/* <div className="flex items-center"> */}

                                <Image src={logo} alt="" width={50} height={50} className="h-10 mr-3"/>
                                <span className="text-3xl text-white font-bold"><span className="text-sky-400">OffConnectX</span></span>
                                {/* </div> */}
                            </a>
                    {/* </div> */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8 ">
                            <Link href={"#"} className="text-lg font-medium duration-300 text-white hover:bg-sky-200 hover:text-black rounded-lg p-3">About</Link>
                            <Link href={"#"} className="text-lg font-medium duration-300 text-white hover:bg-sky-200 hover:text-black rounded-lg p-3">Features</Link>
                            <Link href={"#"} className="text-lg font-medium duration-300 text-white hover:bg-sky-200 hover:text-black rounded-lg p-3">Usages</Link>
                            <Link href={"#"} className="text-lg font-medium duration-300 text-white hover:bg-sky-200 hover:text-black rounded-lg p-3">Team</Link>
                            <Link href={"#"} className="text-lg font-medium duration-300 text-white hover:bg-sky-200 hover:text-black rounded-lg p-3">Contact</Link>
                            {/* <button className="w-full text-white bg-indigo-600 font-medium rounded-lg px-3 py-2 text-center 
                            // hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">Get Started</button> */}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                    <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={dropDown}
                    >
                     {isClick ? (
                        <Image priority src={dropdown} alt="Menu" width={30} height={30}/>
                     ) : (
                        <Image priority src={dropdown} alt="Menu" width={30} height={30}/>
                     )}
                    </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className=" space-y-1 sm:px-3">
                            <Link href={"#"} className="font-medium duration-300 block text-white hover:bg-sky-400 hover:text-black rounded-lg p-3">About</Link>
                            <Link href={"#"} className="font-medium duration-300 block text-white hover:bg-sky-400 hover:text-black rounded-lg p-3">Features</Link>
                            <Link href={"#"} className="font-medium duration-300 block text-white hover:bg-sky-400 hover:text-black rounded-lg p-3">Usages</Link>
                            <Link href={"#"} className="font-medium duration-300 block text-white hover:bg-sky-400 hover:text-black rounded-lg p-3">Team</Link>
                            <Link href={"#"} className="font-medium duration-300 block text-white hover:bg-sky-400 hover:text-black rounded-lg p-3">Contact</Link>
                            {/* <button className="w-full text-white bg-indigo-600 font-medium rounded-lg px-3.5 py-5 text-center 
                            hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out">Get Started</button> */}
                    </div>
                </div>
            )}
        </nav>

    );
};

export default NavBar;