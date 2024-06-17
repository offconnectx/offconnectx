// eslint-disable-next-line no-unused-vars
"use client"
import React, { useState } from 'react';

const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="bg-sky-600 p-8">
      <div className="max-w-2xl mx-auto aspect-video">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-white lg:mb-8 lg:text-3xl">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse">
            <h3 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                onClick={() => toggleItem(1)}
                aria-expanded={openItem === 1}
                aria-controls="accordion-flush-body-1"
              >
                <span>What is this OffConnectX and what does it do?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 transform ${openItem === 1 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-1"
              className={`${openItem === 1 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-white dark:text-gray-400">
                  All you need to do is deposit your ETH for UUSD. As long as you hold UUSD, Universel protocol
                </p>
                <p className="text-white dark:text-gray-400">
                  will
                  <a href="/" className="text-black hover:underline">
                    automatically
                  </a>
                  calculate interest for you.
                </p>
              </div>
            </div>

            <h3 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                onClick={() => toggleItem(2)}
                aria-expanded={openItem === 2}
                aria-controls="accordion-flush-body-2"
              >
                <span>How does offline transaction work?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 transform ${openItem === 2 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-2"
              className={`${openItem === 2 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-white dark:text-gray-400">
                  Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className="text-white dark:text-gray-400">
                  Check out the
                  <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Landwind.
                </p>
              </div>
            </div>

            <h3 id="accordion-flush-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                onClick={() => toggleItem(3)}
                aria-expanded={openItem === 3}
                aria-controls="accordion-flush-body-3"
              >
                <span>Is OffConnextX available on all devices?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 transform ${openItem === 3 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-3"
              className={`${openItem === 3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-3"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-white dark:text-gray-400">
                  The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p className="mb-2 text-white dark:text-gray-400">
                  However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-white dark:text-gray-400">Learn more about these technologies:</p>
                <ul className="pl-5 text-white list-disc dark:text-gray-400">
                  <li>
                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                      Landwind Pro
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h3 id="accordion-flush-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                onClick={() => toggleItem(4)}
                aria-expanded={openItem === 4}
                aria-controls="accordion-flush-body-4"
              >
                <span>What security measures are in place to protect my data and transactions?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 transform ${openItem === 4 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            <div
              id="accordion-flush-body-4"
              className={`${openItem === 4 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-4"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-white dark:text-gray-400">
                  The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                </p>
                <p className="mb-2 text-white dark:text-gray-400">
                  However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-white dark:text-gray-400">Learn more about these technologies:</p>
                <ul className="pl-5 text-white list-disc dark:text-gray-400">
                  <li>
                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                      Landwind Pro
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
