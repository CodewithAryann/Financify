import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import videoFile from "../assets/video.mp4";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-[110vh]  pt-2">
      <div className="video">
        <video
          className="absolute top-0 left-0  object-cover z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="bg-overlay bg-[rgba(0,0,0,.4)] absolute z-3 top-0 left-0 "></div>
      <div className="textstructure mt-[12rem] px-[3.4rem] leading-7">
        {["A Better Mortgage", "Experience, Without", "The Hassle."].map(
          (item, index) => {
            return (
              <div className="masker">
                <h1 className=' uppercase text-5xl tracking-tighter leading-[3.4rem] font-["Montserrat"]  font-semibold text-white backdrop-blur-[2px] '>
                  {item}
                </h1>
              </div>
            );
          }
        )}
      </div>
      <div className="Get-start flex absolute z-1 group">
        <button class="btn">Get Started</button>
        <div className="arrow mt-5 arrow w-[58px] h-[57px] flex items-center justify-center rounded-full ">
          <span className="rotate-[45deg]">
            <FaArrowUp />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
