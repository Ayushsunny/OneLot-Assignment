import React from "react";
import Image from "next/image";
import dollar from "../../assets/images/dollar.png";
import speak from "../../assets/images/speak.png";
import carfin from "../../assets/images/carfin.png";
import dms from "../../assets/images/dms.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import WhyLot from "./WhyLot";
import Testimonial from "./Testimonial";
import Social from "./Social";

export default function Landing() {
  return (
    <>
      <div className="grid gap-8 grid-cols-2 px-24 mt-12 py-8 border-t border-b">
        <div className="mb-10 pr-24 pt-20">
          <div className="pr-8">
            <p className="text-black text-5xl font-extrabold">
              Everything you need to grow your business
            </p>
            <p className="text-gray-500 text-2xl mt-8 mb-5">
              OneLot is your trusted lending and financing partner, exclusively
              tailored for used car dealership. We also offer digital tools for
              streamlined operations and growth of your dealership.
            </p>
            <a href="/" className="text-[#57009C] text-xl font-semibold">
              Learn more
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="w-4.5 h-4.5 ms-2"
              />
            </a>
          </div>
        </div>

        <div className="mb-10 pr-24 pt-20">
          {/*Upper Part*/}
          <div className="flex items-center mb-2">
            <Image
              src={dollar}
              alt="landing logos"
              className="mr-5"
              width={45}
              height={45}
            />
            <p className="text-2xl font-bold">Dealer Loans</p>
          </div>

          <div className="flex-col ml-16">
            <p className="text-[#5acdd9] text-xl font-medium">
              Accelerate your growth with tailored loan solutions
            </p>
            <p className="text-gray-500 text-xl mt-3">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </p>
          </div>
          {/*Lower Part*/}
          <div className="flex items-center mb-2 mt-7">
            <Image
              src={speak}
              alt="landing logos"
              className="mr-5"
              width={45}
              height={45}
            />
            <p className="text-2xl font-bold">Dealership Management System</p>
          </div>

          <div className="flex-col ml-16">
            <p className="text-[#7E3AF2] text-xl font-medium">
              Enhance Efficiency and Sales with free digital tools for car
              dealerships
            </p>
            <p className="text-gray-500 text-xl mt-3">
              OneLot offers a suite of powerful digital tools designed to
              optimize your dealership&apos;s operations.
            </p>
          </div>
        </div>
      </div>

      {/* First Section */}

      <div className="flex flex-row bg-gray-50 py-20 px-0">
        <div className="flex-none order-1 mb-0">
          <Image
            src={carfin}
            alt="left-image"
            className="hi"
            width={900}
            height={650}
          />
        </div>
        <div className="flex-1 order-2">
          <div className="w-3/4 ml-24">
            <div className="py-0">
              <p className="text-5xl font-extrabold text-black">
                Car Financing
              </p>
              <p className="text-2xl font-semibold my-4 text-black">
                Dealer Loans
              </p>
              <p className="text-gray-500 font-normal text-2xl">
                OneLot’s working capital loans allows car dealer to buy more
                cars and capitalize on car purchase opportunities you would
                otherwise have missed. We transfer the money to your account
                within 6 hours.
              </p>
              <hr className="my-11"></hr>

              <div className="font-medium text-black">
                <div className="flex items-center">
                  <div className="flex mr-3 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </div>

                  <p className="text-xl">
                    Interest as low as 1.5% per month with daily calculation of
                    interest
                  </p>
                </div>

                <div className="flex items-center my-6">
                  <div className="flex mr-3 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </div>

                  <p className="text-xl">
                    Financing up to 70% of the vehicle purchase
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="flex mr-3 mb-7 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </div>
                  <p className="text-xl">
                    Financing period up to 90 days with flexible repayment
                    schedule at any point
                  </p>
                </div>
              </div>
              <hr className="my-11"></hr>
              <p className="text-gray-500 font-normal sm:text-2xl">Use OneLot&apos;s financing solution today, grow the number of cars in your lot and increase your profits</p>
            </div>
            <button
              type="button"
              className="focus:outline-none mt-8 text-white bg-[#57009C] hover:bg-[#44156a] focus:ring-4 font-medium rounded-lg px-6 py-3 "
            >
              View Loans -&gt;
            </button>
          </div>
        </div>
      </div>


      {/* Second Section */}
      <div className="flex flex-row bg-gray-50 py-20 px-0">
        <div className="flex-1 order-2">
          <div className="w-3/4 ml-24">
            <div className="py-0">
              <p className="text-5xl font-extrabold text-black mb-8">
                Dealership Management System
              </p>
              <p className="text-gray-500 font-normal text-2xl">
                OneLot’s digital platform has been build with the single goal to help used car dealers to operate their business more efficiently.
              </p>
              <hr className="my-11"></hr>

              <div className="font-medium text-black">
                <div className="flex items-center">
                  <div className="flex mr-3 mb-7 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-8 h-2.5" />
                  </div>

                  <p className="text-xl">
                    <span className="font-bold">Inventory Management: </span>
                    Track all details about your cars and sales in one place - from car details to buyers. All you need to now in one place
                  </p>
                </div>

                <div className="flex items-center my-6">
                  <div className="flex mr-3 mb-14 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-8 h-2.5" />
                  </div>

                  <p className="text-xl">
                    <span className="font-bold">Marketing Tools: </span>
                    Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="flex mr-3 mb-14 justify-center items-center w-5 h-5 rounded-full bg-[#ede3fbe3] text-[#8945e2]">
                    <FontAwesomeIcon icon={faCheck} className="w-8 h-2.5" />
                  </div>
                  <p className="text-xl">
                    <span className="font-bold">Marketing Insights (Coming Soon): </span>
                    Get insights on prices and volumes for all cars in the market. We provide you all the date by combining data from various sources with a single click of a button.
                  </p>
                </div>
              </div>
              <hr className="my-11"></hr>
              <p className="text-gray-500 font-normal sm:text-2xl">Sign-up OneLot&apos;s dealer platform today, and your cars easier.</p>
            </div>
            <button
              type="button"
              className="focus:outline-none mt-8 text-white bg-[#57009C] hover:bg-[#44156a] focus:ring-4 font-medium rounded-lg px-6 py-3 "
            >
              Explore Now -&gt;
            </button>
          </div>
        </div>
        <div className="flex-none order-3 mb-0">
          <Image
            src={dms}
            alt="right-image"
            className="hi"
            width={900}
            height={650}
          />
        </div>
      </div>

      {/* Why OneLot Section */}
      <WhyLot />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Social Section */}
      <Social />
    </>
  );
}
