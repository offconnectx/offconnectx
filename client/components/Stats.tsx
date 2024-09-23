// "use client"
// import React, { useState } from 'react'
// import users from '@/public/users.svg';
// import engage from '@/public/engage.svg';
// import revenue from '@/public/revenue.svg';
// import uptime from '@/public/uptime.svg';
// import Image from 'next/image';
// import CountUp from 'react-countup';
// // import ScrollTrigger from 'react-scroll-trigger';

// const Stats = () => {
//   // const [counterState, setCounterState] = useState(false); 
//   return (
//     <div className=" p-8 min-h-[250px] flex flex-col items-center justify-center font-[sans-serif] text-white -mt-44">
//       {/* <h2 className="text-3xl font-bold mb-14 text-center">Application Metrics</h2> */}
//       <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
//         <div className="text-center">
//           <div className="flex text-center justify-center">

//             <Image src={users} alt="" width={50} height={50} className="h-10 mr-3" />
//             <h3 className="text-4xl font-extrabold">{"5.4"}<span className="text-sky-400">{"M+"}</span></h3>
//           </div>
//           <p className="text-base font-bold mt-3 text-sky-400">Total Users</p>
//           <p className="text-sm text-white mt-2">{"The total number of registered users on the platform."}</p>
//         </div>

//         <div className="text-center">
//           <div className="flex text-center justify-center">

//             <Image src={revenue} alt="" width={50} height={50} className="h-10 mr-3" />
//             <h3 className="text-4xl font-extrabold">{"$80"}<span className="text-sky-400">K</span></h3>
//           </div>
//           <p className="text-base font-bold mt-3 text-sky-400">Revenue</p>
//           <p className="text-sm text-white mt-2">{"The total revenue generated by the application."}</p>
//         </div>

//         <div className="text-center">
//           <div className="flex text-center justify-center">

//             <Image src={engage} alt="" width={50} height={50} className="h-10 mr-3" />

//             <h3 className="text-4xl font-extrabold">100<span className="text-sky-400">K</span></h3>
//           </div>
//           <p className="text-base font-bold mt-3 text-sky-400">Engagement</p>
//           <p className="text-sm text-white mt-2">{"The level of user engagement with the application's content and features."}</p>
//         </div>

//         <div className="text-center">
//           <div className="flex text-center justify-center">

//             <Image src={uptime} alt="" width={50} height={50} className="h-10 mr-3" />

//             <h3 className="text-4xl font-extrabold">{"99.9"}<span className="text-sky-400">{"%"}</span></h3>
//           </div>
//           <p className="text-base font-bold mt-3 text-sky-400">Server Uptime</p>
//           <p className="text-sm text-white mt-2">{"The percentage of time the server has been operational and available."}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;