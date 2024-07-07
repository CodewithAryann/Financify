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
        <h1 className='text-3xl font-["Montserrat"] uppercase font-semibold pt-5 text-white pl-1'>
          Why Choose Financify?
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10  ">
          <div className="cardcontainer relative w-1/2 h-[75vh]  ">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">SERVICE
          
          </h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
            <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/cloud-satellite-services-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Service</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">We deliver exceptional customer service with a straightforward approach that gets the right result at speed. In a fast-moving and often stressful world, we remove the hassle from your mortgage process and provide end-to-end service.</p>
          </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]  overflow-hidden">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">KNOWLEAGE</h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
          <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/ibm-watson-knowledge-studio@2x-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Knowledge</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">We have years of experience, wide market knowledge and a deep understanding of customer requirements. Whether you are employed, self-employed, UAE resident or overseas investor, we can help you achieve your goals.</p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
