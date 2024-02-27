import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-xs   overflow-y-hidden mt-20  pt-2 text-slate-200'>
      <ul className='flex justify-around w-[50%] mx-auto cursor-pointer'>
        <li className='hover:text-red-900'>Term of use</li>
        <li className='hover:text-red-900'>Privacy Ploicy</li>
        <li className='hover:text-red-900'>About</li>
        <li className='hover:text-red-900'>FAQ</li>
        <li className='hover:text-red-900'>Blog</li>
      </ul>
      <p className='w-[70%] mx-auto justify-items-center p-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.esse cillum dolore
         eu fugiat nulla pariatur.


      </p>
      <div className="flex w-[20%] mx-auto justify-around cursor-pointer">
                    <span className="hover:text-red-900">
                        <FaFacebookF />
                    </span>
                    <span className="hover:text-red-900">
                        <FaInstagram />
                    </span>
                    <span className="hover:text-red-900">
                        <FaTwitter />
                    </span>
                    <span className="hover:text-red-900">
                        <FaLinkedin />
                    </span>
                </div>
    </footer>
  )
}

export default Footer