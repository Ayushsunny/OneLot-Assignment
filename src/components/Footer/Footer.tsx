import React from "react";
import Image from "next/image";
import logo1 from "../../assets/images/logo1.png";
import { US } from "country-flag-icons/react/3x2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      {/* Footer Inquire Section */}
      <div className="flex flex-col justify-center items-center gap-2 mx-4 p-6 md:mx-20 md:p-14">
        <p className="text-3xl font-extrabold mb-4 md:text-5xl md:mb-8">
          Get started today
        </p>
        <p className="text-gray-500 font-normal text-base text-center md:text-xl md:w-5/12 md:ml-6 md:text-left">
          We look forward to serving the needs of used car dealers across the
          Philippines and helping them thrive in this dynamic market.
        </p>
        <div className="mt-6 md:mt-8">
          <button
            type="button"
            className="focus:outline-none text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg px-4 py-2 md:px-5 md:py-3"
          >
            Inquire Now
          </button>
        </div>
      </div>

      {/* Footer Guide Section */}

      <footer className="flex flex-col sm:flex-row mt-17 sm:justify-between sm:items-center mx-10 mt-8 p-10">
        <Image
          src={logo1}
          alt="onelot-logo"
          className="sm:mr-3"
          width={170}
          height={170}
        />
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col sm:flex-row gap-8 text-[#6B7280] text-lg">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          <div className="flex justify-end items-center">
            <span className="text-xs p-1 font-semibold text-gray-700">ENG</span>
            <US title="United States" className="h-6 w-6 mx-2" />
            <span className="font-extrabold text-gray-600">
              <FontAwesomeIcon icon={faAngleDown} className="w-4.5 h-4.5" />
            </span>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="flex flex-col justify-start p-16 border-t">
        <div className="flex justify-between">
          <span className="text-gray-500  dark:text-gray-400">
            © 2023{" "}
            <a className="" href="/">
              OneLot Technologies Incorporated Pte. Ltd
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 sm:justify-end sm:mt-0">
            <a href="#" className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-7 h-9 hover:text-primary focus:text-primary"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-7 h-7 hover:text-primary focus:text-primary"
              />
            </a>
          </div>
        </div>
        <span className="text-gray-500  dark:text-gray-400">
          © 2023{" "}
          <a className="" href="/">
            OneLot Financing Corporation
          </a>
          . All Rights Reserved.
        </span>
      </div>


    </>
  );
}
