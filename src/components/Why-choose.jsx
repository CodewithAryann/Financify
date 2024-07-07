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
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10  ">
          <div className="cardcontainer w-1/2 h-[75vh] ">
          <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden ">
            <img className="" src="https://financify.ae/wp-content/uploads/2023/06/cloud-satellite-services-min.png" alt="" />
            <h1>Our Service</h1>
            <p>We deliver exceptional customer service with a straightforward approach that gets the right result at speed. In a fast-moving and often stressful world, we remove the hassle from your mortgage process and provide end-to-end service.</p>
          </div>
          </div>
          <div className="cardcontainer w-1/2 h-[75vh]  overflow-hidden">
          <div className="card w-full h-full rounded-xl bg-green-600 overflow-hidden"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
