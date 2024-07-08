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
          <div className="cardcontainer relative w-1/2 h-[75vh] transition-all cursor-default">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">SERVICE
          {"SERVICE".split("").map((item,index)=><span>{item}</span>)}
          </h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
            <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/cloud-satellite-services-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Service</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">We deliver exceptional customer service with a straightforward approach that gets the right result at speed. In a fast-moving and often stressful world, we remove the hassle from your mortgage process and provide end-to-end service.</p>
          </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] transition-all cursor-default">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">KNOWLEAGE
          {"KNOWLEAGE".split("").map((item,index)=><span>{item}</span>)}
          </h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
          <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/ibm-watson-knowledge-studio@2x-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Knowledge</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">We have years of experience, wide market knowledge and a deep understanding of customer requirements. Whether you are employed, self-employed, UAE resident or overseas investor, we can help you achieve your goals.</p>
          </div>
          </div>
          
        </div>
        <div className="cards w-full flex gap-10 mt-10  ">
          <div className="cardcontainer relative w-1/2 h-[75vh] transition-all cursor-default ">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">SERVICE
          {"RELATIONSHIPS".split("").map((item,index)=><span>{item}</span>)}
          </h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
            <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/partnership-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Relationships</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">We have strong business relationships with all prominent lenders in UAE. We can work as your Mortgage Search Engine with access to wide spectrum of lenders and get you deals that are in your best interest.</p>
          </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] transition-all cursor-default">
          <h1 className="absolute z-[9] text-6xl font-medium font-['Montserrat'] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-950 ">KNOWLEAGE
          {"TRANSPARENCYE".split("").map((item,index)=><span>{item}</span>)}
          </h1>
          <div className="card w-full h-full rounded-xl bg-white overflow-hidden">
          <img className="m-auto mb-5 mt-5 h-20" src="https://financify.ae/wp-content/uploads/2023/06/opacity-min.png" alt="" />
            <h1 className="text-center text-[24px] mb-3 font-medium">Our Transparencye</h1>
            <p className="text-center text-[24px] pr-10 pl-10 tracking-tighter">Transparency at the heart of everything we do, as we believe the best results can only be achieved with honesty, integrity, and respect. You can trust us to secure the best outcome for you while you focus your attention wherever it matters the most.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 mt-20 pt-5 border-b-[1px] pb-10">
        <h1 className=" font-semibold text-4xl font-['Montserrat'] uppercase text-white text-center">Find Best Deals For You In A Jiff</h1>
        <h2 className="font-['Montserrat'] text-white text-center pt-5 ">Financify searches over 20 financial institutions to find
        the best option suited as per customer needs</h2>
      </div>
      <div className="deal mt-10">
            <div style={{transform:`scale(0.8)`, justifyContent:`center`, alignItems:`center`}} className="img flex">
                <img className="rotate" style={{height:`90px`, marginRight:`4px`, marginLeft:`4px`}} src="https://financify.ae/wp-content/uploads/2023/06/Group-331-min.png" alt="" />
                <img style={{height:`10%`}} src="https://financify.ae/wp-content/uploads/2023/06/Group-20-1.png" alt="" />
                <img className="rotate" style={{height:`90px`, marginRight:`4px`, marginLeft:`4px`}} src="https://financify.ae/wp-content/uploads/2023/06/Group-333-min.png" alt="" />
                <img style={{height:`10%`}}  src="https://financify.ae/wp-content/uploads/2023/06/Group-20-1.png" alt="" />
                <img className="rotate" style={{height:`85px`, marginRight:`4px`, marginLeft:`4px`}} src="src/assets/group-1.png" alt="" />
                <img style={{height:`10%`}}  src="https://financify.ae/wp-content/uploads/2023/06/Group-20-1.png" alt="" />
                <img className="rotate" style={{height:`85px`, marginRight:`4px`, marginLeft:`4px`}} src="src/assets/group-2.png" alt="" />
            </div>
            <div className="deal-txt mt-[7px] text-white">
              <div style={{textAlign:`center`, paddingTop:`0`,paddingBottom:`0`,gap:`1%`}} className="flex p-[8.5rem]">
                <div style={{width:`35%`}}>
                  <h1 className="font-medium">Best Price Guaranteed</h1>
                  <p className="mt-3" style={{color:`#ffffffe0`}}>We compare several options to offer you honest and best rates, saving you more money in the long run</p>
                </div>
                <div style={{width:`35%`}}>
                  <h1 className="font-medium">Easy Processing</h1>
                  <p className="mt-3" style={{color:`#ffffffe0`}}>Once you appoint us all you need to do is to sit back and relax and we will take care of the rest</p>
                </div>
                <div style={{width:`35%`}}>
                  <h1 className="font-medium">No Pre-Approval Fee</h1>
                  <p className="mt-3" style={{color:`#ffffffe0`}}>Free pre-approvals and consultation will help you to take informed decisions.</p>
                </div>
                <div style={{width:`35%`}}>
                  <h1 className="font-medium">Maximum Loan-To-Value Ratio</h1>
                  <p className="mt-3" style={{color:`#ffffffe0`}}>Free pre-approvals and consultation will help you to take informed decisions.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Whychoose;
