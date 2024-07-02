import React from "react";
import Image from "next/image";
import Modal from "./Modal";

const CommonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";



const Services: React.FC = () => (
  <div id="about" className="flex w-full justify-center items-center gradient-bg-services">
    {/* <Modal/> */}
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start md:mr-20 lg:mr-96">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          About <span className="text-sky-400"> OffConnextX </span>:
          <br className="mt-2" />
          Revolutionizing Offline Transactions
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        In today's hyper-connected world, <span className="font-semibold text-sky-400">OffConnectX</span> stands out by enabling transactions without the need for internet access. This innovation tackles some of the most frustrating issues users face, such as the ones listed below: </p>
        {/* <h2 className="text-white font-semibold mt-4">Addressing Mobile Financial Transaction Issues</h2> */}

        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${CommonStyle}`}>
            Internet Dependency
                        </div>
            <div className={CommonStyle}>Service Interruptions</div>
            <div className={`sm:rounded-tr-2xl ${CommonStyle}`}>
            Remote Inaccessibility
                        </div>
            <div className={`sm:rounded-bl-2xl ${CommonStyle}`}>
            Security Risks            </div>
            <div className={CommonStyle}>High Data Costs</div>
            <div className={`rounded-br-2xl ${CommonStyle}`}>
            Battery Drain            </div>
          </div>

        <button className="btn text-white mt-10 bg-sky-400 mr-20 font-medium rounded-lg px-5 py-4 text-center hover:bg-sky-200 hover:text-black hover:drop-shadow-md transition duration-300 ease-in-out">Learn more</button>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        {/* <div className="card w-346 bg-base-100 shadow-xl">
          <Image src="/off.jpeg" width={500} height={500} alt="Analysis Chart" className="w-full h-full object-cover" />
        </div> */}
      </div>
    </div>
  </div>
);

export default Services;