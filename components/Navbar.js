import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../public/ak_logo4.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  ClearCart,
  SubTotal,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [disable, setDisable] = useState(false);
  const [clear, setClear] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    if (["/checkout", "/login", "/signup", "/forgot", "/myaccount", "/contact", "/about", "/order", "/orders"].includes(router.pathname)) {
      setSidebar(false);
    }
  }, []);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
  }, [router.query]);

  useEffect(() => {
    setDisable(SubTotal === 0);
    setClear(SubTotal === 0);
  }, [SubTotal]);

  return (
    <div className="">
      <header className="body-font fixed w-full z-10">
        <div className="text-gray-600 mx-auto flex flex-nowrap flex-row sm:flex-nowrap items-center shadow-xl sticky top-0 bg-white z-10">
          <a href="/" className="flex title-font p-1 font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} alt="" style={{ height: "4rem", width: "6rem" }} />
            <span className="ml-3 text-xl" style={{ color: "#0097b2", fontFamily: "Georgia" }}>
              AmiKart 
            </span>
          </a>

          {/* Navigation links */}
          <nav className={`md:ml-auto md:mr-auto hidden md:flex items-center text-base justify-center ${showMenu ? 'flex' : 'hidden'}`}>
            <a href="/" className="mr-10 hover:text-gray-900">Home</a>
            <a href="/about" className="mr-10 hover:text-gray-900">About</a>
            <a href="/contact" className="mr-10 hover:text-gray-900">Contact</a>
            <a href="/orders" className="mr-10 hover:text-gray-900">Orders</a>
          </nav>

          {/* Menu button for small screens */}
          <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* User dropdown menu */}
          <div className="ml-auto ">
            <a
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              {user.value && (
                <button className="rounded-full w-12 h-12 bg-gray-200 p-3 border-0 inline-flex items-center justify-center text-gray-500 mr-7">
                  <i className="fa-regular fa-user w-5 h-5 ml-8" style={{ marginRight: "2rem" }}></i>
                </button>
              )}
            </a>
          </div>

          {/* Dropdown content for user menu */}
          {dropdown && (
            <div
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="absolute top-7 right-8 rounded-md px-5 w-50 bg-indigo-500"
            >
              <ul>
                <div className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                  <div style={{ fontWeight: "500" }}>{localStorage.getItem("name")}</div>
                  <div className="font-medium truncate">{localStorage.getItem("email")}</div>
                </div>
                <hr />
                <Link href="/myaccount">
                  <li className="cursor-pointer py-1 pt-3 dark:text-white hover:text-indigo-200 text-sm">My Account</li>
                </Link>
                <Link href="/orders">
                  <li className="cursor-pointer py-1 dark:text-white hover:text-indigo-200 text-sm">Orders</li>
                </Link>
                <li onClick={logout} className="cursor-pointer py-1 pb-3 dark:text-white hover:text-indigo-200 text-sm">Logout</li>
              </ul>
            </div>
          )}

          {/* Login button */}
          {!user.value && (
            <Link href="/login">
              <button className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-4 mr-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{ marginRight: "1rem", fontWeight: "700" }}>Login</button>
            </Link>
          )}

          {/* Cart button */}
          <button onClick={toggleCart} className="md-block  cursor-pointer inline-flex items-center bg-gray-100 border-0 py-4 mr-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar for cart */}
        <div ref={ref} className={`w-59 h-[100vh] sidecart absolute top-0 bg-blue-100 py-10 px-8 transition-all ${sidebar ? "right-0" : "-right-96"}`} style={{ borderRadius: "1rem", zIndex: 400 }}>
          <h2 className="font-bold text-xl text-center">Shopping cart</h2>
          <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-xl">
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>

          <ol className="list-decimal">
            {Object.keys(cart).length === 0 && <div className="my-4 text-xl">Cart is Empty!</div>}
            {Object.keys(cart).map((k) => (
              <li key={k}>
                <div className="flex items-center justify-between my-5">
                  <div className="w-2/3">{cart[k].name}</div>
                  <div className="w-1/3 flex items-center justify-center">
                    <i onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)} className="fa-solid fa-square-minus cursor-pointer mx-3"></i>
                    {cart[k].qty}
                    <i onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)} className="fa-solid fa-square-plus mx-3 cursor-pointer"></i>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex">
            <Link href="/checkout">
              <button disabled={disable} className="text-white disabled:bg-indigo-400 flex mx-2 bg-indigo-600 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-700 mt-4 rounded text-lg">
                <span><i className="fa-solid fa-bag-shopping mr-3"></i></span>
                Checkout
              </button>
            </Link>
            <button onClick={ClearCart} disabled={clear} className="text-white flex mx-2 disabled:bg-indigo-400 bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 mt-4 rounded text-lg">
              Clear
            </button>
          </div>

          <div className="my-5">
            <h4>SubTotal: ₹{SubTotal}</h4>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
