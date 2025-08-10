"use client"
import Link from "next/link";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";    
import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";

const Header = () => {

  const [click, setClick] = useState(false);

const toggle = () =>{
  setClick(!click)
}
  return (
    <header className="w-full py-2 px-5 sm:px-10 flex items-center justify-between bg-dark">
        <Logo />

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
            style={{
             transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}
            
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
             }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
             }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className="w-max py-3 text-black px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem"
         }}
        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/blogs" className="mx-2">Blogs</Link>
            <Link href="https://app.shiningcarz.com/" className="mx-2">Book Now</Link>
        </nav>


        <nav className="text-black w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/blogs" className="mx-2">Blogs</Link>
            <Link href="https://app.shiningcarz.com/" className="mx-2">Book Now</Link>
        </nav>
        <div className=" hidden sm:flex items-center gap-2">
            <Link
                href={siteMetadata.facebook}
                className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link
                href={siteMetadata.instagram}
                className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href={siteMetadata.youtube}
                className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link
                href={siteMetadata.linkedin}
                className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                href={siteMetadata.twitter}
                className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="w-4 h-4" />
              </Link>
        </div>
    </header>
  )
}

export default Header;