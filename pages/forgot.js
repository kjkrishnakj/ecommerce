import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/ak_logo4.png"
import { useRouter } from 'next/router'

import Head from "next/head";

const forgot = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')

const handleChange=(e)=>{
  if (e.target.name == 'password') {
    setPassword(e.target.value);
  }

  else if (e.target.name == 'cpassword') {
    setCpassword(e.target.value);
  }
  else if (e.target.name == 'email') {
    setEmail(e.target.value);
  }
}

  const sendEmail=async()=>{
    let data ={email,sendEmail:true}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let res = await a.json();
    if(res.success){
      console.log("Password has been sent")
    }
    else{
      console.log("Password cant be sent")

    }
  }
  const resetPass=async()=>{
    if (password==cpassword){
    let data ={password,sendEmail:false}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let res = await a.json();
    if(res.success){
      console.log("Password has been changed")
    }
    else{
      console.log("Something went wrong")

    }
  }
}

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/')
    }
    // console.log(router);
  }, [])
  return (
    <div>
      <Head><title>Amikart | Forgot</title></Head>
      <div>
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mt-16  sm:mx-auto sm:w-full sm:max-w-sm">
            <Image className='mx-auto' src={logo} alt="" style={{ height: "4rem", width: "6rem" }}></Image>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           {router.query.ftoken && <div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">New Password</label>
                <div className="mt-2">
                  <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm New Password</label>
                <div className="mt-2">
                  <input value={cpassword} onChange={handleChange} id="cpassword" name="cpassword" type="password" autoComplete="cpassword" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>



              <div>
                <button disabled={password!=cpassword} onClick={resetPass} type="submit" className="flex w-full justify-center rounded-md bg-indigo-700 disabled:bg-indigo-300  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Confirm</button>
              </div>
            </form>
            </div>}

           {!router.query.ftoken && <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input  value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>



              <div>
                <button  onClick={sendEmail} type="submit" className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send mail</button>
              </div>
            </form>}
            {password!=cpassword &&
            <span className="text-red-600">Password does not match</span>
            }

            <p className="mt-10 text-center text-sm text-gray-500">
              Or
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forgot
