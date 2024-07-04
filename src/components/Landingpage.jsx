import React from "react";
import videoFile from "../assets/video.mp4";

function Landingpage() {
  return (
    <div className="w-full h-screen  pt-2">
      <div className="textstructure mt-40 px-20">
        <div className="masker">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            autoPlay
            loop
            muted
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className='absolute uppercase text-5xl tracking-tighter leading-none font-["Montserrat"] z-20 left-[5%] top-[40%] font-semibold text-white backdrop-blur-[2px] '>
            A Better Mortgage
          </h1>
        </div>
        <div className="masker">
          <h1 className='absolute uppercase text-5xl tracking-tighter leading-none font-["Montserrat"] z-20 left-[5%] top-[53%] font-semibold text-white backdrop-blur-[2px] '>
            Experience,Without
          </h1>
        </div>
        <div className="masker">
          <h1 className='absolute uppercase text-5xl tracking-tighter leading-none font-["Montserrat"] z-20 left-[5%] top-[65%] font-semibold text-white backdrop-blur-[2px] '>
          The Hassle.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
