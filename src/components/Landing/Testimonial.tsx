import React from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
  return (
    <div className="bg-gray-50 text-center px-4 py-20 md:px-14 md:py-28">
      <p className="text-4xl font-bold mb-5 md:text-5xl">Testimonials</p>
      <div className="flex flex-col items-center">
        <Image
          src={avatar}
          alt="avatar"
          className="mt-6"
          width={140}
          height={140}
        />
        <p className="font-semibold text-2xl mt-4 p-4 md:text-3xl md:p-5">
        &quot;The service of OneLot is top-notch, they act fast and can provide
          <br className="hidden md:inline" /> dealers with the funds they need, when they need it.&quot;
        </p>
        <div className="flex flex-col items-center justify-center mt-6 md:flex-row md:justify-center">
          <p className="text-black font-semibold text-xl md:mr-4">
            Mark Vergel de Dios
          </p>
          <p className="text-gray-500 text-lg mt-2 md:mt-0">Owner, MVD Auto Works</p>
        </div>
        <div className="text-center mt-10">
          <button className="text-gray-500 text-2xl px-3">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="text-gray-500 text-2xl px-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
