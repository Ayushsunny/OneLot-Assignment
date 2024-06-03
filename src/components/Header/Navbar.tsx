"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../assets/images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-white px-6 py-3.5 border-b sticky top-0 z-10 text-gray-800 ${
        isScrolled ? "border-gray-300" : "border-white"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between w-full text-lg font-medium">
        <div className="flex items-center gap-5">
          <Image
            src={logo1}
            alt="onelot-logo"
            className="mr-3"
            width={125}
            height={125}
          />
          <ul className="hidden lg:flex items-center justify-center gap-10">
            <li>
              <a href="/" className="text-primary">
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-center inline-flex items-center hover:text-primary"
                type="button"
              >
                Products{" "}
                <span className="font-bold">
                  <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4 ms-2" />
                </span>
              </button>
            </li>
            <li>
              <a href="/" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 lg:mr-3">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-800"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <a href="/" className="mr-4">
              Login
            </a>
            <button
              type="button"
              className="focus:outline-none text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg px-5 py-3"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-start gap-3 mt-3">
          <li>
            <a href="/" className="block text-primary w-full px-4 py-2">
              Home
            </a>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-left inline-flex items-center w-full px-4 py-2 hover:text-primary"
              type="button"
            >
              Products{" "}
              <span className="font-bold">
                <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4 ms-2" />
              </span>
            </button>
          </li>
          <li>
            <a href="/" className="block hover:text-primary w-full px-4 py-2">
              About
            </a>
          </li>
          <li>
            <a href="/" className="block hover:text-primary w-full px-4 py-2">
              Contact
            </a>
          </li>
          <li>
            <a href="/" className="block w-full px-4 py-2">
              Login
            </a>
          </li>
          <li>
            <button
              type="button"
              className="focus:outline-none text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg w-full px-4 py-2 mt-2"
            >
              Inquire Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
