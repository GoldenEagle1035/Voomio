// eslint-disable-next-line
import React, { useState } from "react";
import { useEffect } from "react";
import octopuss from "../../Assets/VoomioImages/octopuss.svg";
import magnifyGlass from "../../Assets/VoomioImages/magnifying-glass.svg";
import MenuAlt3Outline from "../../Assets/VoomioImages/MenuAlt3Outline.svg";
import close from "../../Assets/VoomioImages/X.svg";
import ButtonConnect from "../ButtonConnect/ButtonConnect";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openMobilemenu, setOpenMobilemenu] = useState(false);
    const [searchbtn, setSearchbtn] = useState(false);

    return (
        <>
            {/* Header */}
            <nav
                className={`header-container ${
                    openMobilemenu
                        ? " bg-purple-100 text-[#250C50] py-3"
                        : searchbtn
                        ? "bg-white py-3 drop-shadow-2xl"
                        : " bg-[#250C50]  text-white py-3 "
                }`}
            >
                <div className="container mx-auto flex lg:justify-center justify-between items-center  md:gap-2 lg:gap-10 lg:p-0 px-5">
                    <div className="flex justify-between items-center cursor-pointer ">
                        <Link to="/">
                            <div className="flex items-center gap-4 zoom-in">
                                <img src={octopuss} alt="" />
                                <h2 className="font-bold text-2xl ">VOOMIO</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center gap-3 ">
                        <img
                            src={magnifyGlass}
                            alt=""
                            onClick={() => {
                                setSearchbtn(true);
                                setOpenMobilemenu(false);
                            }}
                            className={searchbtn ? "hidden " : "block "}
                        />
                        <img
                            src={MenuAlt3Outline}
                            alt=""
                            onClick={() => setOpenMobilemenu(true)}
                            className={openMobilemenu ? "hidden " : "block "}
                        />
                        {openMobilemenu || searchbtn ? (
                            <img
                                src={close}
                                alt=""
                                onClick={() => {
                                    setOpenMobilemenu(false);
                                    setSearchbtn(false);
                                }}
                            />
                        ) : null}
                    </div>
                    <div className="border-2 border-[#6549F6] rounded-full bg-white p-3 justify-center items-center gap-2  lg:flex hidden ">
                        <i className="fa-solid fa-magnifying-glass text-[#6549F6] cursor-pointer"></i>
                        <input
                            type="text"
                            name=""
                            className="border-0 border-white  outline-none text-black md:w-7 lg:w-20 xl:w-full"
                            placeholder="Search for assets or collections..."
                        />
                        <div
                            className="flex justify-center items-center gap-2 px-2 border-l-2 cursor-pointer relative"
                            onClick={() => setOpenDropdown(!openDropdown)}
                        >
                            <div className="text-[#000000] ">ETH</div>
                            <i className="fa-solid fa-angle-down text-[#000000]"></i>
                            {openDropdown ? (
                                <>
                                    <div className="border-2 border-[#6549F6] absolute top-11 rounded-md p-5 lg:flex hidden flex-col bg-white text-[#6549F6] gap-3 hover">
                                        <div>ETH</div>
                                        <div>SOL</div>
                                        <div>ADA</div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className=" items-center lg:flex hidden gap-8 cursor-pointer font-apply ">
                        <h1 className="font-bold ">
                            <Link to="/explore">Explore</Link>
                        </h1>
                        <h1 className="font-bold">Ranking</h1>
                        <Link to="/nftgenerator">
                            <h1 className="font-bold">Create</h1>
                        </Link>
                        <ButtonConnect />
                    </div>
                </div>
                {/* =================Mobile menu, show/hide based on menu state.============ */}
                {openMobilemenu && (
                    <div className=" text-center text-[#250C50] bg-purple-100 h-[100vh]  pt-20   z w-[100%] items-center ">
                        <div className="px-2 pt-2 pb-3 space-y-1 ">
                            <a
                                href="/upload-nft"
                                className=" menufont block px-3 py-5 rounded-md text-base font-medium "
                                aria-current="page"
                            >
                                Explore
                            </a>
                            <a
                                href="/aggregator"
                                className="menufont  block px-3 py-5 rounded-md text-base font-medium "
                            >
                                Ranking
                            </a>
                            <a
                                href="/nftgenerator"
                                className="menufont block px-3 py-5 rounded-md text-base font-medium"
                            >
                                Create
                            </a>
                            <button className="buttonborder menufont text-white font-bold py-2 px-12">
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                )}
                {/*============= search button ================*/}
                {searchbtn ? (
                    <div className="text-left bg-white h-[100vh]  z-50 w-[100%] p-4 lg:hidden block">
                        <div className="border-mobile-menu drop-shadow-sm flex justify-around ">
                            <div className="flex items-center gap-4 p-3">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    name=""
                                    className="outline-none w-28  "
                                    placeholder="Search..."
                                />
                            </div>
                            <div
                                className="flex justify-center items-center border-l-2 gap-4 p-3 cursor-pointer relative"
                                onClick={() => setOpenDropdown(!openDropdown)}
                            >
                                <div className="text-[#000000] ">ETH</div>
                                <i className="fa-solid fa-angle-down text-[#000000]"></i>
                                {openDropdown ? (
                                    <>
                                        <div className="border-2 border-[#6549F6] absolute top-14 rounded-md p-5 flex  flex-col bg-white text-[#6549F6] gap-3 hover ">
                                            <div>ETH</div>
                                            <div>SOL</div>
                                            <div>ADA</div>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </nav>

        </>
    );
};

export default Header;
