import React from "react"
import Image from "next/image"
// import logo from "../public/favicon (1).ico"
import logo from "../public/ak_logo3.png"
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className=" mx-auto flex flex-wrap flex-col md:flex-row items-center shadow-xl">
    <a href="./" className="flex title-font p-1 font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src = {logo} style={{height:"4rem",width:"6rem"}}></Image>
      
      <span className="ml-3 text-xl " style={{color:"#0097b2",fontFamily:"Georgia"}}>AmiKart</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="./" className="mr-10 hover:text-gray-900">Home</a>
      <a  href="./about"  className="mr-10 hover:text-gray-900">About</a>
      <a  href="./contact" className="mr-10 hover:text-gray-900">Contact</a>
      <a  href="./order" className="mr-10 hover:text-gray-900">Orders</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-4 mr-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <i className="fa-solid fa-cart-shopping text-2xl"></i>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>   
    </div>
  )
}

export default Navbar
