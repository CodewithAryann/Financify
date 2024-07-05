import React from "react";

function About() {
  return (
    <div className='w-full pt-20 bg-black text-white  rounded-tl-3xl rounded-tr-3xl"'>
      <h1 className='pr-20 pl-20 pb-8 font-["Montserrat"] text-3xl leading-[3.5vw] tracking-tighter'>
        Financify is a trusted name in the UAE mortgage industry, offering a
        personalized approach to secure the best possible mortgage for its
        clients. At Financify, customer is at the heart of everything we do. We
        take pride in our commitment to build lasting relationships with our
        clients, which will be evident with our exceptional customer service.
      </h1>
      <div className="line h-[1px] w-full bg-slate-400"></div>
      <div className="pl-20 pt-4 flex ">
        <h1 className='font-["Montserrat"] w-[35vw]'>What you can expect:</h1>
        <p className='font-["Montserrat"] w-[29vw] ' >Financify approach to business is driven by its values of transparency, integrity, and trust. Clients can rest assured that we have a team of professionals who have their best interests at heart. With a commitment to ensure that the mortgage process is effortless and transparent, our clients can rely on us to get expert guidance for the complex world of mortgages.</p>
        <div>
            <p className='font-["Montserrat"]'>Social Media:</p>
        </div>
      </div>
    </div>
  );
}

export default About;
