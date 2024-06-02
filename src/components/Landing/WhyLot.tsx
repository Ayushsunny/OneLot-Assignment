import React from "react";
import Image from "next/image";
import trust from "../../assets/images/trust.png";
import easy from "../../assets/images/easy.png";
import fast from "../../assets/images/fast.png";
import flexible from "../../assets/images/flexible.png";
import amount from "../../assets/images/amount.png";

export default function WhyLot() {
    return (
        <div className="bg-white text-center px-16 py-28 border-t border-b">
            <p className="text-5xl font-extrabold mb-20">Why Onelot?</p>
            <div className="flex gap-6 flex-row justify-center items-center">
                {/* First Card */}
                <div className="bg-white shadow-md flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80">
                    <div className="flex h-full flex-col justify-center gap-4 p-8">
                        <div className="h-1/3 flex items-center justify-center mb-0">
                            <div className="p-0">
                                <Image
                                    src={trust}
                                    alt="landing logos"
                                    className="hi"
                                    width={65}
                                    height={65}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-0 h-2/3 overflow-hidden w-full">
                            <p className="text-xl font-semibold mx-4 text-black text-center mb-6 w-full">Trust</p>
                            <p className="text-lg text-gray-500 text-center overflow-hidden">Regulated by Securities and Exchange Commission (SEC) Philippines</p>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-white shadow-md flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80">
                    <div className="flex h-full flex-col justify-center gap-4 p-8">
                        <div className="h-1/3 flex items-center justify-center mb-0">
                            <div className="p-0">
                                <Image
                                    src={amount}
                                    alt="landing logos"
                                    className="hi"
                                    width={65}
                                    height={65}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-0 h-2/3 overflow-hidden w-full">
                            <p className="text-xl font-semibold mx-4 text-black text-center mb-6 w-full">High Amount</p>
                            <p className="text-lg text-gray-500 text-center overflow-hidden">Get the highest loan amounts compared to other banks and lenders</p>
                        </div>
                    </div>
                </div>
                {/* Third Card */}
                <div className="bg-white shadow-md flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80">
                    <div className="flex h-full flex-col justify-center gap-4 p-8">
                        <div className="h-1/3 flex items-center justify-center mb-0">
                            <div className="p-0">
                                <Image
                                    src={fast}
                                    alt="landing logos"
                                    className="hi"
                                    width={65}
                                    height={65}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-0 h-2/3 overflow-hidden w-full mb-6">
                            <p className="text-xl font-semibold mx-4 text-black text-center mb-6 w-full">Fast</p>
                            <p className="text-lg text-gray-500 text-center overflow-hidden">Get the money within a few hours on the same day</p>
                        </div>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="bg-white shadow-md flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80">
                    <div className="flex h-full flex-col justify-center gap-4 p-8">
                        <div className="h-1/3 flex items-center justify-center mb-0">
                            <div className="p-0">
                                <Image
                                    src={flexible}
                                    alt="landing logos"
                                    className="hi"
                                    width={65}
                                    height={65}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-0 h-2/3 overflow-hidden mb-6 w-full">
                            <p className="text-xl font-semibold mx-4 text-black text-center mb-6 w-full">Flexible</p>
                            <p className="text-lg text-gray-500 text-center overflow-hidden">Loans are tailored to your needs</p>
                        </div>
                    </div>
                </div>

                {/* Fifth Card */}
                <div className="bg-white shadow-md flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden w-80 h-80">
                    <div className="flex h-full flex-col justify-center gap-4 p-8">
                        <div className="h-1/3 flex items-center justify-center mb-0">
                            <div className="p-0">
                                <Image
                                    src={easy}
                                    alt="landing logos"
                                    className="hi"
                                    width={65}
                                    height={65}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-0 h-2/3 overflow-hidden w-full mb-2">
                            <p className="text-xl font-semibold mx-4 text-black text-center mb-6 w-full">Easy</p>
                            <p className="text-lg text-gray-500 text-center overflow-hidden">Run through an easy process and get your first loans within days</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
