import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  qty: number;
  price: number;
  name: string;
  variant: string;
};

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [subTotal, setSubTotal] = useState<number>(0);
  const router = useRouter()
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
        saveCart(JSON.parse(storedCart));
      }
    } catch (e) {
      console.error(e);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart: Record<string, CartItem>) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode: string, qty: number, price: number, name: string, variant: string) => {
    const newCart = { ...cart }; // Make a copy to avoid directly modifying the state
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const buyNow=(itemCode: string, qty: number, price: number, name: string, variant: string)=>{
   
     router.push("./checkout")
}

  const removeFromCart = (itemCode: string, qty: number, price: number, name: string, variant: string) => {
    const newCart = { ...cart }; // Make a copy to avoid directly modifying the state
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]?.qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <>
      <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} SubTotal={subTotal} />
      <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} SubTotal={subTotal} {...pageProps} />
      <Footer />

      <Script src="https://kit.fontawesome.com/628fde244b.js"></Script>
    </>
  );
}
