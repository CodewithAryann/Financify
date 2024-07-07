import React from "react";

function Whychoose() {
  return (
    <div
      style={{
        background: `linear-gradient(45deg, rgba(122,96,247,1) 0%, rgba(46,168,238,1) 100%)`,
      }}
      className="w-full py-20 bg- mt-5 rounded-tl-3xl rounded-tr-3xl "
    >
      <div className="w-full px-20 border-b-[1px] pb-10">
        <h1 className='text-3xl font-["Montserrat"] uppercase font-semibold pt-5 text-white'>
          Why Choose Financify?
        </h1>
      </div>
      <div>
        <div className="cards w-full flex gap-10 mt-10  ">
          <div className="card w-1/2 h-[80vh] bg-red-500"></div>
          <div className="card w-1/2 h-[80vh] bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
