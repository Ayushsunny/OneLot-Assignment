"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../assets/images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white px-6 py-3.5 border-b sticky top-0 z-10 text-gray-800 ${
        isScrolled ? "border-gray-300" : "border-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between w-full text-lg font-medium">
        <div className="flex gap-5">
          <Image
            src={logo1}
            alt="onelot-logo"
            className="mr-3"
            width={125}
            height={125}
          />
          <ul className="flex items-center justify-center gap-10">
            <li>
              <a href="/" className="text-[#57009C]">
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-center inline-flex items-center  hover:text-[#57009C]"
                type="button"
              >
                Products{" "}
                <span className="font-bold">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="w-4 h-4 ms-2"
                  />
                </span>
              </button>
            </li>
            <li>
              <a href="/" className="hover:text-[#57009C]">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-[#57009C]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-3 mr-3">
          <a href="/" className="mr-4">
            Login
          </a>
          <button
            type="button"
            className="focus:outline-none text-white bg-[#57009C] hover:bg-[#44156a] focus:ring-4 font-medium rounded-lg px-5 py-3 "
          >
            Inquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}
