import React from "react";
import Image from "next/image";


const Services: React.FC = () => (
  <div id="about" className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start md:mr-20 lg:mr-96">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          About OffConnextX:
          <br className="mt-2" />
          Revolutionizing Offline Transactions
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        OffConnectX is an innovative offline transaction system that allows users to transfer tokens without an internet connection. These tokens can be redeemed and used by the recipient as needed.</p>
        <h2 className="text-white font-semibold mt-4">Addressing Mobile Financial Transaction Issues</h2>
        <ul className="list-disc list-inside text-white mt-4">
        <li> <strong className="underline text-sky-400">Internet Dependency</strong>: Traditional transactions require reliable internet, making them unreliable in areas with poor connectivity.</li>
          <li><strong className="underline text-sky-400 mt-2">Service Interruptions</strong>: Network outages and technical issues can disrupt transactions, causing frustration and potential financial loss.</li>
          <li><strong className="underline text-sky-400 mt-2">Remote Inaccessibility:</strong> Poor internet infrastructure in rural areas limits access to mobile financial services, widening the digital divide.</li>
          <li><strong className="underline text-sky-400">Security Risks</strong>: Dependence on internet connectivity increases vulnerability to cyber attacks and data breaches.</li>
          <li><strong className="underline text-sky-400">High Data Costs</strong>: Mobile data expenses can be prohibitive, especially for frequent users with limited financial resources.</li>
          <li><strong className="underline text-sky-400">Battery Drain</strong>: Continuous use of mobile data for transactions depletes battery life quickly.</li>
        </ul>
        <button className="btn text-white mt-10 bg-sky-400 mr-20 font-medium rounded-lg px-5 py-4 text-center hover:bg-sky-200 hover:text-black hover:drop-shadow-md transition duration-300 ease-in-out">Learn more</button>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <div className="card w-346 bg-base-100 shadow-xl">
          <Image src="/off.jpeg" width={500} height={500} alt="Analysis Chart" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
);

export default Services;