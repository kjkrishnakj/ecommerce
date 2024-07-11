import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

export default function Home({ products }) {
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
  const [dropdown, setDropdown] = useState(false);

  const [searchText, setSearchText] = useState('');
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
      console.log(searchText.length);
      if (searchText.length <= 1) {

        setDropdown(false);
      }
      else {
        setDropdown(true);

      }
      console.log(foundphone);
      // setTogglemodal(true);

      // toast.success("Quote found 👍", { autoClose: 1000 })

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

      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto">
          <div className="relative flex flex-col pt-12 md:pt-48  items-center justify-center w-full">
            <div className="relative w-[8cm] mb-4 hidden md:block">
              <form className="flex items-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-indigo-500 dark:text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input value={searchText} onChange={handleSearchSubmit} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Galaxy S24+" />
                <button onClick={handleSearchSubmit} type="submit" className="ml-2 p-2 text-sm text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
                  Search
                </button>
              </form>
            </div>
            {dropdown && (
              <div className="border rounded-md px-5 w-[16rem] bg-white mt-4">
                <Link passHref={true} href={`/product/${foundphone.slug}`}>
                  <img src={foundphone.img} alt="" className="w-full h-full rounded overflow-hidden object-cover" style={{ height: "16rem", width: "16rem" }} />
                </Link>
                <p className="text-center">{foundphone.brand}</p>
                <p className="text-center">{foundphone.title}</p>
              </div>
            )}
          </div>
          <div className="flex flex-wrap -m-4  justify-center" >
            {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
                <div className=" lg:w-1/2 md:w-1/2 p-2" style={{ width: "6cm", margin: "0.5cm 2cm" }}>
                  <img src={products[item].img} alt="" className="w-full h-full rounded overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 object-cover" style={{ height: "16rem", width: "16rem" }} />
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-s  tracking-widest title-font mb-1">{products[item].brand}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                    <p className="mt-1">₹{products[item].price}</p>
                  </div>
                  <div className="mt-1">
                    <div className="flex">

                      {products[item].color.includes('blue') && <button className="border-2 border-blue-200  bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('orange') && <button className="border-2 border-blue-200 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('purple') && <button className="border-2 border-blue-200 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('black') && <button className="border-2 border-blue-200 bg-black-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('white') && <button className="border-2 border-blue-200 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('pink') && <button className="border-2 border-blue-200 bg-pink-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('yellow') && <button className="border-2 border-blue-200 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {products[item].color.includes('red') && <button className="border-2 border-blue-200 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div>
                  </div>
                </div>
              </Link>
            })
            }
          </div>

        </div>
      </section>
      <section className="text-indigo-500  body-font">

        <div className="container px-5 py-1 mx-auto">

          <h1 className="text-2xl font-bold mt mb-2">Featured Products </h1>

          <Carousel

            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}>
            {Object.keys(products).map((item) => {

              return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
                <div className=" lg:w-1/2 md:w-1/2 p-2" style={{ width: "6cm", margin: "0.5cm 2cm" }}>
                  <img src={products[item].img} alt="" className="w-full h-full object-fill" style={{ height: "14rem", width: "11rem", margin: "auto" }} />
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

