import React from "react";


export default function Social() {
    return (
        <div className="bg-white pt-10 mb-14 border-t">
        <div className="text-center px-8 py-14">
            
        <p className="text-4xl font-extrabold mb-8">Stay Connected</p>
        
        <p className="text-gray-500 font-normal sm:w-1/3 mx-auto">Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent recent offers, updates and new product features</p>
            <div className="flex justify-center mt-10"><a href="https://www.facebook.com/OneLotPH" target="_blank" className="mr-8"><img src="/assets/images/facebook.png" alt="facebook" class="w-10 h-10" /></a><a href="https://www.instagram.com/onelotph/" target="_blank"><img src="/assets/images/instagram.png" alt="instagram" class="w-10 h-10" /></a></div>

        </div></div>
    );
}