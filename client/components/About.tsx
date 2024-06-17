import React from "react";
import Image from "next/image";


const Services: React.FC = () => (
  <div id="about" className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start md:mr-20 lg:mr-96">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          Fundamental & Technical
          <br />
          Analysis Chart
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Understand why price moves in a certain way based on macro and microeconomic news.
        </p>
        <button className="btn text-white">Learn more</button>
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