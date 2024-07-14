import React from "react";


const CommonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Style = () => {


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            {"Explore the crypto world."}
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${CommonStyle}`}>
              Reliability
            </div>
            <div className={CommonStyle}>Security</div>
            <div className={`sm:rounded-tr-2xl ${CommonStyle}`}>
              Offline
            </div>
            <div className={`sm:rounded-bl-2xl ${CommonStyle}`}>
              {"Web 3.0"}
            </div>
            <div className={CommonStyle}>Low Fees</div>
            <div className={`rounded-br-2xl ${CommonStyle}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">




          </div>
        </div>
      </div>
    </div>
  );
};

export default Style;