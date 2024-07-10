import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidingMenu = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "custom-slider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Slider {...settings}>
          {Object.keys(products).map((item) => {
            const product = products[item];
            const colors = [
              "blue",
              "orange",
              "purple",
              "black",
              "white",
              "pink",
              "yellow",
              "red",
            ];
            return (
              <div
                key={product._id}
                className="p-2"
                style={{ width: "100%", margin: "0.5cm 2cm" }}
              >
                <Link passHref={true} href={`/product/${product.slug}`}>
                  <div>
                    <div
                      style={{
                        height: "16rem",
                        width: "16rem",
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.img || "/default-image.jpg"}
                        alt={product.title}
                        className="object-cover w-full h-full"
                        style={{
                          objectFit: "contain",
                          height: "100%",
                          width: "100%",
                        }}
                      />
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        right: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

export default SlidingMenu;
