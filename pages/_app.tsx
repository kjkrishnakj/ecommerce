import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 
import index from "./index" 

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  







  <Script src="https://kit.fontawesome.com/628fde244b.js"></Script>
    </>

  )
}
