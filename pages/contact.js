import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";


const Contact = () => {
  useEffect(() =>{
    AOS.init();
  },[]);

  const router = useRouter();
  const submit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    toast.success("Thanks for your Feedback", { autoClose: 1000 });
    setTimeout(() => {
      router.push("/");
    }, 1500); // Wait for the toast to close before navigating
  };

  return (
    <>
      <div className="min-h-screen text-gray-700 bg-gray-100">
        <Head>
          <title>Amikart | Contact</title>
        </Head>
        <ToastContainer />
        <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900" data-aos="zoom-in">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl" data-aos="zoom-in">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form onSubmit={submit} className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="name@gmail.com"
                    data-aos="fade-right"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Let us know how we can help you"
                    data-aos="fade-right"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Leave a comment..."
                    data-aos="fade-right"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 mb-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
