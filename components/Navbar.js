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
  const [clear, setclear] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    Object.keys(cart).length !== 0 && setSidebar(true);
    if (
      router.pathname === "/checkout" ||
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/forgot" ||
      router.pathname === "/myaccount" ||
      router.pathname === "/contact" ||
      router.pathname === "/about" ||
      router.pathname === "/order" ||
      router.pathname === "/orders"
    ) {
      setSidebar(false);
    }
  }, []);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
  }, [router.query]);

  useEffect(() => {
    if (SubTotal === 0) {
      setDisable(true);
      setclear(true);
    } else {
      setDisable(false);
      setclear(false);
    }
  });

  const ref = useRef();

  return (
    <div className="">
      <header className="body-font fixed w-full md:h-24 md:mb-24 z-10 ">
        <div className="text-gray-600 mx-auto flex flex-row justify-evenly md:flex-nowrap items-center shadow-xl top-0 bg-white z-10">
          <Link
            href="/"
            className="flex title-font p-1 font-medium items-center justify-center text-gray-900 mb-4 md:mb-0 mt-2"
          >
            <Image
              src={logo}
              alt="logo"
              className="h-10 w-10 md:h-16 md:w-24 "
            />
            <span
              className="ml-3 text-lg"
              style={{ color: "#0097b2", fontFamily: "Georgia" }}
            >
              AmiKart
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center flex-grow">
            <Link href="/" className="hover:text-gray-900 mx-2">
              Home
            </Link>
            <div className="relative">
              <button
                className="hover:text-gray-900 mx-2 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
              <Link href="/orders" className="hover:text-gray-900">
                Orders
              </Link>
            </div>
          </nav>
          <div
            className="relative"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {user.value && (
              <button className="rounded-full w-10 h-10 bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500 mr-2">
                <i className="fa-regular fa-user w-5 h-5"></i>
              </button>
            )}
            {dropdown && (
              <div className="absolute top-12 right-0 rounded-md px-5 w-50 bg-indigo-500">
                <ul>
                  <div className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                    <div style={{ fontWeight: "500" }}>
                      {localStorage.getItem("name")}
                    </div>
                    <div className="font-medium truncate">
                      {localStorage.getItem("email")}
                    </div>
                  </div>
                  <hr />
                  <li>
                    <Link
                      href="/myaccount"
                      className="cursor-pointer py-1 pt-3 dark:text-white hover:text-indigo-200 text-sm"
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders"
                      className="cursor-pointer py-1 dark:text-white hover:text-indigo-200 text-sm"
                    >
                      Orders
                    </Link>
                  </li>
                  <li
                    onClick={logout}
                    className="cursor-pointer py-1 pb-3 dark:text-white hover:text-indigo-200 text-sm"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          {!user.value && (
            <Link
              href="/login"
              className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Login
            </Link>
          )}
          <button
            onClick={toggleCart}
            className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0"
          >
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </button>
        </div>

        <div
          ref={ref}
          className={`w-80 h-[100vh] sidecart absolute top-0 bg-blue-100 py-10 px-8 transition-all ${
            sidebar ? "right-0" : "-right-96"
          }`}
          style={{ borderRadius: "1rem", zIndex: 400 }}
        >
          <h2 className="font-bold text-xl text-center">Shopping cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-xl"
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </span>

          <ol className="list-decimal">
            {Object.keys(cart).length === 0 && (
              <div className="my-4 text-xl">Cart is Empty!</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="flex items-center justify-between my-5">
                    <div className="w-2/3">{cart[k].name}</div>
                    <div className="w-1/3 flex items-center justify-center">
                      <i
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].variant
                          );
                        }}
                        className="fa-solid fa-square-minus cursor-pointer mx-3"
                      ></i>
                      {cart[k].qty}
                      <i
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].variant
                          );
                        }}
                        className="fa-solid fa-square-plus mx-3 cursor-pointer"
                      ></i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex">
            <Link
              href="/checkout"
              className="text-white disabled:bg-indigo-400 flex mx-2 bg-indigo-600 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-700 mt-4 rounded text-lg"
            >
              <span>
                <i className="fa-solid fa-bag-shopping mr-3"></i>
              </span>
              Checkout
            </Link>
            <button
              onClick={ClearCart}
              disabled={clear}
              className="text-white flex mx-2 disabled:bg-indigo-400 bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 mt-4 rounded text-lg"
            >
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
