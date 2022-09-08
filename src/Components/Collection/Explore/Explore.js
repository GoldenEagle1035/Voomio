import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Select from "react-select";
import "react-tabs/style/react-tabs.css";
import "./Explore.css";

const categories = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const Explore = () => {
    return (
        <div className="stats-container flex justify-between mx-auto container mt-40 flex-wrap">
            <div className="w-full">
                <h3 className="section-title ml-20 mb-10">
                    Explore Collection
                </h3>
                <Tabs>
                    <TabList>
                        <Tab>
                            <span className="text-[22px]">Top</span>
                        </Tab>
                        <Tab>
                            <span className="text-[22px]">Trending</span>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className="mr-5 mt-8 flex">
                            <div className="w-full">
                                <div className="flex ml-4">
                                    <Select
                                        className="mr-5 text-[18px]"
                                        placeholder="All categories"
                                        options={categories}
                                    />
                                </div>
                                <div className="grid grid-cols-4 mt-[60px] w-full gap-10">
                                    <div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div><div className="flex justify-center">
                                        <Link to="/preview">
                                            <div>
                                                <div>
                                                    <img
                                                        className="w-[320px] h-[220px] object-cover rounded-tl-2xl rounded-tr-2xl"
                                                        src="images/monkey.png"
                                                        alt="Collection avatar"
                                                    />
                                                </div>
                                                <div className="flex items-center h-[100px] relative pb-[40px] shadow-lg rounded-2xl">
                                                    <img
                                                        className="w-[95px] h-[95px] object-cover rounded-[50%] absolute -top-6 left-3"
                                                        src="images/cartoon.png"
                                                        alt="Collection avatar"
                                                    />
                                                    <div className="pl-[120px] text-[16px] font-medium">
                                                        CryptoPunks
                                                    </div>
                                                    <img
                                                        className="w-fit h-fit pl-2"
                                                        src="images/BadgeCheck.png"
                                                        alt="collection_thumb"
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Trending Content Missing</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Explore;
