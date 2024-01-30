import Link from 'next/link'
import React from 'react'

const Checkout = ({ cart, addToCart, removeFromCart, ClearCart, SubTotal }) => {
  return (
    <div className='container m-auto'>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Delivery Details</h1>

          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="relative p-2 w-1/2">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative p-2 w-1/2">
                <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                <input type="number" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative p-2 w-1/2">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative p-2 w-1/2">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
              </div>

            </div>
          </div>
        </div>
      </section>




      <h2 className='text-xl m-auto flex justify-center'>Review Cart items</h2>
      <div className=" sidecart flex justify-left m-2 bg-blue-100 py-10 px-8 " style={{ borderRadius: "1rem", zIndex: 1 }}>




        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && <div className="my-4 text-xl">Cart is Empty!</div>
          }
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="flex justify-left my-5" >
                <div className="">
                  {cart[k].name}
                </div>
                <div className=" mx-4 flex items-center justify-center" style={{marginLeft:"14rem"}}>
                  <i onClick={() => {
                    removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)
                  }} className="fa-solid fa-circle-minus cursor-pointer mx-3"></i>  {cart[k].qty} <i onClick={() => {
                    addToCart(k, 1, cart[k].price, cart[k].name, cart[k].variant)
                  }} className="fa-solid fa-circle-plus mx-3 cursor-pointer"></i>

                </div>

              </div>

            </li>
          })}


        </ol>

      </div>
          <div className='mt-4'><h4>SubTotal: ₹{SubTotal}</h4></div>
         <div className="">
           <button className="flex my-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay ₹{SubTotal}</button>

          </div>
    </div>
  )
}

export default Checkout
