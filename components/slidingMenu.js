import React from 'react';
import Slider from "react-slick";
import Link from 'next/link';

const SlidingMenu = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "custom-slider",
  
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Slider {...settings}>
          {Object.keys(products).map((item) => {
            const product = products[item];
            const colors = ["blue", "orange", "purple", "black", "white", "pink", "yellow", "red"];
            return (
              <div key={product._id} className="p-2" style={{ width: "6cm", margin: "0.5cm 2cm" }}>
                <Link passHref={true} href={`/product/${product.slug}`}>
                  <div>
                    <img
                      src={product.img || "/default-image.jpg"}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      style={{ height: "16rem", width: "16rem" }}
                    />
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.brand}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                      <p className="mt-1">₹{product.price}</p>
                    </div>
                    <div className="mt-1">
                      <div className="flex">
                        {colors.map((color) => (
                          product.color.includes(color) && (
                            <button
                              key={color}
                              className={`border-2 border-${color}-200 bg-${color}-700 rounded-full w-6 h-6 focus:outline-none`}
                            ></button>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SlidingMenu;
