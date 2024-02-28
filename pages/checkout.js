import Image from 'next/image'
import React from 'react'
// import logo from "../public/ak_logo4.png"
import Link from 'next/link'

import mongoose from "mongoose";

import Product from "../models/Product";
import Head from 'next/head';
import Script from 'next/script';
import samsunggalaxys24plus from "../public/img/samsunggalaxys24+.jpg"


const Checkout = ({ cart, addToCart, removeFromCart, ClearCart, SubTotal, products}) => {

  const intiatePayment = async() => {
    
    let oid=Math.floor(Math.random()* Date.now());

    const data = {cart,SubTotal,oid,email:"email"}


    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
    let txnRes= await a.json();
    console.log(txnRes);
    let txnToken = txnRes.txnToken
    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId": oid, /* update order id */
        "token": txnToken, /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": SubTotal /* update amount */
      },
      "handler": {
        "notifyMerchant": function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        }
      }
    };

    window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
    }).catch(function onError(error) {
      console.log("error => ", error);
    });

  }
  return (
    <div>
      <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>

      <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}   crossorigin="anonymous">

      </Script>



      <div className="mb-6">
        <div className="flex flex-col mb-10 items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        </div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
            {/* <div className=" "> */}
            {/* <ol type='1'>
              {Object.keys(cart).length == 0 && <div className="">Your Cart is Empty!</div>}
              {Object.keys(cart).map((k) => {
                return <li key={k}>
                       {cart[k].title} 
                  <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={cart[k].img} alt="" />
                    <div className="flex w-full flex-col px-4 py-4">
                      <div className="font-semibold">{cart[k].brand}</div>
                      <p className="mt-auto text-lg font-bold">₹{cart[k].price}</p>
                    </div>
                  </div>
                </li>
              })}
              </ol> */}
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">

              <ol className="list-decimal">
                {Object.keys(cart).length == 0 && <div className="my-4 text-xl">Cart is Empty!</div>
                }
                {Object.keys(cart).map((k) => {
                  return <li key={k}>
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                 
                      <img src={cart[k].img} alt="" className="m-2 h-24 w-28 rounded-md border object-cover object-center" style={{}}></img>
 
                      <div className="flex w-full flex-col px-4 py-4">
                        <div className="font-semibold">{cart[k].name}</div>
                        <div className="text-gray-500">{cart[k].variant}</div>
                        <p className="mt-auto text-lg font-bold">₹{cart[k].price}</p>
                      </div>

                      <div className="w-1/3 flex items-center justify-center">
                        <i onClick={() => {
                          removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)
                        }} className="fa-solid fa-square-minus cursor-pointer mx-3"></i>  {cart[k].qty} <i onClick={() => {
                          addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)
                        }} className="fa-solid fa-square-plus mx-3 cursor-pointer"></i>
                      </div>
                    </div>

                  </li>
                })}

              </ol>
            </div>


          </div>
          <div className="mt-10 bg-gray-100 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Delivery Details</p>
            <p className="text-gray-400">Complete your order by providing your delivery details.</p>



            <form className="max-w-md my-3 mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landmark</label>
                </div>
              </div>
            </form>


            {<div className="">
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">₹{SubTotal}</p>
                </div>
              </div>
              <div className="mt-2  border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping Charges</p>
                  <p className="font-semibold text-gray-900">₹50</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">₹{SubTotal + 50}</p>
              </div>
            </div>}
            <Link href={'/checkout'}><button onClick={intiatePayment} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
            </Link></div>
        </div>



      </div >
    </div >
  )
}
export default Checkout


// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//   }


//   let products= await Product.find({})


//   return {
//     props: { products: products }
//   }
// }