"use client"
import React, { useState } from "react";
import Modal from "./Modal";

const CommonStyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState("");

  const handleOnClose = () => setShowModal(false);

  const handleShowContent = (content: string) => {
    setShowContent(content);
    setShowModal(true);
  }

  return (
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
            In today's hyper-connected world, <span className="font-semibold text-sky-400">OffConnectX</span> stands out by enabling transactions without the need for internet access. This innovation tackles some of the most frustrating issues users face, such as the ones listed below:
          </p>
          {/* <h2 className="text-white font-semibold mt-4">Addressing Mobile Financial Transaction Issues</h2> */}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <button onClick={() => handleShowContent("OffConnextX frees users from the constant need for an internet connection. This means transactions can be processed smoothly in places with unreliable or no internet access, providing peace of mind and consistent service.")} className={`rounded-tl-2xl ${CommonStyle}`}>
              Internet Dependency
            </button>
            <button onClick={() => handleShowContent("Service disruptions can halt business operations, but with OffConnextX, transactions continue seamlessly even when the network goes down. This ensures that your business remains operational and your customers satisfied.")} className={CommonStyle}>
              Service Interruptions
            </button>
            <button onClick={() => handleShowContent("Many rural and remote areas struggle with internet connectivity. OffConnextX bridges this gap, enabling people in these regions to perform transactions just as easily as those in urban areas, promoting inclusivity and economic growth.")} className={`sm:rounded-tr-2xl ${CommonStyle}`}>
              Remote Inaccessibility
            </button>
            <button onClick={() => handleShowContent("Online transactions are often vulnerable to cyber-attacks. By operating offline, OffConnextX significantly reduces the risk of such threats, providing a safer environment for conducting transactions.")} className={`sm:rounded-bl-2xl ${CommonStyle}`}>
              Security Risks
            </button>
            <button onClick={() => handleShowContent("Data charges can add up quickly, especially in regions with expensive internet plans. OffConnextX minimizes these costs by eliminating the need for internet data, making transactions more affordable for everyone.")} className={CommonStyle}>
              High Data Costs
            </button>
            <button onClick={() => handleShowContent("Constant internet usage can drain device batteries swiftly. OffConnextX is designed to be energy-efficient, reducing battery consumption and ensuring your devices last longer between charges.")} className={`rounded-br-2xl ${CommonStyle}`}>
              Battery Drain
            </button>
          </div>

          <button className="btn text-white mt-10 bg-sky-400 mr-20 font-medium rounded-lg px-5 py-4 text-center hover:bg-sky-200 hover:text-black hover:drop-shadow-md transition duration-300 ease-in-out">
            Learn more
          </button>
          <Modal onClose={handleOnClose} visible={showModal} content={showContent} />
        </div>

        {/* image */}

        <div className="flex-1 flex flex-col justify-start items-center">
          {/* <div className="card w-346 bg-base-100 shadow-xl">
            <Image src="/off.jpeg" width={500} height={500} alt="Analysis Chart" className="w-full h-full object-cover" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
