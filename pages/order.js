import Image from 'next/image'
import React from 'react'
import samsunggalaxys24plus from "../public/img/samsunggalaxys24+.jpg"

const Order = ({ cart, addToCart, removeFromCart, ClearCart, SubTotal }) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Samsung</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id - #89777</h1>
        <p className="leading-relaxed text-green-600 mb-4">Yay! Your order has been succesfully placed</p>
            <div class="flex mb-4">
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Total</a>
        </div>
      
        {/* <div className="flex  border-gray-200 py-2">
          <span className="text-gray-500">Total </span>
          <span className="ml-auto text-gray-900">{SubTotal}</span>
        </div> */}
        <div className="flex justify-center border-b-2 border-gray-200 py-2">
          <span className="text-gray-500">Galaxy 24+</span>
          <span className=" ml-auto text-center text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>  
        <div className="flex border-b-2 border-gray-200 py-2">
          <span className="text-gray-500">Narzo 60 5G</span>
          <span className=" ml-auto text-center text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>  
        <div className="flex border-b-2 border-gray-200 py-2">
          <span className="text-gray-500">name</span>
          <span className=" ml-auto text-center text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>  
          
        <div className="flex flex-col mt-4">
          <span className="title-font font-medium  text-2xl text-gray-900">Total : ₹{SubTotal}</span>
          <div className="my-5">
            <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track order</button>
         
            </div>
        </div>
      </div>
      <Image src={samsunggalaxys24plus} alt="" style={{ height: "26rem", width: "25rem" }}></Image>

    </div>
  </div>
</section>
    </div>
  )
}

export default Order
 