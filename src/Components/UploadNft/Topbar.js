import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Topbar.css";
const Topbar = () =>{
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    console.log("location : ", location);
    return(
        <>
            <div className=" text-5xl font-bold text-[#222222]">
                NFT Generator
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-[#250C50] pt-6 text-lg itemcount">
                        Current NFT
                    </div>
                    <div className="text-[#6549F6]  text-lg pb-16 itemcount">
                        Single-item
                    </div>
                </div>
                <div className="flex items-center gap-10 generator-menu" >
                    <Link to="/uploadnft">
                        <div className={activeLink === "/uploadnft"? "opacity-50 flex flex-col justify-center items-center opacity-100" : "opacity-50 flex flex-col justify-center items-center"}>
                            <img src="/assest/image/upload.png" alt="" />
                            <p className="text-[#6549F6]  text-lg  itemcount ">
                                Upload
                            </p>
                            {activeLink === "/uploadnft"? <img src="/images/wave.png" alt="" className="wavebar"/> : ""}
                        </div>
                    </Link>
                    <Link to="/preview">
                        <div className={activeLink === "/preview"? "flex flex-col items-center opacity-100": "flex flex-col items-center opacity-50"}>
                            <img src="/assest/image/eye.png" alt="" />
                            <p className="text-[#6549F6]  text-lg  itemcount ">
                                Preview
                            </p>
                            {activeLink === "/preview"? <img src="/images/wave.png" alt="" className="wavebar"/> : ""}
                        </div>
                    </Link>
                    <Link to="/manage">
                    <div className={activeLink === "/manage"? "flex flex-col items-center opacity-100": "flex flex-col items-center opacity-50"}>
                        <img src="/assest/image/setting.png" alt="" />
                        <p className="text-[#6549F6]  text-lg itemcount ">
                            Manage
                        </p>
                        {activeLink === "/manage"? <img src="/images/wave.png" alt="" className="wavebar"/> : ""}
                    </div>
                    </Link>
                    <Link to="/general">
                        <div className={activeLink === "/general"? "flex flex-col items-center opacity-100": "flex flex-col items-center opacity-50"}>
                            <img
                                src="/assest/image/Sparkles.png"
                                alt=""
                                className=""
                            />
                            <p className="text-[#6549F6]  text-lg  itemcount ">
                                Generate
                            </p>
                            {activeLink === "/general"? <img src="/images/wave.png" alt="" className="wavebar"/> : ""}
                        </div>
                    </Link>
                </div>
            </div>

        </>
        );
}
export default Topbar;