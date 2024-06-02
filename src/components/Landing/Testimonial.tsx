import React from "react";
import Image from "next/image";
import avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Testimonial() {
  return (
    <div className=" bg-gray-50 text-center px-14 py-28">
      <p className=" text-5xl font-bold mb-5">Testimonials</p>
      <div className="flex flex-col items-center">
        
          <Image
            src={avatar}
            alt="avatar"
            className="mt-6"
            width={140}
            height={140}
          />
          <p className="font-semibold text-3xl mt-4 p-5">
            “The service of OneLot is top-notch, they act fast and can provide{" "}
            <br /> dealers with the funds they need, when they need it.”
          </p>
          <div className="flex justify-center items-center mt-6">
            <p className="text-black font-semibold text-xl sm:mr-4">
              Mark Vergel de Dios
            </p>
            <p className="text-gray-500 text-lg sm:mt-0 mt-2">Owner, MVD Auto Works</p>
          </div>
          <div className="text-center mt-10">
        <button
          className=" text-gray-500 text-2xl px-3"
          
        >
    <FontAwesomeIcon icon={faArrowLeft} />
        

        </button>
        <button
          className="text-gray-500 text-2xl px-3"
         
        >
     <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
     
      </div>
    </div>
  );
}
