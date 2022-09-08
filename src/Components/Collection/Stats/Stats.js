import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';
import 'react-tabs/style/react-tabs.css';
import './Stats.css';

const categories = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const chains = [
    { value: 'nami', label: 'Nami' },
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'polygon', label: 'Polygon' }
];

const pasthours = [
    { value: '24', label: '24 hours' },
    { value: '8', label: '8 hours' },
    { value: '1', label: '1 hour' }
];

const CollectionStats = () => {
    return (
        <div className="stats-container flex justify-between mx-auto container mt-40 flex-wrap">
            <div className="w-full">
                <h3 className="section-title ml-20 mb-10">Collection Stats</h3>
                <Tabs>
                    <TabList>
                        <Tab><span className="text-[22px]">Top</span></Tab>
                        <Tab><span className="text-[22px]">Trending</span></Tab>
                    </TabList>
                    <TabPanel>
                        <div className="mr-5 mt-8 flex">
                            <Select className="mr-5 text-[18px]" placeholder="All categories" options={categories} />
                            <Select className="mr-5 text-[18px]" placeholder="All chains" options={chains} />
                            <Select className="text-[18px]" placeholder="Past 24 hours" options={pasthours} />
                        </div>
                        <div className="mt-[50px]">
                            <div class="overflow-x-auto relative sm:rounded-lg">
                                <table class="w-full text-sm text-left">
                                    <thead class="text-[22px] h-[84px]">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Collection
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                <div className="flex items-center justify-between">
                                                    <span>Volume</span>
                                                    <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.4761 13.5873L1.29648 3.41471C0.0358758 2.15498 0.928055 0 2.7102 0H23.0695C24.8517 0 25.7438 2.15498 24.4832 3.41471L14.3036 13.5873C13.5226 14.3677 12.2571 14.3677 11.4761 13.5873Z" fill="black" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                24hr
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                7d
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Floor Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="py-4 px-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="collection-thumb" src="images/cartoon.png" alt="collection_thumb" />
                                                    <span className="pl-5">Sample Collection</span>
                                                    <img className="pl-3" src="images/BadgeCheck.png" alt="collection_thumb" />
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="increase">+13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <span className="decrease">-13.13%</span>
                                            </td>
                                            <td class="py-4 px-6">
                                                <div className="flex items-center">
                                                    <img className="w-[24px] h-[24px]" src="images/ethereum.svg" alt="ETH" />
                                                    <span className="pl-3 text-[24px] text-[#6549F6] font-bold">134</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default CollectionStats;