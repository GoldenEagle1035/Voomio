import React, { useState } from "react";
import StayLoop from "../UploadNft/StayLoop";
import { Link } from "react-router-dom";
import "./NftGenerator.css";

const NftGenerator = () => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleSelect = (i) => {
    let select = document.getElementsByClassName("option");
    for (let k = 0; k < select.length; k++) {
      select[k].className =
        "mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]";
    }

    if (i === 0) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide option selected";
    } else if (i === 1) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide option selected";
    } else if (i === 2) {
      let btnSelect = document.getElementById(`${i}`);
      btnSelect.className =
        "-translate-y-12 bg-[#F4EEFF] rounded-xl bg-[#F4EEFF] text-white mt-20 border-2 border-[#7B61FF] md:m-4 font-medium text-xl tracking-wide option selected";
    }

    setSelectedOption(i);
  };

  const Price = [
    {
      id: "0",
      Title: "A great deal",
      subTitle: "Billed biannualy ($300)",
      price: "50",
      year: "mo",
    },
    {
      id: "1",
      Title: "Popular",
      subTitle: "This is the best plan.",
      price: "75",
      year: "mo",
    },
    {
      id: "2",
      Title: "A great deal",
      subTitle: "Annual payments of $500.",
      price: "500",
      year: "yr",
    },
  ];

  return (
    <>
      <div className="container max-w-7xl mx-auto px-8 md:px-20 pt-20 ">
        <div className=" text-5xl font-bold text-[#222222]">NFT Generator</div>
        <div className="text-[#7B61FF] pt-6 font-semibold text-3xl">
          Pricing
        </div>
        <div className="text-[#000000]  font-semibold text-2xl pb-16 popuptittle">
          Select a subscription for the PFP & Collection Generator.
        </div>
        <div className="pricing-mode md:flex md:pt-20">
          {Price.map((i, d) => (
            <div
              id={i.id}
              className="option mb-2 mr-5 pt-10 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF]"
            >
              <p className=" m-4 font-medium text-xl tracking-wide bg-[#E0E7FF]  text-[#4F46E5]  w-max  px-4 py-2 rounded-full uppercase">
                {i.Title}
              </p>

              <div className="flex m-4 items-baseline">
                <span className="text-5xl font-extrabold tracking-tight lg:text-7xl text-[#111827]">
                  ${i.price}
                </span>
                <span className="ml-1 text-2xl font-medium text-[#6B7280]">
                  {i.year}
                </span>
              </div>
              {/* <div className=""> */}
              <span className=" pl-5 font-normal text-base text-[#333333] popuptittle">
                {i.subTitle}
              </span>
              {/* </div> */}
              <div className="bg-[white]/60 hover:bg-[white]/60 rounded-xl">
                <ul role="list" className="my-7 space-y-5 m-4 pt-5 popuptittle">
                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li className="flex space-x-2">
                    <i className="fa-solid fa-check text-[#22c55e]"></i>
                    <p className="pl-1 text-[#6B7280] text-base c font-medium leading-tight ">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div className="flex justify-center ">
                  <button
                    onClick={() => {
                      handleSelect(d);
                    }}
                    type="button"
                    className="btn-select text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide  md:px-32 py-2 px-16 rounded-full"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex pt-8 items-center itemcount">
          <button
            onClick={() => {
              handleSelect(3);
            }}
            type="button"
            className={`${
              selectedOption === 3
                ? "bg-[#7B61FF] text-[#fff]"
                : "bg-[#ffffff] text-[#7B61FF]"
            } border-2 border-[#7B61FF] m-4 font-medium text-xl tracking-wide md:px-32 py-2 px-16 rounded-full`}
          >
            Select
          </button>
          <div className=" ">
            <p className="text-2xl  font-normal">
              Basic
              <span className="text-sm  font-medium pl-2 text-[#4F46E5] ">
                {" "}
                FREE
              </span>
            </p>

            <p className="font-normal text-base">
              Only single NFTs can be generated with Basic plan.
            </p>
          </div>
        </div>
        {true && (
          <div>
            <div
              className={`pt-10 ${selectedOption === -1 ? "opacity-30" : ""}`}
            >
              <p className="text-3xl font-semibold text-[#7B61FF]">NFT Type</p>
              <p className="font-normal text-2xl itemcount">
                Select a subscription for the PFP & Collection Generator.
              </p>
            </div>
            <div className="pt-10 grid md:grid-cols-2  grid-col-1 gap-4">
              <div
                className={`mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md border-[#7B61FF] ${
                  selectedOption === -1 ? "opacity-30" : ""
                }`}
              >
                <svg
                  className="mt-5 mx-5 my-5"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55556 1.5415V8.65262M2 5.09706H9.11111M7.33333 26.4304V33.5415M3.77778 29.9859H10.8889M19.7778 1.5415L23.8418 13.7317L34 17.5415L23.8418 21.3513L19.7778 33.5415L15.7138 21.3513L5.55556 17.5415L15.7138 13.7317L19.7778 1.5415Z"
                    stroke="#7B61FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-base font-semibold pl-5">
                  Create a Single NFT
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount">
                  This will generate a tokenset based on the preview you have
                  seen in the gallery. What you’ve seen is what you get. Voomio
                  adds randomization to the token number.
                </p>
                <Link to="/general">
                  <button
                    disabled={selectedOption === -1}
                    // onClick={() => {
                    //   handleSelect(1);
                    // }}
                    type="button"
                    className="itemcount text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                  >
                    Get Started
                  </button>
                </Link>
              </div>

              <div
                className={`mb-2 mr-5 md:mr-2 rounded-xl border-2 shadow-md  border-[#7B61FF] ${
                  selectedOption > -1 && selectedOption < 3 ? "" : "opacity-30"
                }`}
              >
                <svg
                  className="mt-5 mx-5 my-5"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 21.5415V33.5415V21.5415ZM22 27.5415H34H22ZM6 13.5415H10C11.0609 13.5415 12.0783 13.1201 12.8284 12.3699C13.5786 11.6198 14 10.6024 14 9.5415V5.5415C14 4.48064 13.5786 3.46322 12.8284 2.71308C12.0783 1.96293 11.0609 1.5415 10 1.5415H6C4.93913 1.5415 3.92172 1.96293 3.17157 2.71308C2.42143 3.46322 2 4.48064 2 5.5415V9.5415C2 10.6024 2.42143 11.6198 3.17157 12.3699C3.92172 13.1201 4.93913 13.5415 6 13.5415ZM26 13.5415H30C31.0609 13.5415 32.0783 13.1201 32.8284 12.3699C33.5786 11.6198 34 10.6024 34 9.5415V5.5415C34 4.48064 33.5786 3.46322 32.8284 2.71308C32.0783 1.96293 31.0609 1.5415 30 1.5415H26C24.9391 1.5415 23.9217 1.96293 23.1716 2.71308C22.4214 3.46322 22 4.48064 22 5.5415V9.5415C22 10.6024 22.4214 11.6198 23.1716 12.3699C23.9217 13.1201 24.9391 13.5415 26 13.5415ZM6 33.5415H10C11.0609 33.5415 12.0783 33.1201 12.8284 32.3699C13.5786 31.6198 14 30.6024 14 29.5415V25.5415C14 24.4806 13.5786 23.4632 12.8284 22.7131C12.0783 21.9629 11.0609 21.5415 10 21.5415H6C4.93913 21.5415 3.92172 21.9629 3.17157 22.7131C2.42143 23.4632 2 24.4806 2 25.5415V29.5415C2 30.6024 2.42143 31.6198 3.17157 32.3699C3.92172 33.1201 4.93913 33.5415 6 33.5415Z"
                    stroke="#7B61FF"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="text-base font-semibold pl-5">
                  Create an NFT Set
                </div>
                <p className="font-normal text-base px-5 py-5 itemcount">
                  This will create a set based on your rules and rarity
                  settings, but isn’t what you saw in the gallery. This will
                  guarantee higher randomization and less bias.
                </p>
                <Link to="/collection_stats">
                  <button
                    disabled={selectedOption < 0 || selectedOption > 2}
                    type="button"
                    className=" itemcount text-[#7B61FF] bg-[#ffffff] border-2 border-[#7B61FF] m-5 font-medium text-xl tracking-wide  md:px-16 py-2 px-8 rounded-full text-center"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <StayLoop />
          </div>
        )}
      </div>
    </>
  );
};

export default NftGenerator;
