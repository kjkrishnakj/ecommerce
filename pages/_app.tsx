import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar" 
import Footer from "../components/Footer" 
import index from "./index" 
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  
  const [cart,setCart] = useState({})
  const [subTotal,setSubTotal] = useState(0)

  useEffect(()=>{
    try{

      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch(e){
      console.error(e);
      localStorage.clear()

    }
  },[])

  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt =0;
    let keys= Object.keys(myCart)
    for(let i =0;i<keys.length;i++){

      subt+=myCart[keys[i]].price* myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }
  
  const addToCart  = (itemCode,qty,price,name,variant)=>{
    let newCart = cart;
    if(itemCode in cart){ 
      newCart[itemCode].qty = cart[itemCode].qty+qty
    }
    else{
      newCart[itemCode] = {qty:1,price,name,variant }

    }
    setCart(newCart);
    saveCart(newCart)
  }
  
  const removeFromCart  = (itemCode,qty,price,name,variant)=>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty-qty
    }
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode]
    } 
    setCart(newCart);
    saveCart(newCart)
  }


 const clearCart = ()=>{
  setCart({})
  saveCart({})
 }


  return( 
    <>
  <Navbar cart = {cart} addToCart ={addToCart} removeFromCart = {removeFromCart} ClearCart = {clearCart} SubTotal = {subTotal}/>
  <Component cart = {cart} addToCart ={addToCart} removeFromCart = {removeFromCart} ClearCart = {clearCart} SubTotal = {subTotal} {...pageProps} />
  <Footer cart = {cart} addToCart ={addToCart} removeFromCart = {removeFromCart} ClearCart = {clearCart} SubTotal = {subTotal}/>
  







  <Script src="https://kit.fontawesome.com/628fde244b.js"></Script>
    </>

  )
}
