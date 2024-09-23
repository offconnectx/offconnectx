import React from "react";
import { FaUsers, FaExchangeAlt, FaChartLine, FaCog, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const how = [
  {
    color: "bg-blue-700",
    title: "STEP 1 - Users",
    icon: <FaUsers />,
    subtitle: "Users interact with the dapp via their mobile devices."
  },
  {
    color: "bg-green-500",
    title: "STEP 2 - The Network",
    icon: <FaExchangeAlt />,
    subtitle: "The dapp connects to the blockchain network."
  },
  {
    color: "bg-red-500",
    title: "STEP 3 - Data Synchronization",
    icon: <FaChartLine />,
    subtitle: "Data is synchronized between the dapp and the blockchain."
  },
  {
    color: "bg-yellow-500",
    title: "STEP 4 - Processing",
    icon: <FaCog />,
    subtitle: "Transactions are processed on the blockchain."
  },
  {
    color: "bg-purple-500",
    title: "STEP 5 - Confirmation",
    icon: <FaDollarSign />,
    subtitle: "Transactions are confirmed and recorded."
  },
  {
    color: "bg-teal-500",
    title: "STEP 6 - Security",
    icon: <FaShieldAlt />,
    subtitle: "Security measures ensure transaction integrity."
  },
];


interface HowCardProps {
  color: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
}

const HowCard: React.FC<HowCardProps> = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-col items-center bg-sky-600 white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="mt-4 flex flex-col items-center">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white text-sm text-center">{subtitle}</p>
    </div>
  </div>
);


const How = () => {
  return (
    <section id="services" className="max-container flex flex-col items-center gap-9">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-white">
          How <span className="text-blue-500">OffConnectX</span> Works
        </h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
        {how.map((hows) => (
          <HowCard key={hows.title} {...hows} />
        ))}
      </div>
    </section>
  );
};

export default How;