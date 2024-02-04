import { Inter } from "next/font/google";

import Head from "next/head";
import Product from "../models/Product";
import connectDb from "../middleware/mongoose";
import mongoose from "mongoose";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import realme9pro from "../public/img/realme9pro.jpg"
import oneplusnordc3lite from "../public/img/oneplusnordc3lite.jpg"
import realmenarzo60 from "../public/img/realmenarzo60.jpg"
import redminote35g from "../public/img/redminote135g.jpg"
import realmenarzo60x from "../public/img/realmenarzo60x.webp"
import iqooneo7pro5g from "../public/img/iqooneo7pro5g.jpg"
import googlepixel7pro from "../public/img/googlepixel7pro.jpg"
import samsunggalaxys24plus from "../public/img/samsunggalaxys24+.jpg"


export default function Home({ products }) {
  return (
    <div >

      <Head>
        <title>Amikart</title>
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'/>

      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center" >
              {products.map((item)=>{
                
                return<Link key={item._id} href= {`/product/${item.slug}`}>
                 <div className=" md:w-1/2 p-2  shadow-xl "style={{width:"6cm",margin:"auto 2cm"}}>
              <a className="block relative h-50 rounded overflow-hidden">
                <img src={item.img} alt="" style={{ height: "16 rem", width: "17rem" }}/>
              </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.brand}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">₹{item.price}</p>
                </div>
                </div>
              </Link>})
              }
 
            </div>
          </div>
      </section>


    </div>
  );
  
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }


  let products = await Product.find()
  return {
    props: { products:JSON.parse(JSON.stringify(products)) }
  }
}


