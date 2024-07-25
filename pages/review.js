import Head from 'next/head';
import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import { useRouter } from 'next/router';

const Review = () => {
    const router=useRouter()
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [pname, setPname] = useState('');
    const handleChange = (e) => {

        if (e.target.name == 'name') {
            setName(e.target.value);
        }
        else if (e.target.name == 'descr') {
            setDescr(e.target.value);
        }
        else if (e.target.name == 'title') {
            setTitle(e.target.value);
        }
        else if (e.target.name == 'pname') {
            setPname(e.target.value);
        }
    }
    
    const submit = async (e) => {
        e.preventDefault()
        const data = { name, title:pname, heading:title, decr:descr }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        // console.log(response);
        setDescr('')
        setName('')
        setTitle('')
        setPname('')
        setTimeout(() => {
            router.push(process.env.NEXT_PUBLIC_HOST)
        }, 1000)
    };

    return (
        <div className="min-h-screen text-gray-700 bg-gray-100">
            <Head><title>Amikart | Review</title></Head>
            <ToastContainer />
            <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <section className="bg-white p-8 rounded-lg shadow-md">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900" data-aos="zoom-in">
                            Review the Product
                        </h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl" data-aos="zoom-in">
                             Your Review help us to imporve the products.
                        </p>
                        <form onSubmit={submit} className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input value={name} onChange={handleChange} id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Product name</label>
                                <input value={pname} name="pname" onChange={handleChange} type="text" id="subject"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter the model name of the product" data-aos="fade-right" required />
                            </div>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input value={title} name="title" onChange={handleChange} type="text" id="title" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Let us know your title" data-aos="fade-right" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Review</label>
                                <textarea value={descr} name="descr" onChange={handleChange} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Leave a comment..." data-aos="fade-right"></textarea>
                            </div>
                            <button type="submit" className="mt-4 mb-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Review;
