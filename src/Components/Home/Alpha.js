import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Aos from "aos";
import Carousel from "react-elastic-carousel";
const Alpha = () =>{
    // second videocards
  const secondVideo = [
    {
      id: "1",
      videoimage: "/images/alpha.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "2",
      videoimage: "/images/nftstobuy.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "3",
      videoimage: "/images/justinebiber.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "4",
      videoimage: "/images/nftstobuy.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
    {
      id: "5",
      videoimage: "/images/justinebiber.png",
      videotitle: "These upcoming NFTS will 10x!",
      videotext: "CryptoGuruTV",
      videoview: "1M views - 8 hours ago",
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
    return(<>
         {/* Alpha bloges start*/}
      <div className=" md:p-20" style={{paddingTop:"0px"}}>
        <div
          className="container max-w-7xl mx-auto px-4 mt-10"
          style={{ cursor: "auto" }}
        >
          <div className="alpha-title mb-16 px-9">Alpha</div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <Carousel breakPoints={breakPoints}>
              {secondVideo.map((i, index) => (
                <div
                  className="item-hover-anim max-w-sm rounded overflow-hidden p-2"
                  key={index}
                >
                  <img
                    className="w-full"
                    src={i.videoimage}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="alpha-video-title">{i.videotitle}</div>
                    <p className="alpha-video-text">{i.videotext}</p>
                    <p className="alpha-video-text">{i.videoview}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Alpha bloges end*/}
    </>);
};
export default Alpha;