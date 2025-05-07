import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Discover from "./Discover";
import Video from "./Video";
import Pricing from "./Pricing";
import Faq from "./Faq";

import Module from "./Module";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black h-full">
      <div className="border-b-[#FF6A00] border-b ">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <Discover></Discover>
      <Video></Video>
      {/* <Pricing></Pricing> */}
      <Faq></Faq>
      <Module></Module>
      <Footer></Footer>
    </div>
  );
};

export default Home;
