import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-8 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt=""
          width={200}
          className="w-[130px] sm:w-[150px]"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-2 border border-solid border-black shadow-[-7px_-7px_0px_#000] cursor-pointer">
          Get Started
          <Image src={assets.arrow} alt="" />
        </button>
      </div>

      <div className="my-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs </h1>
        <p className="mt-5 max-w-[740px] m-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
          hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores, hic
        </p>

        <form className="flex justify-between max-w-[500px]  scale-75 sm:scale-100 mt-5 mx-auto border border-black shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-3 px-3 sm:px-6 active:bg-gray-600 active:text-white cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
