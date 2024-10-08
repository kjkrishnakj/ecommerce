import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
type CartItem = {
  qty: number;
  price: number;
  name: string;
  variant: string;
  priceids:string[];  
  img: string;
};

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [subTotal, setSubTotal] = useState<number>(0);
  const router = useRouter()
  const [user, setUser] = useState<{ value: string | null }>({ value: null });

  const [key, setKey] = useState<number>()
  const [progress, setProgress] = useState(0)
  // const [email,setEmail]=useState<{ value: string | null }>({value: null})
  
  
  useEffect(() => {
    // const em = localStorage.getItem('email')
    // setEmail(em)
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
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
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token })
    }
    setKey(Math.random());
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })

    setKey(Math.random())
    router.push('/login')
  }
  const saveCart = (myCart: Record<string, CartItem>) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addToCart = (
    itemCode: string,
    qty: number,
    price: number,
    name: string,
    variant: string,
    img: string,
    priceid: string
  ) => {
    if (Object.keys(cart).length === 0) {
      setKey(Math.random());
    }
  
    const newCart = { ...cart };
  
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
  
      if (!newCart[itemCode].priceids.includes(priceid)) {
        newCart[itemCode].priceids.push(priceid);
      }
    } else {
      newCart[itemCode] = { qty, price, name, variant, img, priceids: [priceid] };
    }
  
    setCart(newCart);
    saveCart(newCart);
  
    const priceIds = JSON.parse(localStorage.getItem('priceids') || '[]');
    if (!priceIds.includes(priceid)) {
      priceIds.push(priceid);
      localStorage.setItem('priceids', JSON.stringify(priceIds));
    }
  };
  
  
  const buyNow = (itemCode: string, qty: number, price: number, name: string, variant: string, img: string,priceid:string) => {
    const newCart: Record<string, CartItem> = {};  
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
  
      if (!newCart[itemCode].priceids.includes(priceid)) {
        newCart[itemCode].priceids.push(priceid);
      }
    } else {
      newCart[itemCode] = { qty, price, name, variant, img, priceids: [priceid] };
    }
    // newCart[itemCode] = { qty: 1, price, name, variant, img,priceids };  
    setCart(newCart);
    saveCart(newCart);
    // localStorage.setItem('priceid',priceid);
    const priceIds = JSON.parse(localStorage.getItem('priceids') || '[]');
    if (!priceIds.includes(priceid)) {
      priceIds.push(priceid);
      localStorage.setItem('priceids', JSON.stringify(priceIds));
    }
    
    router.push(`/checkout`)
  }
  const removeFromCart = (itemCode: string, qty: number) => {
    const newCart = { ...cart };
    let removedPriceIds: string[] = [];
  
    if (itemCode in newCart) {
      newCart[itemCode].qty -= qty;
  
      if (newCart[itemCode]?.qty <= 0) {
        removedPriceIds = newCart[itemCode].priceids;  
        delete newCart[itemCode];   
      }
    }
  
    setCart(newCart);
    saveCart(newCart);
  
    const priceIds = JSON.parse(localStorage.getItem('priceids') || '[]');
    const updatedPriceIds = priceIds.filter((id: string) => !removedPriceIds.includes(id));
    localStorage.setItem('priceids', JSON.stringify(updatedPriceIds));
  };
  
  
  const clearCart = () => {
    setCart({});
    saveCart({});
    localStorage.removeItem('priceids');
    
  };


  return (
    <>
      <LoadingBar
        color="#6366F1"
        progress={progress}
        waitingTime={200}
        onLoaderFinished={() => setProgress(0)}
      />

      <ToastContainer />
      {key && <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} SubTotal={subTotal} />
      }<Component buyNow={buyNow}  user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} ClearCart={clearCart} SubTotal={subTotal} {...pageProps} />
      <Footer />

      <Script src="https://kit.fontawesome.com/628fde244b.js"></Script>
    </>
  );
}
