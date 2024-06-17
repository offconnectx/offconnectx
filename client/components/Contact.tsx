"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:offconnectx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div  id="contact" className="p-8">
            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-sky-600">
                <div>
                    <h1 className="text-white text-3xl font-extrabold">Contact Us</h1>
                    <p className="text-sm text-white mt-4">Have some questions about <span className="text-gray-900 font-bold">OffConnectX</span>? Then reach out we'd love to hear about them and provide help.</p>

                    <div className="mt-12">
                        <h2 className="text-white text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                    <small className="block">Mail</small>
                                    <strong className="text-gray-900">offconnectx@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-white text-base font-bold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://www.linkedin.com/company/africa-s-blockchain-club/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 511 512">
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://twitter.com/africasblock">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill='#007bff'
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M11.454 2.07325C10.8736 2.07342 10.3164 2.3014 9.90238 2.70816C9.48834 3.11491 9.25049 3.66793 9.24001 4.24825L9.21801 5.45125C9.21693 5.51594 9.20212 5.57967 9.17458 5.63821C9.14703 5.69675 9.10736 5.74878 9.05821 5.79084C9.00905 5.83291 8.95152 5.86406 8.88943 5.88223C8.82733 5.9004 8.76209 5.90518 8.69801 5.89625L7.50601 5.73425C5.93701 5.52025 4.43401 4.79725 2.99201 3.59625C2.53501 6.12425 3.42701 7.87625 5.57601 9.22725L6.91001 10.0663C6.97318 10.1063 7.02561 10.1612 7.06277 10.2262C7.09993 10.2911 7.12069 10.3641 7.12325 10.4389C7.12582 10.5137 7.1101 10.5879 7.07747 10.6553C7.04484 10.7226 6.99628 10.7809 6.93601 10.8253L5.72001 11.7133C6.44401 11.7583 7.13001 11.7263 7.70001 11.6133C11.304 10.8933 13.7 8.18225 13.7 3.70825C13.7 3.34325 12.927 2.07325 11.454 2.07325ZM7.71201 4.21925C7.72533 3.48292 7.95557 2.76688 8.3739 2.16078C8.79223 1.55468 9.38007 1.08545 10.0638 0.811845C10.7476 0.538242 11.4968 0.47242 12.2178 0.622622C12.9388 0.772823 13.5994 1.13237 14.117 1.65625C14.66 1.65325 15.122 1.79025 16.156 1.16425C15.9 2.41625 15.774 2.96025 15.228 3.70825C15.228 9.54625 11.64 12.3843 8.00001 13.1113C5.50301 13.6093 1.87301 12.7913 0.833008 11.7053C1.36301 11.6633 3.51701 11.4323 4.76301 10.5213C3.70901 9.82625 -0.483992 7.35925 2.27101 0.725254C3.56501 2.23525 4.87601 3.26425 6.20501 3.80925C7.09001 4.17225 7.30701 4.16425 7.71201 4.22025V4.21925Z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" 
                    />
                    <input 
                        type='email' 
                        name='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" 
                    />
                    <input 
                        type='text' 
                        name='subject'
                        placeholder='Subject'
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent" 
                    />
                    <textarea 
                        name='message'
                        placeholder='Message' 
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                    ></textarea>
                    <button 
                        type='submit'
                        className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
