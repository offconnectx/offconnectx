import React from "react";
// import heroImg from "../public/heroImg.svg";
import Modal from "./Modal";

const Hero = () => {
  return (
    <div className="pt-32 mb-24 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto flex justify-center text-center min-h-screen">
      <div className="mt-16 max-w-4xl px-4 flex flex-col gap-8 md:max-xl">
        <h1 className="max-w-xl text-[-2.9rem] leading-none text-gray-200 lg:text-5xl lg:leading-tight mb-5 -ml-10 text-5xl md:text-6xl font-semibold">
          Make <span className="text-sky-400">Offline</span> Transactions.
        </h1>
        <p className="text-gray-200 text-lg max-w-xl lg:max-w-md">
          {`With OffConnectX, discover the potential of decentralised mobile transactions.
          Use Toncoin from The Open Network (TON) to conduct transactions smoothly even when offline.`}
        </p> <br />
        <p className=" text-sky-400 font-bold -mt-8 -ml-10 ">{`Embrace the future of fast, secure, and scalable
          blockchain technology`}</p>
        <div className="flex mx-auto justify-center mt-8">
          <a href="/" className="text-white -mt-2 bg-sky-400 mr-20 font-medium rounded-lg px-5 py-4 text-center hover:bg-sky-200 hover:text-black hover:drop-shadow-md transition duration-300 ease-in-out">
            Get started
          </a>
        </div>
      </div>
      {/* <Modal/> */}

    </div>
  );
};

export default Hero;
