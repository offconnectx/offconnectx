import React from 'react'

const FAQ = () => {
    return (
        <div className="flex flex-col w-full justify-center items-start gradient-bg-welcome">
            <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1"  />
                <div className="collapse-title text-xl text-black font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FAQ