import Image from 'next/image'
import React, { useCallback, useState } from 'react'
// import logo from "../public/ak_logo4.png"
import Link from 'next/link'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mongoose from "mongoose";

import Product from "../models/Product";
import Head from 'next/head';
import Script from 'next/script';
import samsunggalaxys24plus from "../public/img/samsunggalaxys24+.jpg"


const Checkout = ({ cart, addToCart, removeFromCart, ClearCart, SubTotal, products}) => {


  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [state,setState]=useState('');
  const [city,setCity]=useState('');
  const [address,setAddress]=useState('');
  const [pincode,setPincode]=useState('');
  const [disabled,setDisabled]=useState(true);



  const handleChange=async(e)=>{
    if(e.target.name=='name'){
      setName(e.target.value);
    }
    
    else if(e.target.name=='email'){
      setEmail(e.target.value);
    }
    
    else if(e.target.name=='address'){
      setAddress(e.target.value);
    }
    
    else if(e.target.name=='city'){
      setCity(e.target.value);
    }
    
    else if(e.target.name=='state'){
      setState(e.target.value);
    }
    
    else if(e.target.name=='phone'){
      setPhone(e.target.value);
    }
    
    else if(e.target.name=='pincode'){
      setPincode(e.target.value);
    }
    
    setTimeout(()=>{

      if(name.length>3 && address.length>3 && pincode.length>3 && phone.length>3){
        setDisabled(false)
        // toast.error("Please fill the details", { autoClose: 1000 })
        
      }
      else{
        setDisabled(true)
        
      }
    },100)
    
  }


  const intiatePayment = async() => {
    
  let oid=Math.floor(Math.random()* Date.now());

    const data = {cart,SubTotal,oid,email:email,name,address,pincode,phone}


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
      <ToastContainer/>
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
            
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">

              <ol className="list-decimal">
                {Object.keys(cart).length == 0 && <div className="my-4 text-xl">Cart is Empty!</div>
                }
                {Object.keys(cart).map((k) => {
                  return <li key={k}>
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                 
                      <img src={cart[k].img} alt="" className="m-2 h-24 w-28 rounded-md  object-cover object-center" style={{}}></img>
 
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



            <form className="max-w-md my-4 mx-auto">
              <div className="relative z-0 w-full mb-5 group" >
                 <input onChange={handleChange} value={name} style={{color:'black'}} type="text" name="name"  id="name" className="block py-2.5 px-0  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Full Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                 <input onChange={handleChange} value={email} style={{color:'black'}} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Email address</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                 <input onChange={handleChange} value={address} style={{color:'black'}} type="text" name="address" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Address</label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                   <input  onChange={handleChange} value={phone} style={{color:'black'}} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                   <input  onChange={handleChange} value={pincode}  style={{color:'black'}} type="text" name="pincode" id="pincode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="pincode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Pincode</label>
                </div>  
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                   <input value={city}  readOnly={true} style={{color:'black'}} type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">State</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                   <input value={state} readOnly={true} style={{color:'black'}} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">City</label>
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
            <Link href={'/checkout'}><button disabled={disabled} onClick={intiatePayment} className="mt-4 mb-8 w-full disabled:bg-gray-600 rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
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