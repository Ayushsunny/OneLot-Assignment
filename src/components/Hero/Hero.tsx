import React from "react";
import Image from "next/image";
import hero from "../../assets/images/hero.png";
import sec from "../../assets/images/sec.png";

export default function Hero() {
  return (
    <div className="bg-white text-center pb-6 mt-14 sm:mt-36">
      <p className="text-4xl sm:text-6xl mb-4 sm:mb-8 font-extrabold px-4 sm:px-20 leading-tight text-black">
        Grow your dealership with working capital loans and digital tools from
        OneLot
      </p>
      <p className="font-normal w-full sm:w-3/5 mx-auto px-4 sm:px-20 text-base sm:text-2xl text-gray-500">
        We enable dealers to buy more cars through our working capital loan
        solutions and sell cars more efficiently through our Dealership
        Management System with its inventory management, marketing solutions and
        market insights
      </p>
      <button
        type="button"
        className="focus:outline-none text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3.5 mx-auto mt-6 sm:mt-10 mb-6 sm:mb-10"
      >
        Inquire Now
      </button>
      <Image
        src={hero}
        alt="home hero"
        className="mx-auto"
        width={1500}
        height={1000}
      />
      <div className="mt-6 sm:mt-10">
        <p className="text-gray-500 text-base sm:text-xl">Regulated by</p>
        <Image
          src={sec}
          alt="sec"
          className="mx-auto mt-2 sm:mt-4"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}