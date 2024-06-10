import React from 'react'
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

const LandingPage = () => {
  return (
    <main className=" bg-gray-900 flex flex-col items-center justify-between">
      <div className="absolute relative w-full w-[100vw] h-[100vh]">
        <NavBar/>
        <Hero/>

      </div>
    </main>
  ) 
}

export default LandingPage;