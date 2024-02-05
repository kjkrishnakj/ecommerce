import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";


export default function Home({ products }) {
  return (
    <div >

      <Head>
        <title>Amikart</title>
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />

      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4  justify-center" >
            {products.map((item) => {

              return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
                <div className=" lg:w-1/2 md:w-1/2 p-2" style={{ width: "6cm", margin: "0.5cm 2cm" }}>
                  <img src={item.img} alt="" className="w-full h-full object-cover" style={{ height: "16rem", width: "17rem" }} />
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.brand}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">₹{item.price}</p>
                  </div>
                </div>
              </Link>
            })
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
    props: { products: JSON.parse(JSON.stringify(products)) }
  }
}


