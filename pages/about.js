import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen text-gray-700 ' style={{fontSize:"0.45cm"}}>
      <div className="container py-24 ">
        <div className="lg:w-4/5 mx-auto ">
          {/* <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0"></div> */}
          <h1 className ="flex justify-center text-center text-gray-800" style={{fontSize:"1cm",alignItems:"center"}}>About Amikart</h1>
          <p>Welcome to Amikart, your one-stop destination for all your smartphone needs. At Amikart, we offer a wide range of smartphones with multiple models to choose from.</p>
          <p>Our mission is to provide our customers with the best shopping experience by offering high-quality products, competitive prices, and excellent customer service.</p>
          <p>Whether you're looking for the latest flagship smartphones or budget-friendly options, we've got you covered. Explore our collection and find the perfect smartphone to suit your needs.</p>
         <br />
          <p className="text-gray-800 " style={{fontSize:"0.5cm",fontWeight:"bold"}}>Why Choose Amikart?</p>
          <ul>
            <li>Extensive Selection: We carry a diverse range of smartphones from leading brands, ensuring that you'll find the perfect device for your lifestyle and budget.</li>
            <li>Quality Assurance: All products on Amikart are carefully curated and undergo strict quality checks to ensure that you receive only the best.</li>
            <li>Competitive Prices: We offer competitive prices on all our products, allowing you to enjoy great savings on your smartphone purchase.</li>
            <li>Secure Shopping: Shop with confidence knowing that your personal and payment information is safe and secure with our encrypted checkout process.</li>
            <li>Fast Shipping: We strive to deliver your order as quickly as possible, with fast and reliable shipping options available.</li>
            <li>Responsive Customer Support: Our friendly customer support team is available to assist you with any questions or concerns you may have, ensuring a smooth shopping experience.</li>
          </ul>
         <br />
          <p>Thank you for choosing Amikart for your smartphone shopping!</p>
        </div>
      </div>
    </div>
  )
}

export default About
