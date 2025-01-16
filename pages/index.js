import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home({ products }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [foundphone, setFoundphone] = useState('');
  const [foundbrand, setFoundbrand] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [searchBrand, setSearchBrand] = useState('');
  const handleSearchChange = (e) => {
  };
  const handleSearchSubmit = async (e) => {
    setSearchText(e.target.value);
    e.preventDefault();
    const data = { searchText }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getphone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()

    if (response.success) {
      setFoundphone(response.product);
      // console.log(searchText);
      if (searchText.length <= 1) {

        setDropdown(false);
      }
      else {
        setDropdown(true);

      }


    }
    else {
      console.log("err");

    }
  };
  const handleSearchSubmit3 = async (e) => {
    setDropdown2(false);
    const filter = document.getElementById("filter");
    if (filter) {
      filter.classList.add("opacity-0"); // Start fading out
      
        filter.classList.add("hidden"); // Hide after animation
 
    } 
    const catalog = document.getElementById("catalog");
    if (catalog) {
      catalog.classList.remove("hidden"); // Show immediately
     
        catalog.classList.remove("opacity-0"); // Fade in
      
    }
  }
 

  const handleSearchSubmit2 = async (e, imgId) => {
    setSearchBrand(imgId);

    // console.log(imgId);
    e.preventDefault();
    const data = { searchBrand }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getbrand`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()

    if (response.success) {
      setFoundbrand(response.product);
      // console.log(foundbrand);
      if (!foundbrand) {

        setDropdown2(false);
      }
      else {
        const filter = document.getElementById("filter");
        if (filter) {
          filter.classList.remove("hidden"); // Show immediately
          filter.classList.remove("opacity-0"); // Fade in

        }
        const catalog = document.getElementById("catalog");
        if (catalog) {
          catalog.classList.add("opacity-0"); // Start fading out
          catalog.classList.add("hidden"); // Hide after animation

        }
        setDropdown2(false);

      }


    }
    else {
      console.log("err");

    }
  };
  return (
    <>

      <Head>
        {/* <title>Amikart</title> */}
        <link href='https://fonts.googleapis.com/css?family=Nunito' />
        <title>Amikart | Home</title>

      </Head>





      <Carousel
        responsive={{
          superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
          desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
          tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        }}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        className="custom-carousel shadow-lg"
        containerClass="carousel-container"
        itemClass="carousel-item"
        arrows={false}
      >
        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/OnePlus115g">
            <img
              src="/img/OnePlusposter.webp"
              alt="image 1"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>
        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/realmenarzo70x5g">
            <img
              src="/img/realmenarzo70x_poster.webp"
              alt="image 2"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>

        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/redminote13peo5g">
            <img
              src="/img/redminote135g_poster.jpg"
              alt="image 2"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>
        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/IQOONEO7PRO5G">
            <img
              src="/img/iqoo_poster.jpg"
              alt="image 2"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>
        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/realme12pro5g">
            <img
              src="/img/realme12pro_poster.jpg"
              alt="image 3"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>
        <div className="h-[30vh] sm:h-[55vh] mt-20 ">
          <Link href="/product/samsaunggalaxys24+">
            <img
              src="/img/s24_poster.webp"
              alt="image 4"
              className="h-full w-full object-fill"
            />
          </Link>
        </div>


      </Carousel>





      <section className="text-gray-600 body-font">
        <div class="hidden lg:flex flex-wrap justify-center items-center gap-6 p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg">
          <div class="flex flex-wrap justify-center items-center gap-6">

            <div className="flex flex-col items-center space-y-4" id="realme" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
            <img
  src="/img/realme logo.webp"
  alt="Realme Logo"
  class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full shadow-md hover:shadow-xl hover:scale-110 hover:translate-y-[-20px] transition-transform duration-300 ease-out"
/>

            </div>


            <div className="flex flex-col items-center space-y-4" id="Apple" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/apple logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>
            <div className="flex flex-col items-center space-y-4" id="Redmi" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/redmilogo.jpeg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>

            <div className="flex flex-col items-center space-y-4" id="OnePlus" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/oneplus logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>

            <div className="flex flex-col items-center space-y-4" id="IQOO" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/iqoo logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>

            <div className="flex flex-col items-center space-y-4" id="Samsung" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/samsung logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>

            <div className="flex flex-col items-center space-y-4" id="POCO" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/poco logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>
            <div className="flex flex-col items-center space-y-4" id="Google" onMouseOver={(e) => handleSearchSubmit2(e, e.target.id)} onMouseLeave={handleSearchSubmit3}>
              <img src="/img/google logo.jpg" alt="Realme Logo" class="w-20 h-20 sm:w-28 sm:h-28 my-2 mx-4 object-fill rounded-full hover:translate-y-[-20px] shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out" />

            </div>


          </div>
        </div>



        <div className="container px-5 mx-auto">

          <div className="relative flex flex-col pt-12 sm:pt-6 items-center justify-center w-full">
            <div className="relative w-[8cm] mb-4">
              <form className="flex items-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#0095B3] dark:text-[#0095B3]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input value={searchText} onChange={handleSearchSubmit} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Galaxy S24+" />
                <button onClick={handleSearchSubmit} type="submit" className="ml-2 p-2 text-sm text-white bg-[#0095B3] rounded-lg hover:bg-005A6E focus:ring-2 focus:ring-005A6E focus:ring-opacity-50">
                  Search
                </button>
              </form>
            </div>
            {dropdown && (
              <div className="border rounded-md px-5 w-[16rem] bg-white mt-4">
                <Link passHref={true} href={`/product/${foundphone.slug}`}>
                  <img src={foundphone.img} alt="" className="w-full h-full rounded overflow-hidden object-fill" style={{ height: "16rem", width: "16rem" }} />
                </Link>
                <p className="text-center">{foundphone.brand}</p>
                <p className="text-center">{foundphone.title}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap -m-4  justify-center" id="catalog"  >
            {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
                <div className=" lg:w-1/2  md:w-1/2 p-2" style={{ width: "8cm", margin: "0.5cm" }}>
                  <img src={products[item].img} data-aos="zoom-in" alt="" className="w-full h-full rounded overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 object-contain" style={{ height: "16rem", width: "16rem" }} />
                  <div className="mt-4" data-aos="fade-right">
                    <h3 className="text-gray-500 text-s  tracking-widest title-font mb-1">{products[item].brand}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <p className="mt-1">₹{products[item].price}</p>
                  </div>
                  <div className="mt-1">
                    <div className="flex">

                      {products[item].color.includes('blue') && <button className="border-2 border-blue-200 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('orange') && <button className="border-2 border-blue-200 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('purple') && <button className="border-2 border-blue-200 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('black') && <button className="border-2 border-blue-200 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('white') && <button className="border-2 border-blue-200 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('pink') && <button className="border-2 border-blue-200 bg-pink-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('yellow') && <button className="border-2 border-blue-200 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('green') && <button className="border-2 border-blue-200 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('red') && <button className="border-2 border-blue-200 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('cyan') && <button className="border-2 border-blue-200 bg-cyan-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('teal') && <button className="border-2 border-blue-200 bg-teal-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('lime') && <button className="border-2 border-blue-200 bg-lime-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('amber') && <button className="border-2 border-blue-200 bg-amber-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('indigo') && <button className="border-2 border-blue-200 bg-indigo-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('rose') && <button className="border-2 border-blue-200 bg-rose-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('emerald') && <button className="border-2 border-blue-200 bg-emerald-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('fuchsia') && <button className="border-2 border-blue-200 bg-fuchsia-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('gray') && <button className="border-2 border-blue-200 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('brown') && <button className="border-2 border-blue-200 bg-brown-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div>
                  </div>
                </div>
              </Link>
            })
            }
          </div>
          <div className="flex flex-wrap -m-4  justify-center" id="filter">

            {Object.keys(foundbrand).map((item) => {

              return <Link passHref={true} key={foundbrand[item]._id} href={`/product/${foundbrand[item].slug}`}>
                <div className=" lg:w-1/2  md:w-1/2 p-2" style={{ width: "8cm", margin: "0.5cm" }}>
                  <img src={foundbrand[item].img} data-aos="zoom-in" alt="" className="w-full h-full rounded overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 object-contain" style={{ height: "16rem", width: "16rem" }} />
                  <div className="mt-4" data-aos="fade-right">
                    <h3 className="text-gray-500 text-s  tracking-widest title-font mb-1">{foundbrand[item].brand}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{foundbrand[item].title}</h2>
                    <p className="mt-1">₹{foundbrand[item].price}</p>
                  </div>
                  <div className="mt-1">
                    <div className="flex">

                      {foundbrand[item].color.includes('blue') && <button className="border-2 border-blue-200 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('orange') && <button className="border-2 border-blue-200 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('purple') && <button className="border-2 border-blue-200 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('black') && <button className="border-2 border-blue-200 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('white') && <button className="border-2 border-blue-200 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('pink') && <button className="border-2 border-blue-200 bg-pink-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('yellow') && <button className="border-2 border-blue-200 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('green') && <button className="border-2 border-blue-200 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('red') && <button className="border-2 border-blue-200 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('cyan') && <button className="border-2 border-blue-200 bg-cyan-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('teal') && <button className="border-2 border-blue-200 bg-teal-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('lime') && <button className="border-2 border-blue-200 bg-lime-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('amber') && <button className="border-2 border-blue-200 bg-amber-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('indigo') && <button className="border-2 border-blue-200 bg-indigo-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('rose') && <button className="border-2 border-blue-200 bg-rose-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('emerald') && <button className="border-2 border-blue-200 bg-emerald-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('fuchsia') && <button className="border-2 border-blue-200 bg-fuchsia-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('gray') && <button className="border-2 border-blue-200 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {foundbrand[item].color.includes('brown') && <button className="border-2 border-blue-200 bg-brown-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div>
                  </div>
                </div>
              </Link>
            })
            }
            {/* <div className=" lg:w-1/2  md:w-1/2 p-2" style={{ width: "8cm", margin: "0.5cm" }}>
              <div className="border rounded-md px-5 w-[16rem] bg-white mt-4">
                <Link passHref={true} href={`/product/${foundbrand.slug}`}>
                  <img src={foundbrand.img} id="Apple" alt="" className="w-full h-full rounded overflow-hidden object-fill" style={{ height: "16rem", width: "16rem" }} />
                </Link>
                <p className="text-center">{foundbrand.brand}</p>
                <p className="text-center">{foundbrand.title}</p>
              </div>
            </div> */}



          </div>

        </div>
      </section>
      <section className="text-[#0095B3]  body-font">

        <div className="container px-5 py-12 mx-auto">

          <h1 className="text-2xl font-bold mt mb-2">Featured Products </h1>

          <Carousel

            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}>
            {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
                <div className=" lg:w-1/2 md:w-1/2 p-2 " style={{ width: "6cm", margin: "0.5cm 2cm" }}>
                  <img src={products[item].img} alt="" className="w-full  h-full object-fill" style={{ height: "14rem", width: "11rem", margin: "auto" }} />
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs  tracking-widest title-font mb-1">{products[item].brand}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <p className=" text-gray-900 mt-1">₹{products[item].price}</p>
                  </div>

                </div>

              </Link>
            })
            }

          </Carousel>
        </div>
      </section>
    </ >
  );

}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }


  let products = await Product.find()
  let phones = {}
  for (let item of products) {
    if (item.title in phones) {
      if (!phones[item.title].color.includes(item.color) && item.availableQty > 0) {
        phones[item.title].color.push(item.color)
      }
    }
    else {
      phones[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        phones[item.title].color = [item.color]
      }
    }
  }


  return {
    props: { products: JSON.parse(JSON.stringify(phones)) }
  }
}
