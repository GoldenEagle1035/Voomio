import React, { useEffect, useState } from "react";
import "./Aggregator.css";

const Aggregator = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [model, setModel] = useState(false);

  const octopussPopup = () => {
    setModel(!model);
  };

  // Dropdown
  const openDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  // card click to show
  const cardClick = () => {
    setIsCard(true);
  };
  const cardClickClose = () => {
    setIsCard(false);
  };
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aggrigatorItem = [
    {
      id: 1,
      image: "/images/monkeynft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 2,
      image: "/images/cryptomannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 3,
      image: "/images/rainbowmannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 4,
      image: "/images/moonbirdnft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 5,
      image: "/images/monkeynft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 6,
      image: "/images/cryptomannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 7,
      image: "/images/rainbowmannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 8,
      image: "/images/moonbirdnft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 9,
      image: "/images/monkeynft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 10,
      image: "/images/cryptomannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 11,
      image: "/images/rainbowmannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 12,
      image: "/images/moonbirdnft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 13,
      image: "/images/monkeynft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 14,
      image: "/images/cryptomannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 15,
      image: "/images/rainbowmannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 16,
      image: "/images/moonbirdnft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 17,
      image: "/images/monkeynft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 18,
      image: "/images/cryptomannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 19,
      image: "/images/rainbowmannft.png",
      icons: "/images/Octopas.svg",
    },
    {
      id: 20,
      image: "/images/moonbirdnft.png",
      icons: "/images/Octopas.svg",
    },
  ];
  return (
    <>
      {/* 1st element */}
      <div>
        <div className="relative">
          <img
            src="/images/yachet-club.png"
            alt=""
            className="object-cover w-full"
          />
          <img
            src="/images/Ellipse 2.png"
            alt=""
            className="absolute -bottom-20 left-40 border p-3 rounded-full bg-white"
          />
        </div>
      </div>
      {/* 2nd element */}
      <div className="flex justify-between mx-auto container mt-40 flex-wrap">
        <div className="flex items-center gap-1">
          <h1 className="text-4xl font-bold">Mutant Ape Yatch Club</h1>
          <img
            src="/images/BadgeCheck.png"
            alt="badge-check"
            className="w-6 h-6"
          />
        </div>
        <div className="flex gap-8 items-center">
          <div>
            <img src="/images/twitter (1) 1.png" alt="" />
          </div>
          <div>
            <img src="/images/instagram (2) 1.png" alt="" />
          </div>
          <div>
            <img src="/images/discord (1) 1.png" alt="" />
          </div>
          <div>
            <img src="/images/Vector (9).png" alt="" />
          </div>
        </div>
      </div>
      {/* 3rd element */}
      <div className="mx-auto container flex justify-start my-10">
        <p className="text-base lg:w-5/12 ">
          The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes
          that can only be created by exposing an existing Bored Ape to a vial
          of MUTANT SERUM or by minting a Mutant Ape in the public sale.
        </p>
      </div>
      {/* 4th element */}
      <div className="flex md:justify-start justify-center container mx-auto gap-10 flex-wrap">
        <div>
          <p className="itemcount text-base">items</p>
          <h1 className="text-xl font-bold">10.0K</h1>
        </div>
        <div>
          <p className="itemcount text-base">Owners</p>
          <h1 className="text-xl font-bold">6.3K</h1>
        </div>
        <div>
          <p className="itemcount text-base text-[#6549F6] ">Total</p>
          <h1 className="text-xl font-bold text-[#6549F6]">
            <i class="fa-brands fa-ethereum text-black"></i> 433.3K
          </h1>
        </div>
        <div>
          <p className="itemcount text-base text-[#6549F6] ">Floor</p>
          <h1 className="text-xl font-bold text-[#6549F6]">
            <i class="fa-brands fa-ethereum text-black"></i> 87
          </h1>
        </div>
      </div>
      {/* 5th element */}
       <div className="flex justify-between container items-center mx-auto my-10 flex-wrap ">
        <div className="flex items-center gap-10">
          <img src="/images/AdjustmentsOutline.svg" alt="" />
          <div className="flex relative dropdownborder w-96 rounded-3xl">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-indigo-800 dark:text-7B61FF-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for assets or collections..."
              required
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-10 xl:py-0 py-6 flex-wrap">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={cardClickClose}
                className="btn-hover-anim inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-[#6549F6] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 "
              >
                <svg
                  className="w-6"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2.625C1 2.19402 1.1712 1.7807 1.47595 1.47595C1.7807 1.1712 2.19402 1 2.625 1H4.25C4.68098 1 5.0943 1.1712 5.39905 1.47595C5.70379 1.7807 5.875 2.19402 5.875 2.625V4.25C5.875 4.68098 5.70379 5.0943 5.39905 5.39905C5.0943 5.70379 4.68098 5.875 4.25 5.875H2.625C2.19402 5.875 1.7807 5.70379 1.47595 5.39905C1.1712 5.0943 1 4.68098 1 4.25V2.625ZM9.125 2.625C9.125 2.19402 9.29621 1.7807 9.60095 1.47595C9.9057 1.1712 10.319 1 10.75 1H12.375C12.806 1 13.2193 1.1712 13.524 1.47595C13.8288 1.7807 14 2.19402 14 2.625V4.25C14 4.68098 13.8288 5.0943 13.524 5.39905C13.2193 5.70379 12.806 5.875 12.375 5.875H10.75C10.319 5.875 9.9057 5.70379 9.60095 5.39905C9.29621 5.0943 9.125 4.68098 9.125 4.25V2.625ZM1 10.75C1 10.319 1.1712 9.9057 1.47595 9.60095C1.7807 9.29621 2.19402 9.125 2.625 9.125H4.25C4.68098 9.125 5.0943 9.29621 5.39905 9.60095C5.70379 9.9057 5.875 10.319 5.875 10.75V12.375C5.875 12.806 5.70379 13.2193 5.39905 13.524C5.0943 13.8288 4.68098 14 4.25 14H2.625C2.19402 14 1.7807 13.8288 1.47595 13.524C1.1712 13.2193 1 12.806 1 12.375V10.75ZM9.125 10.75C9.125 10.319 9.29621 9.9057 9.60095 9.60095C9.9057 9.29621 10.319 9.125 10.75 9.125H12.375C12.806 9.125 13.2193 9.29621 13.524 9.60095C13.8288 9.9057 14 10.319 14 10.75V12.375C14 12.806 13.8288 13.2193 13.524 13.524C13.2193 13.8288 12.806 14 12.375 14H10.75C10.319 14 9.9057 13.8288 9.60095 13.524C9.29621 13.2193 9.125 12.806 9.125 12.375V10.75Z"
                    stroke="#6549F6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={cardClick}
                className="btn-hover-anim inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-[#6549F6] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-blue-700 focus:text-blue-700 "
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2.625C1 2.19402 1.1712 1.7807 1.47595 1.47595C1.7807 1.1712 2.19402 1 2.625 1H4.25C4.68098 1 5.0943 1.1712 5.39905 1.47595C5.70379 1.7807 5.875 2.19402 5.875 2.625V4.25C5.875 4.68098 5.70379 5.0943 5.39905 5.39905C5.0943 5.70379 4.68098 5.875 4.25 5.875H2.625C2.19402 5.875 1.7807 5.70379 1.47595 5.39905C1.1712 5.0943 1 4.68098 1 4.25V2.625ZM9.125 2.625C9.125 2.19402 9.29621 1.7807 9.60095 1.47595C9.9057 1.1712 10.319 1 10.75 1H12.375C12.806 1 13.2193 1.1712 13.524 1.47595C13.8288 1.7807 14 2.19402 14 2.625V4.25C14 4.68098 13.8288 5.0943 13.524 5.39905C13.2193 5.70379 12.806 5.875 12.375 5.875H10.75C10.319 5.875 9.9057 5.70379 9.60095 5.39905C9.29621 5.0943 9.125 4.68098 9.125 4.25V2.625ZM1 10.75C1 10.319 1.1712 9.9057 1.47595 9.60095C1.7807 9.29621 2.19402 9.125 2.625 9.125H4.25C4.68098 9.125 5.0943 9.29621 5.39905 9.60095C5.70379 9.9057 5.875 10.319 5.875 10.75V12.375C5.875 12.806 5.70379 13.2193 5.39905 13.524C5.0943 13.8288 4.68098 14 4.25 14H2.625C2.19402 14 1.7807 13.8288 1.47595 13.524C1.1712 13.2193 1 12.806 1 12.375V10.75ZM9.125 10.75C9.125 10.319 9.29621 9.9057 9.60095 9.60095C9.9057 9.29621 10.319 9.125 10.75 9.125H12.375C12.806 9.125 13.2193 9.29621 13.524 9.60095C13.8288 9.9057 14 10.319 14 10.75V12.375C14 12.806 13.8288 13.2193 13.524 13.524C13.2193 13.8288 12.806 14 12.375 14H10.75C10.319 14 9.9057 13.8288 9.60095 13.524C9.29621 13.2193 9.125 12.806 9.125 12.375V10.75Z"
                    stroke="#6549F6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 18.875C1 18.444 1.1712 18.0307 1.47595 17.726C1.7807 17.4212 2.19402 17.25 2.625 17.25H4.25C4.68098 17.25 5.0943 17.4212 5.39905 17.726C5.70379 18.0307 5.875 18.444 5.875 18.875V20.5C5.875 20.931 5.70379 21.3443 5.39905 21.649C5.0943 21.9538 4.68098 22.125 4.25 22.125H2.625C2.19402 22.125 1.7807 21.9538 1.47595 21.649C1.1712 21.3443 1 20.931 1 20.5V18.875ZM9.125 18.875C9.125 18.444 9.29621 18.0307 9.60095 17.726C9.9057 17.4212 10.319 17.25 10.75 17.25H12.375C12.806 17.25 13.2193 17.4212 13.524 17.726C13.8288 18.0307 14 18.444 14 18.875V20.5C14 20.931 13.8288 21.3443 13.524 21.649C13.2193 21.9538 12.806 22.125 12.375 22.125H10.75C10.319 22.125 9.9057 21.9538 9.60095 21.649C9.29621 21.3443 9.125 20.931 9.125 20.5V18.875ZM1 27C1 26.569 1.1712 26.1557 1.47595 25.851C1.7807 25.5462 2.19402 25.375 2.625 25.375H4.25C4.68098 25.375 5.0943 25.5462 5.39905 25.851C5.70379 26.1557 5.875 26.569 5.875 27V28.625C5.875 29.056 5.70379 29.4693 5.39905 29.774C5.0943 30.0788 4.68098 30.25 4.25 30.25H2.625C2.19402 30.25 1.7807 30.0788 1.47595 29.774C1.1712 29.4693 1 29.056 1 28.625V27ZM9.125 27C9.125 26.569 9.29621 26.1557 9.60095 25.851C9.9057 25.5462 10.319 25.375 10.75 25.375H12.375C12.806 25.375 13.2193 25.5462 13.524 25.851C13.8288 26.1557 14 26.569 14 27V28.625C14 29.056 13.8288 29.4693 13.524 29.774C13.2193 30.0788 12.806 30.25 12.375 30.25H10.75C10.319 30.25 9.9057 30.0788 9.60095 29.774C9.29621 29.4693 9.125 29.056 9.125 28.625V27Z"
                    stroke="#6549F6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 2.625C17.25 2.19402 17.4212 1.7807 17.726 1.47595C18.0307 1.1712 18.444 1 18.875 1H20.5C20.931 1 21.3443 1.1712 21.649 1.47595C21.9538 1.7807 22.125 2.19402 22.125 2.625V4.25C22.125 4.68098 21.9538 5.0943 21.649 5.39905C21.3443 5.70379 20.931 5.875 20.5 5.875H18.875C18.444 5.875 18.0307 5.70379 17.726 5.39905C17.4212 5.0943 17.25 4.68098 17.25 4.25V2.625ZM25.375 2.625C25.375 2.19402 25.5462 1.7807 25.851 1.47595C26.1557 1.1712 26.569 1 27 1H28.625C29.056 1 29.4693 1.1712 29.774 1.47595C30.0788 1.7807 30.25 2.19402 30.25 2.625V4.25C30.25 4.68098 30.0788 5.0943 29.774 5.39905C29.4693 5.70379 29.056 5.875 28.625 5.875H27C26.569 5.875 26.1557 5.70379 25.851 5.39905C25.5462 5.0943 25.375 4.68098 25.375 4.25V2.625ZM17.25 10.75C17.25 10.319 17.4212 9.9057 17.726 9.60095C18.0307 9.29621 18.444 9.125 18.875 9.125H20.5C20.931 9.125 21.3443 9.29621 21.649 9.60095C21.9538 9.9057 22.125 10.319 22.125 10.75V12.375C22.125 12.806 21.9538 13.2193 21.649 13.524C21.3443 13.8288 20.931 14 20.5 14H18.875C18.444 14 18.0307 13.8288 17.726 13.524C17.4212 13.2193 17.25 12.806 17.25 12.375V10.75ZM25.375 10.75C25.375 10.319 25.5462 9.9057 25.851 9.60095C26.1557 9.29621 26.569 9.125 27 9.125H28.625C29.056 9.125 29.4693 9.29621 29.774 9.60095C30.0788 9.9057 30.25 10.319 30.25 10.75V12.375C30.25 12.806 30.0788 13.2193 29.774 13.524C29.4693 13.8288 29.056 14 28.625 14H27C26.569 14 26.1557 13.8288 25.851 13.524C25.5462 13.2193 25.375 12.806 25.375 12.375V10.75Z"
                    stroke="#6549F6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 18.875C17.25 18.444 17.4212 18.0307 17.726 17.726C18.0307 17.4212 18.444 17.25 18.875 17.25H20.5C20.931 17.25 21.3443 17.4212 21.649 17.726C21.9538 18.0307 22.125 18.444 22.125 18.875V20.5C22.125 20.931 21.9538 21.3443 21.649 21.649C21.3443 21.9538 20.931 22.125 20.5 22.125H18.875C18.444 22.125 18.0307 21.9538 17.726 21.649C17.4212 21.3443 17.25 20.931 17.25 20.5V18.875ZM25.375 18.875C25.375 18.444 25.5462 18.0307 25.851 17.726C26.1557 17.4212 26.569 17.25 27 17.25H28.625C29.056 17.25 29.4693 17.4212 29.774 17.726C30.0788 18.0307 30.25 18.444 30.25 18.875V20.5C30.25 20.931 30.0788 21.3443 29.774 21.649C29.4693 21.9538 29.056 22.125 28.625 22.125H27C26.569 22.125 26.1557 21.9538 25.851 21.649C25.5462 21.3443 25.375 20.931 25.375 20.5V18.875ZM17.25 27C17.25 26.569 17.4212 26.1557 17.726 25.851C18.0307 25.5462 18.444 25.375 18.875 25.375H20.5C20.931 25.375 21.3443 25.5462 21.649 25.851C21.9538 26.1557 22.125 26.569 22.125 27V28.625C22.125 29.056 21.9538 29.4693 21.649 29.774C21.3443 30.0788 20.931 30.25 20.5 30.25H18.875C18.444 30.25 18.0307 30.0788 17.726 29.774C17.4212 29.4693 17.25 29.056 17.25 28.625V27ZM25.375 27C25.375 26.569 25.5462 26.1557 25.851 25.851C26.1557 25.5462 26.569 25.375 27 25.375H28.625C29.056 25.375 29.4693 25.5462 29.774 25.851C30.0788 26.1557 30.25 26.569 30.25 27V28.625C30.25 29.056 30.0788 29.4693 29.774 29.774C29.4693 30.0788 29.056 30.25 28.625 30.25H27C26.569 30.25 26.1557 30.0788 25.851 29.774C25.5462 29.4693 25.375 29.056 25.375 28.625V27Z"
                    stroke="#6549F6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="text-left">
              <div className="dropdownborder rounded-lg">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium menufont z-50 text-[#6549F6]"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={openDropdown}
                >
                  Price low to high
                  <svg
                    className="-mr-1 ml-2 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isDropdown ? (
                <div
                  className="origin-top-right z-50 absolute  mt-2 w-fit px-3  rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-[#6549F6] border-[2px]"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <div
                      href="/"
                      className="menufont block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Price low to high
                    </div>
                    <div
                      href="/"
                      className="menufont block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1"
                    >
                      Price high to low
                    </div>
                    <div
                      href="/"
                      className="menufont block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                    >
                      All
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <svg
              width="216"
              height="54"
              className="btn-hover-anim"
              viewBox="0 0 216 54"
              fill="none"
              onClick={octopussPopup}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="216"
                height="54"
                rx="27"
                fill="url(#paint0_linear_2_5773)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.0641 15.5933C55.6059 15.4866 55.9587 14.9608 55.852 14.4189C55.7567 13.9347 55.5436 13.4812 55.2313 13.099C54.919 12.7167 54.5172 12.4175 54.0613 12.2282C53.6053 12.0389 53.1097 11.9656 52.6185 12.0149C52.1273 12.0643 51.6562 12.2346 51.2469 12.5106C50.8376 12.7866 50.5031 13.1596 50.2725 13.596C50.0424 14.0318 49.923 14.5176 49.9247 15.0103V15.0084H50.9247L49.9247 15.0126L49.9247 15.0103V17.0084C49.9247 17.5607 50.3724 18.0084 50.9247 18.0084C51.477 18.0084 51.9247 17.5607 51.9247 17.0084V15.0084V15.0042C51.924 14.8387 51.964 14.6759 52.041 14.5301C52.118 14.3843 52.2295 14.2603 52.3651 14.1688C52.5007 14.0774 52.6564 14.0212 52.8183 14.0049C52.9803 13.9887 53.1438 14.0128 53.2944 14.0753C53.4451 14.1379 53.5785 14.237 53.6824 14.3643C53.7864 14.4916 53.8577 14.6431 53.8897 14.8053C53.9964 15.3472 54.5222 15.7 55.0641 15.5933ZM39.0253 24.4062C38.9186 24.9481 39.2714 25.4739 39.8133 25.5806C40.3552 25.6873 40.8809 25.3345 40.9876 24.7926C41.0196 24.6304 41.0909 24.4789 41.1949 24.3516C41.2989 24.2243 41.4322 24.1252 41.5829 24.0626C41.7335 24.0001 41.897 23.976 42.059 23.9922C42.2209 24.0085 42.3766 24.0647 42.5122 24.1561C42.6479 24.2476 42.7593 24.3716 42.8363 24.5174C42.9133 24.6632 42.9533 24.826 42.9526 24.9915L42.9526 24.9957V40.9957C42.9526 41.548 43.4003 41.9957 43.9526 41.9957C44.5049 41.9957 44.9526 41.548 44.9526 40.9957V24.9975V24.9957H43.9526L44.9526 24.9999L44.9526 24.9975C44.9543 24.5048 44.8349 24.019 44.6048 23.5833C44.3743 23.1469 44.0397 22.7739 43.6304 22.498C43.2212 22.222 42.75 22.0516 42.2588 22.0022C41.7676 21.9529 41.272 22.0262 40.8161 22.2155C40.3602 22.4048 39.9583 22.704 39.646 23.0863C39.3338 23.4685 39.1207 23.922 39.0253 24.4062ZM44.0207 16.9354C43.9495 16.6989 43.9374 16.4484 43.9856 16.206C44.0337 15.9637 44.1405 15.7374 44.2962 15.5469C44.4519 15.3565 44.6516 15.2079 44.8774 15.114C45.1032 15.02 45.3484 14.9834 45.5913 15.0073C45.8343 15.0311 46.068 15.1148 46.2716 15.2511C46.4753 15.3874 46.6428 15.5723 46.7589 15.7897C46.875 16.007 46.9361 16.2498 46.9366 16.4968V40.9957C46.9366 41.548 47.3844 41.9957 47.9366 41.9957C48.4889 41.9957 48.9366 41.548 48.9366 40.9957L48.9366 16.4957L48.9366 16.4939C48.9356 15.9195 48.7936 15.354 48.523 14.8474C48.2524 14.3408 47.8614 13.9085 47.3841 13.5891C46.9069 13.2696 46.3583 13.073 45.7869 13.0168C45.2154 12.9607 44.6391 13.0468 44.1089 13.2675C43.5788 13.4881 43.1114 13.8364 42.7479 14.281C42.3843 14.7256 42.1358 15.253 42.0239 15.8164C41.912 16.3798 41.9401 16.9622 42.1057 17.5121C42.2713 18.0621 42.5695 18.5631 42.9743 18.9705C43.3635 19.3623 43.9967 19.3644 44.3885 18.9751C44.7803 18.5859 44.7824 17.9527 44.3931 17.5609C44.22 17.3866 44.0919 17.1718 44.0207 16.9354ZM51.2685 20.5833C51.0384 21.0191 50.919 21.5049 50.9207 21.9976L50.9207 40.9957C50.9207 41.548 51.3684 41.9957 51.9207 41.9957C52.4729 41.9957 52.9207 41.548 52.9207 40.9957L52.9207 21.9957L52.9206 21.9915C52.92 21.826 52.96 21.6632 53.037 21.5174C53.114 21.3716 53.2254 21.2476 53.3611 21.1561C53.4967 21.0647 53.6524 21.0085 53.8143 20.9922C53.9762 20.976 54.1397 21.0001 54.2904 21.0626C54.4411 21.1252 54.5744 21.2243 54.6784 21.3516C54.7824 21.4789 54.8537 21.6304 54.8857 21.7926C54.9176 21.9549 54.9091 22.1226 54.861 22.2806C54.7002 22.809 54.9981 23.3677 55.5265 23.5285C56.0548 23.6893 56.6135 23.3914 56.7743 22.863C56.918 22.3909 56.9433 21.8905 56.848 21.4062C56.7526 20.922 56.5395 20.4685 56.2273 20.0863C55.915 19.704 55.5131 19.4048 55.0572 19.2155C54.6013 19.0262 54.1057 18.9529 53.6145 19.0022C53.1233 19.0516 52.6521 19.222 52.2428 19.498C51.8336 19.7739 51.499 20.1469 51.2685 20.5833ZM35.003 30.4189C34.8963 30.9608 35.2491 31.4866 35.791 31.5933C36.3329 31.7 36.8586 31.3472 36.9653 30.8053C36.9973 30.6431 37.0686 30.4916 37.1726 30.3643C37.2766 30.237 37.4099 30.1379 37.5606 30.0753C37.7112 30.0128 37.8748 29.9887 38.0367 30.0049C38.1986 30.0212 38.3543 30.0774 38.4899 30.1688C38.6256 30.2603 38.737 30.3843 38.814 30.5301C38.891 30.6759 38.931 30.8387 38.9303 31.0042V31.0084V41.0084C38.9303 41.5607 39.378 42.0084 39.9303 42.0084C40.4826 42.0084 40.9303 41.5607 40.9303 41.0084V31.0103V31.0084H39.9303L40.9303 31.0126L40.9303 31.0103C40.932 30.5176 40.8126 30.0318 40.5825 29.596C40.352 29.1596 40.0174 28.7866 39.6081 28.5106C39.1989 28.2346 38.7277 28.0643 38.2365 28.0149C37.7453 27.9656 37.2497 28.0389 36.7938 28.2282C36.3379 28.4175 35.936 28.7167 35.6237 29.099C35.3115 29.4812 35.0984 29.9347 35.003 30.4189ZM60.0436 29.5933C60.5855 29.4866 60.9383 28.9608 60.8316 28.4189C60.7363 27.9347 60.5232 27.4812 60.2109 27.099C59.8986 26.7167 59.4968 26.4175 59.0409 26.2282C58.5849 26.0389 58.0893 25.9656 57.5981 26.0149C57.1069 26.0643 56.6357 26.2346 56.2265 26.5106C55.8172 26.7866 55.4826 27.1596 55.2521 27.596C55.022 28.0318 54.9026 28.5176 54.9043 29.0103V29.0084H55.9043L54.9043 29.0126L54.9043 29.0103V41.0084C54.9043 41.5607 55.352 42.0084 55.9043 42.0084C56.4566 42.0084 56.9043 41.5607 56.9043 41.0084V29.0084V29.0042C56.9036 28.8387 56.9436 28.6759 57.0206 28.5301C57.0976 28.3843 57.2091 28.2603 57.3447 28.1688C57.4803 28.0774 57.636 28.0212 57.7979 28.0049C57.9599 27.9887 58.1234 28.0128 58.274 28.0753C58.4247 28.1379 58.5581 28.237 58.662 28.3643C58.766 28.4916 58.8373 28.6431 58.8693 28.8053C58.976 29.3472 59.5018 29.7 60.0436 29.5933ZM64.8156 34.4189C64.9223 34.9608 64.5695 35.4866 64.0276 35.5933C63.4857 35.7 62.96 35.3472 62.8533 34.8053C62.8213 34.6431 62.75 34.4916 62.646 34.3643C62.542 34.237 62.4087 34.1379 62.258 34.0753C62.1074 34.0128 61.9438 33.9887 61.7819 34.0049C61.62 34.0212 61.4643 34.0774 61.3287 34.1688C61.193 34.2603 61.0816 34.3843 61.0046 34.5301C60.9276 34.6759 60.8876 34.8387 60.8883 35.0042V35.0084V41.0084C60.8883 41.5607 60.4405 42.0084 59.8883 42.0084C59.336 42.0084 58.8883 41.5607 58.8883 41.0084V35.0103L58.8883 35.0126L59.8883 35.0084H58.8883V35.0103C58.8866 34.5176 59.006 34.0318 59.2361 33.596C59.4666 33.1596 59.8012 32.7866 60.2105 32.5106C60.6197 32.2346 61.0909 32.0643 61.5821 32.0149C62.0733 31.9656 62.5689 32.0389 63.0248 32.2282C63.4807 32.4175 63.8826 32.7167 64.1949 33.099C64.5071 33.4812 64.7202 33.9347 64.8156 34.4189ZM31.019 36.4189C30.9123 36.9608 31.2651 37.4866 31.807 37.5933C32.3489 37.7 32.8747 37.3472 32.9814 36.8053C33.0133 36.6431 33.0846 36.4916 33.1886 36.3643C33.2926 36.237 33.426 36.1379 33.5766 36.0753C33.7273 36.0128 33.8908 35.9887 34.0527 36.0049C34.2146 36.0212 34.3703 36.0774 34.5059 36.1688C34.6416 36.2603 34.753 36.3843 34.83 36.5301C34.907 36.6759 34.9471 36.8387 34.9464 37.0042V37.0084V41.0084C34.9464 41.5607 35.3941 42.0084 35.9464 42.0084C36.4986 42.0084 36.9464 41.5607 36.9464 41.0084L36.9464 37.0103V37.0084H35.9464L36.9464 37.0126L36.9464 37.0103C36.9481 36.5176 36.8287 36.0318 36.5985 35.596C36.368 35.1596 36.0334 34.7866 35.6242 34.5106C35.2149 34.2346 34.7437 34.0643 34.2525 34.0149C33.7613 33.9656 33.2657 34.0389 32.8098 34.2282C32.3539 34.4175 31.952 34.7167 31.6398 35.099C31.3275 35.4812 31.1144 35.9347 31.019 36.4189Z"
                fill="white"
              />
              <path
                d="M84.0565 35.34C88.5565 35.34 91.3765 32.04 91.3765 27.6C91.3765 23.14 88.5565 19.84 84.0565 19.84C79.5565 19.84 76.7365 23.14 76.7365 27.6C76.7365 32.04 79.5565 35.34 84.0565 35.34ZM84.0765 33C81.1165 33 79.5565 30.68 79.5565 27.6C79.5565 24.5 81.1165 22.12 84.0765 22.12C87.0165 22.12 88.5365 24.5 88.5365 27.6C88.5365 30.68 87.0165 33 84.0765 33ZM98.207 35.32C101.067 35.32 102.887 33.6 103.047 31.12H100.567C100.427 32.52 99.587 33.34 98.187 33.34C96.327 33.34 95.367 31.78 95.367 29.68C95.367 27.52 96.327 25.98 98.187 25.98C99.467 25.98 100.267 26.72 100.507 27.88H102.987C102.607 25.58 100.887 24.04 98.167 24.04C94.887 24.04 92.787 26.5 92.787 29.68C92.787 32.84 94.907 35.32 98.207 35.32ZM104.074 26.06H105.714V32.6C105.714 34.48 106.894 35.1 108.614 35.1C109.294 35.1 109.874 35.02 110.294 34.94V32.96H110.174C109.974 33 109.614 33.04 109.354 33.04C108.634 33.04 108.214 32.82 108.214 32.04V26.06H110.354V24.32H108.214V20.92H105.714V24.32H104.074V26.06ZM117.056 35.32C120.376 35.32 122.476 32.84 122.476 29.68C122.476 26.5 120.376 24.04 117.056 24.04C113.736 24.04 111.596 26.5 111.596 29.68C111.596 32.84 113.736 35.32 117.056 35.32ZM117.036 33.4C115.156 33.4 114.176 31.82 114.176 29.68C114.176 27.52 115.156 25.92 117.036 25.92C118.896 25.92 119.896 27.52 119.896 29.68C119.896 31.82 118.896 33.4 117.036 33.4ZM128.544 35.34C131.184 35.34 133.104 34.16 133.104 31.92C133.104 29.32 131.104 28.84 129.084 28.46C127.464 28.16 126.364 27.98 126.364 27.04C126.364 26.3 126.984 25.76 128.164 25.76C129.424 25.76 130.104 26.26 130.284 27.18H132.704C132.444 25.32 131.024 24.04 128.184 24.04C125.684 24.04 123.964 25.2 123.964 27.22C123.964 29.64 125.864 30.1 127.864 30.5C129.544 30.82 130.624 31.02 130.624 32.08C130.624 32.94 129.964 33.54 128.564 33.54C127.204 33.54 126.224 33 126.024 31.72H123.584C123.744 33.88 125.504 35.34 128.544 35.34ZM137.034 35H139.474L140.854 29.92C141.134 28.8 141.534 26.78 141.534 26.78H141.574C141.574 26.78 141.954 28.8 142.234 29.92L143.574 35H146.014L149.414 24.32H146.854L145.434 29.3C145.054 30.6 144.754 32.54 144.754 32.54H144.714C144.714 32.54 144.354 30.52 144.034 29.3L142.674 24.32H140.434L139.114 29.3C138.754 30.58 138.414 32.52 138.414 32.52H138.374C138.374 32.52 138.054 30.54 137.714 29.3L136.334 24.32H133.694L137.034 35ZM155.356 35.32C157.976 35.32 159.696 33.9 160.216 31.98H157.736C157.396 32.86 156.596 33.38 155.376 33.38C153.596 33.38 152.616 32.14 152.436 30.3H160.416C160.436 28.32 159.936 26.64 158.896 25.54C157.996 24.58 156.776 24.04 155.216 24.04C152.056 24.04 149.916 26.5 149.916 29.68C149.916 32.84 151.956 35.32 155.356 35.32ZM155.216 25.88C156.756 25.88 157.696 26.94 157.796 28.7H152.476C152.696 27.02 153.556 25.88 155.216 25.88ZM167.094 35.32C169.714 35.32 171.434 33.9 171.954 31.98H169.474C169.134 32.86 168.334 33.38 167.114 33.38C165.334 33.38 164.354 32.14 164.174 30.3H172.154C172.174 28.32 171.674 26.64 170.634 25.54C169.734 24.58 168.514 24.04 166.954 24.04C163.794 24.04 161.654 26.5 161.654 29.68C161.654 32.84 163.694 35.32 167.094 35.32ZM166.954 25.88C168.494 25.88 169.434 26.94 169.534 28.7H164.214C164.434 27.02 165.294 25.88 166.954 25.88ZM173.932 38.58H176.472V35.72C176.472 34.72 176.432 34.04 176.392 33.64H176.452C177.112 34.72 178.272 35.34 179.692 35.34C182.572 35.34 184.372 33.12 184.372 29.68C184.372 26.28 182.552 24.04 179.772 24.04C178.272 24.04 177.212 24.68 176.452 25.9H176.392V24.32H173.932V38.58ZM179.212 33.32C177.252 33.32 176.372 31.76 176.372 29.74C176.372 27.72 177.272 26.1 179.192 26.1C180.932 26.1 181.792 27.62 181.792 29.74C181.792 31.84 180.892 33.32 179.212 33.32Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2_5773"
                  x1="-17.4498"
                  y1="1.3548e-06"
                  x2="190.126"
                  y2="130.418"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7B61FF" />
                  <stop offset="1" stop-color="#00DAD9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div> 

      {/* nftCards */}
      <div className="container mx-auto my-5">
        {" "}
        <div
          className={`${
            isCard
              ? "grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-16 place-content-center"
              : "grid md:grid-cols-2 lg:grid-cols-4 gap-16 place-content-center"
          }`}
        >
          {aggrigatorItem.map((i) => (
            <div
              className="item-blur-anim max-w-xs max-h-full bg-white rounded-lg border border-gray-200 shadow-md"
              key={i.id}
            >
              <div className="relative">
                <img className="thumb max-h-80 " src={i.image} alt="" />
                <div>
                  <img
                    className=" h-12 absolute top-0 border px-3 py-2 bg-white rounded-md"
                    src={i.icons}
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="p-3">
                <div className="flex gap-2">
                  <h1 className="mb-2  cardtitle text-gray-900 dark:text-white">
                    Bored Ape Yacht Club
                  </h1>
                  <img
                    src="/images/BadgeCheck.png"
                    alt="badge-check"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="cardid text-2xl"># 111559</h2>
                  </div>
                  <div className="flex items-center gap-5 text-xl">
                    <h1 className=" cardfloor">Floor</h1>
                    <i className="fa-brands fa-ethereum  "></i>
                    <h1 className="cardprice">70</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* octopuss popup */}
      {model && (
        <div
          className={`${
            model ? "" : "hidden"
          }fixed  backdrop-filter backdrop-blur-sm bg-backdrop flex items-center justify-center overflow-auto z-50 inset-0`}
        >
          <div className="relative bg-white dark:bg-blue-darkest rounded-xl shadow-xl px-7 sm:px-10 md:px-20 py-10 max-w-2xl w-11/12 md:w-full">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src="/images/mutent.png"
                alt="Avatar"
              />{" "}
              <div className="flex flex-col items-center">
                <div className="flex gap-1">
                  {" "}
                  <p className=" leading-none text-xl popuptittle">
                    Mutant Ape Yacht...
                  </p>
                  <img
                    src="/images/BadgeCheck.png"
                    alt="badge-check"
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex items-center gap-2 text-l">
                  <h1 className="cardfloor">Floor</h1>
                  <i className="fa-brands fa-ethereum"></i>
                  <h1 className="cardprice">70</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-10">
              <div>
                <div className="homebuttonborder rounded-lg flex">
                  <h1 className="text-8xl">0</h1>
                  <div className="pt-24 pr-5 pl-20 text-[#6549F6]">
                    Items
                    <img className="" src="/images/path.png" alt=""></img>
                  </div>
                  <div className=" pt-24  pr-5 text-[#d6c3fa] text-base font-medium not-italic">
                    ETH
                  </div>
                </div>
              </div>
              <div>
                <div className="py-3 px-3 text-center">
                  <p className="font-semibold text-xl  leading-relaxed popuptittle ">
                    Octopuss not detected
                  </p>
                  <p className="font-normal text-md text-[#999999] pb-5">
                    Please connect your wallet.
                  </p>
                  <button className="btn-hover-anim px-7 popuptittle py-2 rounded-3xl  text-xl bg-gradient-to-r from-[#7B61FF] to-[#00DAD9] text-white">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
            <button className="btn-hover-anim rounded-3xl bg-[#f4eeff]">
              <p className="py-3 px-16  text-base	 font-normal text-[#d6c3fa]">
                Review transaction
              </p>
            </button>
            <button
              type="button"
              onClick={octopussPopup}
              className="absolute text-2xl px-2.5 text-gray-dark dark:text-gray-lightest top-3 right-3 hover:opacity-100 opacity-70"
            >
              <svg
                aria-hidden="true"
                className="w-10 h-10"
                fill="#6549F6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Aggregator;
