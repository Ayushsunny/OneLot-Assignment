import React from "react";
import Image from "next/image";
import hero from "../../assets/images/hero.png";
import sec from "../../assets/images/sec.png";

export default function Navbar() {
  return (
    <div className="bg-white text-center pb-6 mt-36">
      <p className="text-6xl mb-8 font-extrabold px-20 leading-tight text-black">
        Grow your dealership with working capital loans and digital tools from
        OneLot
      </p>
      <p className="font-normal w-3/5 mx-auto px-20 text-2xl text-gray-500">
        We enable dealers to buy more cars through our working capital loan
        solutions and sell cars more efficiently through our Dealership
        Management System with its inventory management, marketing solutions and
        market insights
      </p>

      <button
        type="button"
        className="focus:outline-none text-white bg-[#57009C] hover:bg-[#44156a] focus:ring-4 font-medium rounded-lg text-lg px-6 py-3.5 mx-auto mt-10 mb-10"
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
      <div className="mt-10">
        <p className="text-gray-500 text-xl">Regulated by</p>
        <Image
          src={sec}
          alt="sec"
          className="mx-auto mt-4"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
