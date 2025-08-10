"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon, TwitterIcon, GithubIcon, DribbbleIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thanks for subscribing! You'll receive updates from Shining CarZ soon.");
  };

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      
      <h3 className="mt-16 font-semibold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Premium Car Care Since 2013
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Shining CarZ — Noida trusted name in car wash, detailing, and premium cleaning services.
        Join our community to receive offers, car care tips, and service updates.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded shadow-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1 hover:opacity-80 transition-all"
        />
      </form>

      <a
        href="https://wa.me/919876543210?text=Hi%20Shining%20CarZ!%20I%20would%20like%20to%20book%20a%20car%20wash%20or%20detailing%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-all shadow-md"
      >
        💬 Chat on WhatsApp
      </a>

      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Dribbble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy; {new Date().getFullYear()} Shining CarZ. All rights reserved.
        </span>
        <Link href="/sitemap.xml" className="text-center underline my-4 md:my-0">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with ❤️ for car lovers by{" "}
          <a href="https://shiningcarz.com" className="underline" target="_blank">
            Shining CarZ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
