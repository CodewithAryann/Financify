import React from "react";
import videoFile from "../assets/video.mp4";

function Landingpage() {
  return (
    <div className="w-full h-screen  pt-2">
      <div className="video">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            autoPlay
            loop
            muted
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-overlay bg-[rgba(0,0,0,.4)] w-[100%] h-[100%] absolute z-3 top-0 left-0 "></div>
      <div className="textstructure mt-[12rem] px-[3.4rem] leading-7">
        {["A Better Mortgage", "Experience, Without","The Hassle."].map(
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
      <div className="border-t-[1px] border-zinc-100 mt-10"></div>
    </div>
  );
}

export default Landingpage;
