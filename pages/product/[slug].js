import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import mongoose from "mongoose";
import Error from 'next/error'
import Product from "../../models/Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import "aos/dist/aos.css";
import AOS from "aos";
import Review from '../../models/Review';
import Link from 'next/link';

const Post = ({ addToCart, error, product, variants, buyNow, review }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const router = useRouter();
    const { slug } = router.query

    const [pin, setPin] = useState()
    const [service, setService] = useState()

    const checkService = async () => {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`)
        let pinJson = await pins.json()
        if (Object.keys(pinJson).includes((pin))) {
            toast.success("Pincode is Serviceable!", { autoClose: 1000, position: 'bottom-center' })
            setService(true)
        } else {
            toast.error("sorry! Pincode is not Serviceable", { autoClose: 1000, position: 'bottom-center' })
            setService(false)

        }
    }
    const onChangepin = (e) => {
        setPin(e.target.value)
    }

    if (error == 404) {
        return <Error statusCode={404} />
    }
    return <>
        <Head><title> Amikart | {product.title}</title></Head>
        <section className="text-gray-600 body-font overflow-hidden">
            <ToastContainer />
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">

                    <img data-aos="fade-right" src={product.img} alt="" style={{ height: "26rem", width: "25rem", margin: "5rem 0rem" }}></img>
                    <div data-aos="fade-left" className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest"> </h2>
                        <h1 className="text-gray-500 text-xl title-font font-medium mb-1"> {product.brand}</h1>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {product.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{product.descr}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                {product.color && Object.keys(variants).includes('blue') && <button className="border-2 border-blue-200  bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('orange') && <button className="border-2 border-blue-200 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('purple') && <button className="border-2 border-blue-200 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('black') && <button className="border-2 border-blue-200 bg-black-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('white') && <button className="border-2 border-blue-200 bg-white-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('pink') && <button className="border-2 border-blue-200 bg-pink-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('yellow') && <button className="border-2 border-blue-200 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                                {product.color && Object.keys(variants).includes('red') && <button className="border-2 border-blue-200 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>} </div>

                        </div>
                        <div className="flex">
                            {product.availableQty <= 0 ? <span className="title-font font-medium text-2xl text-gray-900">Out Of Stock!</span> :
                                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>}
                            <button onClick={() => { buyNow(slug, 1, product.price, product.title, product.color, product.img, product.priceid) }} disabled={product.availableQty <= 0 ? true : false} className=" ml-10 disabled:bg-indigo-500 text-white  bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-700 rounded">Buy now</button>
                            <button onClick={() => { addToCart(slug, 1, product.price, product.title, product.color, product.img, product.priceid) }} disabled={product.availableQty <= 0 ? true : false} className=" ml-4 disabled:bg-indigo-500 text-white bg-indigo-600 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-700 rounded">Add to Cart</button>

                        </div>
                        <h1 className="text-xl mt-8 text-gray-700  font-bold  mb-2">Details:</h1>
                        <li className=' mt-2 text-gray-900  pl-10'><span className='font-bold'>Battery: </span>{product.battery}mAh</li>
                        <li className=' mt-2 text-gray-900  pl-10'><span className='font-bold'>RAM: </span>{product.ram}GB</li>
                        <li className=' mt-2 text-gray-900  pl-10'><span className='font-bold'>Memory: </span>{product.memory}GB</li>
                        <li className=' mt-2 text-gray-900  pl-10'><span className='font-bold'>CPU: </span>{product.cpu}</li>
                        <li className=' mt-2 text-gray-900  pl-10'><span className='font-bold'>Screen Size: </span>{product.screensize} Inches</li>

                        <div>
                        </div>


                    </div>

                </div>
            </div>
        </section >

        <div className="my-10">

            <h1>
            
                <Link href="../review">
                <div className="flex items-center space-x-2 text-gray-100 font-bold m-10 ">
                    <button className="text-gray-100 transition-transform transform hover:scale-110  font-bold rounded-full bg-indigo-600 "><svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 5v14M5 12h14"></path>
                    </svg></button>
                    <p className="text-gray-700">Add Review</p></div>
                    </Link>
            </h1>

            {review.map((k) => (
                <div className="flex items-start mb-6" key={k._id}>
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Profile picture" />

                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                            </div>

                        </div>
                    </div>

                    <div className="ml-6">
                        <p className="flex items-baseline">
                            <span className="text-gray-600 font-bold">{k.name}</span>
                        </p>
                        <div className="flex items-center mt-1">
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                        </div>

                        <div className="mt-3">
                            <span className="font-bold">{k.heading}</span>
                            <p className="mt-1">{k.decr}.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </>
}

export default Post


export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }


    let product = await Product.findOne({ slug: context.query.slug })
    let variants = await Product.find({ title: product.title })
    let review = await Review.find({ title: { $regex: new RegExp(product.title, "i") } });

    let colorSlug = {}
    let error = null;
    if (product == null) {
        return {
            props: { error: 404 }
        }
    }
    for (let item of variants) {
        if (Object.keys(colorSlug).includes(item.color)) {
            colorSlug[item.color] = { slug: item.slug }
        }
        else {
            colorSlug[item.color] = {}

            colorSlug[item.color] = { slug: item.slug }
        }
    }


    return {
        props: { error: error, product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSlug)), review: JSON.parse(JSON.stringify(review)) }
    }
}
