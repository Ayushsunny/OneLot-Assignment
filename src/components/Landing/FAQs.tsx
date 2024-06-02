import React from "react";

export default function FAQs() {
    return (
        <div className="bg-gray-50 px-8 py-28 text-gray-500">
            <p className="text-5xl font-extrabold mb-8 text-center text-black">
                Frequently asked questions
            </p>
            <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-16 text-xl">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex items-center font-medium cursor-pointer list-none text-left ">
                            <svg
                                stroke="currentColor"
                                fill="#6B7280"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="flex-shrink-0 mr-2"
                                height="1.25em"
                                width="1.25em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                            </svg>
                            <span className="text-[#6B7280]  group-open:text-black">
                                {" "}
                                How do I apply for a loan?
                            </span>
                            <span className="transition group-open:rotate-180 ml-auto text-[#6B7280] group-open:text-black">
                                <svg
                                    fill="none"
                                    height="24"
                                    shape-rendering="geometricPrecision"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-gray-500 mt-5 ml-8 group-open:animate-fadeIn text-left">
                            OneLot onboarding is easy and straightforward onboarding process.
                            We only require a few documents and after a few days you can get
                            your first loan.
                        </p>
                        <p className="text-gray-500 mt-3 ml-8 group-open:animate-fadeIn text-left">
                            Check here for the exact requirements{" "}
                            <a href="/" className="text-[#57009C] font-medium">
                                See full requirements
                            </a>
                        </p>
                    </details>
                </div>

                <div className="py-5">
                    <details className="group">
                        <summary className="flex  items-center font-medium cursor-pointer list-none text-left">
                            <svg
                                stroke="currentColor"
                                fill="#6B7280"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="flex-shrink-0 mr-2"
                                height="1.25em"
                                width="1.25em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                            </svg>
                            <span className="text-[#6B7280]  group-open:text-black">
                                {" "}
                                What are the interest rates offered?
                            </span>
                            <span className="transition group-open:rotate-180 ml-auto text-[#6B7280] group-open:text-black">
                                <svg
                                    fill="none"
                                    height="24"
                                    shape-rendering="geometricPrecision"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-gray-500 mt-5 ml-8 group-open:animate-fadeIn text-left">
                            OneLot onboarding is easy and straightforward onboarding process.
                            We only require a few documents and after a few days you can get
                            your first loan.
                        </p>
                        <p className="text-gray-500 mt-3 ml-8 group-open:animate-fadeIn text-left">
                            Check here for the exact requirements{" "}
                            <a href="/" className="text-[#57009C] font-medium">
                                See full requirements
                            </a>
                        </p>
                    </details>
                </div>

                <div className="py-5">
                    <details className="group">
                        <summary className="flex  items-center font-medium cursor-pointer list-none text-left">
                            <svg
                                stroke="currentColor"
                                fill="#6B7280"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="flex-shrink-0 mr-2"
                                height="1.25em"
                                width="1.25em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                            </svg>
                            <span className="text-[#6B7280]  group-open:text-black">
                                What kind of vehicles can I upload?
                            </span>
                            <span className="transition group-open:rotate-180 ml-auto text-[#6B7280] group-open:text-black">
                                <svg
                                    fill="none"
                                    height="24"
                                    shape-rendering="geometricPrecision"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-gray-500 mt-5 ml-8 group-open:animate-fadeIn text-left">
                            OneLot onboarding is easy and straightforward onboarding process.
                            We only require a few documents and after a few days you can get
                            your first loan.
                        </p>
                        <p className="text-gray-500 mt-3 ml-8 group-open:animate-fadeIn text-left">
                            Check here for the exact requirements{" "}
                            <a href="/" className="text-[#57009C] font-medium">
                                See full requirements
                            </a>
                        </p>
                    </details>
                </div>

                <div className="py-5">
                    <details className="group">
                        <summary className="flex  items-center font-medium cursor-pointer list-none text-left">
                            <svg
                                stroke="currentColor"
                                fill="#6B7280"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                className="flex-shrink-0 mr-2"
                                height="1.25em"
                                width="1.25em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                            </svg>
                            <span className="text-[#6B7280]  group-open:text-black">
                                How can I keep track of potential buyers?
                            </span>
                            <span className="transition group-open:rotate-180 ml-auto text-[#6B7280] group-open:text-black">
                                <svg
                                    fill="none"
                                    height="24"
                                    shape-rendering="geometricPrecision"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-gray-500 mt-5 ml-8 group-open:animate-fadeIn text-left">
                            OneLot onboarding is easy and straightforward onboarding process.
                            We only require a few documents and after a few days you can get
                            your first loan.
                        </p>
                        <p className="text-gray-500 mt-3 ml-8 group-open:animate-fadeIn text-left">
                            Check here for the exact requirements{" "}
                            <a href="/" className="text-[#57009C] font-medium">
                                See full requirements
                            </a>
                        </p>
                    </details>
                </div>
            </div>
            <div className="flex justify-center mt-8">
            <button
                type="button"
                className="focus:outline-none mt-8 text-white bg-[#57009C] hover:bg-[#44156a] focus:ring-4 font-medium rounded-lg px-6 py-3 mx-auto"
            >
                See All -&gt;
            </button>
            </div>
            </div>
    );
}
