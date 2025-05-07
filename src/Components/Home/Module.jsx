import React from "react";
import { CgArrowTopRightR } from "react-icons/cg";
import unlock from "../../assets/unlock.png";
import discover from "../../assets/discover.png";

const Module = () => {
  return (
    <div className=" py-16 px-4 md:px-10 lg:px-20 container mx-auto ">
      {/* Testimonial Section */}
      <div className="flex flex-col items-start lg:w-[42%] pb-24 leading-[140%] mx-auto">
        <img src={discover} alt="discover" />
        <h1 className="dm-sans text-white text-3xl font-extrabold mt-4 text-center">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h1>
        <div className="flex items-center justify-center gap-5 mt-6 w-full">
          <p className="text-base dm-sans text-[#EFECE6] font-normal">
            Sarah Johnson
          </p>
          <p className="text-base dm-sans text-[#737373] font-normal">
            TechSavvy Solutions
          </p>
        </div>
      </div>

      {/* Unlock Section */}
      <div className="mt-28 pb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2 w-full text-white">
            <h1 className="dm-sans text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[130%] text-center lg:text-left">
              Unlock the Full Potential of{" "}
              <span className="bg-gradient-to-r from-[#FF5C1980] to-[#FF6A00] bg-clip-text text-transparent">
                SmartNotes
              </span>
            </h1>

            <p className="dm-sans text-base font-normal leading-[160%] text-[#BABABA] text-center lg:text-left">
              Ready to streamline your workflow and boost your productivity?
              Start your free trial of SmartNotes today and experience the power
              of smart note-taking.
            </p>

            {/* Optional CTA buttons can go here */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-l from-[#FF5C1980] to-[#FF6A00] text-black rounded-lg flex items-center gap-6 font-bold text-2xl">
                Sign Up for Free{" "}
                <CgArrowTopRightR className=" text-black text-2xl font-bold" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <img src={unlock} alt="Unlock" className="w-full max-w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
