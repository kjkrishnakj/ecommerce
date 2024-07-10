import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";
import SlidingMenu from "../components/slidingMenu";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  return (
    <>

      <Head>
        {/* <title>Amikart</title> */}
        <link href='https://fonts.googleapis.com/css?family=Nunito' />
        <title>Amikart | Home</title>

      </Head>

      <section className="text-gray-600 body-font">
      
        <div className="container px-5 py-24 mx-auto">
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
      
      
      {/* <SlidingMenu products={products} /> */ }
  {/* <SlidingMenu products={products} /> */ }
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

