"use client"
import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
function Header() {
  return (
    <header className=" " style={{backgroundColor:"rgb(17,24,39)"}}>
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
  
      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
      
        </nav>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <LoginLink
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
              
            >
              Login
            </LoginLink>
  
            <RegisterLink
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
             
            >
              Register
            </RegisterLink>
          </div>

        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
