import React, { useState } from "react";

const Signup = () => {
  return (
    <>
    <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 ">
      <div className="flex justify-center">
        <div className="md:w-[50%] ">
          <div className="text-lg font-bold pl-5 text-[#7B61FF]">
            Stay In The Loop
          </div>
          <p className="font-normal text-base px-5 py-5 itemcount">
            Join our mailing list to stay in the loop with our newest feature
            release, NFT drops and tips and tricks for navigating Voomio.
          </p>
          <div className="flex justify-center pl-4 pr-4">
            <div className="border-2 border-[#6549F6] w-full rounded-lg p-3 bg-white mr-[20px] justify-center items-center gap-2 lg:flex ">
              <input
                type="text"
                name=""
                className="w-full border-0 border-white outline-none text-black"
                placeholder="Your email address"
              />
            </div>
            <button className="btn-hover-anim btn-signup text-white py-1 px-12 rounded-full">
              <nobr>Sign Up</nobr>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
