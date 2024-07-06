import React from "react";

function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("src/assets/play.png")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white ">
          <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 "></div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white ">
          <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
