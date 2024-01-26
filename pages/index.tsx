import { Inter } from "next/font/google";
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import iphone50 from "../public/img/iphone15pro.webp"
import realme9pro from "../public/img/realme9pro.jpg"
import oneplusnordc3lite from "../public/img/oneplusnordc3lite.jpg"
import realmenarzo60 from "../public/img/realmenarzo60.jpg"
import redminote35g from "../public/img/redminote135g.jpg"
import realmenarzo60x from "../public/img/realmenarzo60x.webp"
import googlepixel7pro from "../public/img/googlepixel7pro.jpg"
import samsunggalaxys24plus from "../public/img/samsunggalaxys24+.jpg"


export default function Home() {
  return (
    <div >

      <Head>
        <title>Amikart</title>
      </Head>
       {/* <Navbar/> */}
       
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={iphone50} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Apple</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">iphone 8</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={realme9pro} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Readmi</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Readmi 9 Pro</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={oneplusnordc3lite} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">OnePlus</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">OnePlus Nord CE 3 Lite 5G</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={realmenarzo60} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Realme</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Realme narzo 60 5G</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={samsunggalaxys24plus} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Samsung</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Samsung Galaxy24+</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image src={googlepixel7pro} alt="" style={{height:"17.5rem",padding:"1rem 2rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Google</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Google Pixel PRO 5G</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
        <Image src={realmenarzo60x} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>

        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Realme</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Realme Narzo 60X</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-50 rounded overflow-hidden">
        <Image src={redminote35g} alt="" style={{height:"16 rem",width:"17rem",border:"2px solid lightgrey",borderRadius:"1rem"}}></Image>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Redmi</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Redmi note 13 5G</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* <Footer/> */}
    </div>
  );
}
