import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import NFTGenerator from "./Components/NftGenerator/NftGenerator";
import UploadNft from "./Components/UploadNft/UploadNft";
import Generate from "./Components/UploadNft/Generate";
import Preview from "./Components/UploadNft/Preview";
import NftDetails from "./Components/UploadNft/NftDetails";
import CollectionStats from "./Components/Collection/Stats/Stats";
import Explore from "./Components/Collection/Explore/Explore";
import WhiteList from "./Components/Collection/WhiteList/WhiteList";
import Activity from "./Components/Collection/Activity/Activity";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { load_collection } from "./store/collection/api";

function App() {
  const dispatch = useDispatch();
  const state_collection = useSelector((state) => state.collection);
  const state_error = useSelector((state) => state.error);

  useEffect(() => {
    if (!state_collection.loaded && !state_collection.loading) {
      dispatch(load_collection((res) => { }));
    }
  }, [state_collection.loaded, state_collection.loading]);

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="header-margin">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aggregator" element={<Aggregator />} />
          <Route exact path="/nftgenerator" element={<NFTGenerator />} />
          <Route exact path="/uploadnft" element={<UploadNft />} />
          <Route exact path="/general" element={<Generate />} />
          <Route exact path="/preview" element={<Preview />} />
          <Route exact path="/nftdetails" element={<NftDetails />} />
          <Route exact path="/collection_stats" element={<CollectionStats />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/whitelist" element={<WhiteList />} />
          <Route exact path="/activity" element={<Activity />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
