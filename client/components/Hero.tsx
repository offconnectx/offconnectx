import React from "react";
// import hero-img from "../public/hero-img.svg";
import heroIMg from "../public/heroImg.svg";


const Hero = () => {
    return (
        <div className="pt-32 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-32">
            <div className="mt-16 max-w-4xl px-4 lflex flex-col gap-8 md:max-xl md:max-xl">
                <h1 className="max-w-xl text-[-2.9rem] leading-none text-gray-200 lg:text-5xl lg:leading-tight mb-5 -ml-1 text-5xl md:text-6xl font-semibold">Empowering <span className="text-sky-400">Offline</span> Transactions with <span className="text-sky-400">OffConnectX.</span></h1>
                <p className="text-gray-200 text-lg max-w-xl lg:max-w-md">
                    Experience the power of decentralized mobile transactions with OffConnectX.
                    Seamlessly execute transactions offline, powered by Toncoin from The Open 
                    Network (TON). Embrace the future of fast, secure, and scalable 
                    blockchain technology.
                </p>
                <div className="flex mt-10 lg:justify-start">
                    <button className="text-white bg-sky-400 font-medium rounded-lg px-5 py-4 text-center hover:bg-sky-200
                    hover:text-black hover:drop-shadow-md transition duration-300 ease-in-out">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;