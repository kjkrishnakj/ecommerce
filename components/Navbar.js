import React, { useRef } from "react"
import Image from "next/image"
// import logo from "../public/favicon (1).ico"
import logo from "../public/ak_logo3.png"
const Navbar = ({cart,addToCart,removeFromCart,ClearCart,SubTotal}) => {
// console.log(cart,addToCart,removeFromCart,ClearCart,SubTotal);

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("translate-x-0");
        }
        else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0");
            ref.current.classList.add("translate-x-full");

        }
    }

    const ref = useRef()


    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className=" mx-auto flex flex-wrap flex-col md:flex-row items-center shadow-xl">
                    <a href="./" className="flex title-font p-1 font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={logo} alt="" style={{ height: "4rem", width: "6rem" }}></Image>

                        <span className="ml-3 text-xl " style={{ color: "#0097b2", fontFamily: "Georgia" }}>AmiKart</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a href="./" className="mr-10 hover:text-gray-900">Home</a>
                        <a href="./about" className="mr-10 hover:text-gray-900">About</a>
                        <a href="./contact" className="mr-10 hover:text-gray-900">Contact</a>
                        <a href="./order" className="mr-10 hover:text-gray-900">Orders</a>
                    </nav>
                    <button onClick={toggleCart} className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-4 mr-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <i className="fa-solid fa-cart-shopping text-2xl"></i>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>


            <div ref={ref} className=" w-72 h-full sidecart absolute top-0 right-0 bg-blue-100 py-10 px-8 transition:transform transform translate-x-full" style={{ borderRadius: "1rem", zIndex: 1 }}>
                <h2 className="font-bold text-xl text-center">Shopping cart</h2>
                <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-xl"><i className="fa-solid fa-arrow-right-long"></i></span>

                <ol className="list-decimal">
                    {Object.keys(cart).length ==0 && <div className="my-4 text-xl">Cart is Empty!</div>
                    }
                   {Object.keys(cart).map((k)=>{ return <li key={k}>
                        <div className="flex items-center justify-between my-5">
                            <div className="w-2/3">
                                {cart[k].name}
                            </div>
                            <div className="w-1/3 flex items-center justify-center">
                            <i onClick={()=>{
                                removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].variant)
                            }} className="fa-solid fa-circle-minus cursor-pointer mx-3"></i>  {cart[k].qty} <i onClick={()=>{
                                addToCart(k,1,cart[k].price,cart[k].name,cart[k].variant)
                            }} className="fa-solid fa-circle-plus mx-3 cursor-pointer"></i>
                            </div>
                        </div>

                    </li>})}
                   
                   
                   
                   
                    
                </ol>
                <div className="flex">

                <button className="text-white flex mx-2 bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 mt-4 rounded text-lg"> <span><i class="fa-solid fa-bag-shopping mr-3"></i></span>Checkout</button>
      
                <button onClick={ClearCart} className="text-white flex mx-2 bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 mt-4 rounded text-lg">Clear</button>
      
                </div>
                <div><h4>SubTotal: </h4>{SubTotal}</div>

            </div>






        </div>
    )
}

export default Navbar
