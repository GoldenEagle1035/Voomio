import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Aggregator from "./Components/Aggregator/Aggregator";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import { load_collection } from "./store/collection/api";

function App() {
  const dispatch = useDispatch();
  const state_collection = useSelector((state) => state.collection);
  const state_error = useSelector((state) => state.error);

  useEffect(() => {
    if (!state_collection.loaded && !state_collection.loading) {
      dispatch(load_collection((res) => {}));
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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aggregator" element={<Aggregator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
