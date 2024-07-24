import React from "react";
import Head from "next/head";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() =>{
    AOS.init();
  },[]);

  return (
    <div className="min-h-screen text-gray-700 font-sans bg-gray-100 ">
      <Head>
        <title>Amikart | About</title>
      </Head>
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 ">
        <div className="lg:w-4/5 mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6" data-aos="zoom-in">
            About Amikart
          </h1>
          <p className="text-lg mb-4" data-aos="fade-right">
            Welcome to Amikart, your one-stop destination for all your
            smartphone needs. At Amikart, we offer a wide range of smartphones
            with multiple models to choose from.
          </p>
          <p className="text-lg mb-4" data-aos="fade-right">
            Our mission is to provide our customers with the best shopping
            experience by offering high-quality products, competitive prices,
            and excellent customer service.
          </p>
          <p className="text-lg mb-4" data-aos="fade-right">
            Whether you are looking for the latest flagship smartphones or
            budget-friendly options, we have got you covered. Explore our
            collection and find the perfect smartphone to suit your needs.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Why Choose Amikart?
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2" data-aos="fade-left">
            <li>
              Extensive Selection: We carry a diverse range of smartphones from
              leading brands, ensuring that you will find the perfect device for
              your lifestyle and budget.
            </li>
            <li>
              Quality Assurance: All products on Amikart are carefully curated
              and undergo strict quality checks to ensure that you receive only
              the best.
            </li>
            <li>
              Competitive Prices: We offer competitive prices on all our
              products, allowing you to enjoy great savings on your smartphone
              purchase.
            </li>
            <li>
              Secure Shopping: Shop with confidence knowing that your personal
              and payment information is safe and secure with our encrypted
              checkout process.
            </li>
            <li>
              Fast Shipping: We strive to deliver your order as quickly as
              possible, with fast and reliable shipping options available.
            </li>
            <li>
              Responsive Customer Support: Our friendly customer support team is
              available to assist you with any questions or concerns you may
              have, ensuring a smooth shopping experience.
            </li>
          </ul>
          <p className="text-lg mt-6">
            Thank you for choosing Amikart for your smartphone shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
