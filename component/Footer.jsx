'use client';
import React, { useContext } from 'react';
import { ContextValue } from './Context';

const Footer = () => {

    const { darkMode, email, setEmail, HandleSubmit } = useContext(ContextValue)

    return (
        <footer className={`border-t ${darkMode ? "border-neutral-800 bg-[#171717] text-white" : "border-neutral-100 bg-white text-black"} px-6 pt-10`}>
            {/* Top Section */}
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between gap-8 pb-10 w-full">

                {/* Customer Service */}
                <div className="w-full sm:w-1/3 sm:pr-6">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Customer Service</h2>
                    <ul>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>Contact Us</a></li>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>Sell With Us</a></li>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>Shipping</a></li>
                    </ul>
                </div>

                {/* Links */}
                <div className="w-full sm:w-1/3">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Links</h2>
                    <ul>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>About Us</a></li>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>Privacy Policy</a></li>
                        <li><a href="#" className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} hover:underline block mb-2`}>Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full sm:w-1/3">
                    <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Newsletter</h2>
                    <p className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} text-sm mb-4`}>Sign up for our newsletter to get exclusive offers and updates.</p>
                    <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(event) => event.key === "Enter" && HandleSubmit()}
                            placeholder="Enter your email"
                            className={`${darkMode ? "placeholder:text-neutral-100 border-neutral-700" : "placeholder:text-neutral-800 border-neutral-200"} flex-1 px-3 py-2 border rounded sm:rounded-l sm:rounded-r-none outline-none focus:ring-2 focus:ring-purple-500 transition`}
                        />
                        <button
                            type="submit"
                            onClick={() => HandleSubmit()}
                            className={`cursor-pointer px-5 py-2 border ${darkMode ? "border-neutral-700" : "border-neutral-200"} sm:border-l-0 rounded sm:rounded-r sm:rounded-l-none hover:text-white active:text-white hover:bg-purple-800 active:bg-purple-800 transition-all`}
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>

            {/* Bottom Section */}
            <div className={`border-t ${darkMode ? "border-neutral-800 " : "border-neutral-100 "} pt-6 pb-4`}>
                <p className={`${darkMode ? "text-neutral-400" : "text-neutral-600"} text-center text-sm text-neutral-500`}>
                    &copy; {new Date().getFullYear()} ECO Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;