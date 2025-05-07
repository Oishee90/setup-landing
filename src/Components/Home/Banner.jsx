import banner from "../../assets/banner.png";
import { NavLink } from "react-router-dom";
import google from "../../assets/google.png";
import app from "../../assets/app.png";

const Banner = () => {
  return (
    <div id="home" className="container mx-auto mt-28 pb-32 p-4">
      <div className="flex lg:flex-row flex-col-reverse  items-center lg:items-center justify-between gap-10">
        {/*  content  */}
        <div className="flex flex-col items-center lg:items-start  gap-4 lg:w-1/2 w-full text-white">
          <h1 className="dm-sans text-4xl lg:text-7xl main-color font-extrabold leading-[130%]">
            <span className="bg-gradient-to-r from-[#FF5C1980] to-[#FF6A00] bg-clip-text text-transparent">
              Your Winning Edge
            </span>{" "}
            Starts with{" "}
            <span className="bg-gradient-to-r from-[#FF5C1980] to-[#FF6A00] bg-clip-text text-transparent">
              AI.
            </span>{" "}
          </h1>

          <p className="dm-sans   text-base   font-normal leading-[160%] text-[#BABABA] ">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://play.google.com/store/games?device=windows"
              target="_blank"
            >
              <img src={google} alt="" />
            </a>
            <a href="https://www.apple.com/iphone/" target="_blank">
              <img src={app} alt="" />
            </a>
          </div>
        </div>
        {/* img */}
        <div className="lg:w-1/2 w-full ">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
