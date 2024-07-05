"use client"
import React, { useState } from 'react';
import Faq from './FAQ';
import Contact from './Contact';


const Mix = ()=> {
    return (
        <section className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
        <Faq/>
    </div>
    <div className={`flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Contact />
    </div>
  </section>
    )
};

export default Mix;