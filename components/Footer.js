import React from 'react'
import Image from "next/image"
import logo from "../public/ak_logo4.png"

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className=" px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col shadow-2xl" style={{ boxShadow: "0 -20px 20px -30px rgba(0, 0, 0, 0.8)" }}>
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image src={logo} alt="" style={{ height: "4rem", width: "6rem" }}></Image>

                            <span className="ml-3 text-xl" style={{color:"#0097b2",fontFamily:"Georgia"}}>AmiKart</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Connecting you to the latest in innovation – Your Ultimate Phone Destination!</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BUDGET PHONES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#">Xiaomi Redmi Note 10</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#">Motorola Moto G Power</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#">Realme 7</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#">Nokia 5.4</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GAMING PHONES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#gaming-phone-1">ASUS ROG Phone 6</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#gaming-phone-2">Lenovo Legion Phone Duel</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#gaming-phone-3">Black Shark 4 Pro</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="#gaming-phone-4">Nubia Red Magic 7</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">5G PHONES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="link_to_first_5g_phone">iPhone 13</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="link_to_second_5g_phone">Google Pixel 6a 5G</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="link_to_third_5g_phone">Samsung Galaxy S20 FE 5G</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" href="link_to_fourth_5g_phone">OnePlus 9 5G</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BATTERY POWERHOUSE</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Moto G Power</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Samsung Galaxy M32</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Xiaomi Redmi 9 Power</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">ASUS Zenfone 8 Flip</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 AmiKart —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a target="_blank" href="https://github.com/kjkrishnakj" className="text-gray-500">
                                <i className="fa-brands fa-github"></i>

                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>

                            </a>
                            <a target="_blank" href="https://twitter.com/Krishna37115452" className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/kj_krishna_kj/" className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/krishna-jaiswal-383122248/" className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
