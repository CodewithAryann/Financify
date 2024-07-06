import React from "react";

function About() {
  return (
    <div className="w-full pt-20 bg-black text-white  rounded-tl-3xl rounded-tr-3xl">
      <h1 className='pr-20 pl-20 pb-8 font-["Montserrat"] text-3xl leading-[3.5vw] tracking-tighter'>
        Financify is a trusted name in the UAE mortgage industry, offering a
        personalized approach to secure the best possible mortgage for its
        clients. At Financify, customer is at the heart of everything we do. We
        take pride in our commitment to build lasting relationships with our
        clients, which will be evident with our exceptional customer service.
      </h1>
      <div className="line h-[1px] w-full bg-slate-400"></div>
      <div className="pl-20 pt-10 flex gap-10">
        <h1 className='font-["Montserrat"] w-[35vw]'>What you can expect:</h1>
        <p className='font-["Montserrat"] w-[29vw] '>
          Financify approach to business is driven by its values of
          transparency, integrity, and trust. Clients can rest assured that we
          have a team of professionals who have their best interests at heart.
          With a commitment to ensure that the mortgage process is effortless
          and transparent, our clients can rely on us to get expert guidance for
          the complex world of mortgages.
        </p>
        <div className="ml-10 mt-[16vw]">
          <p className='font-["Montserrat"] mb-3 '>Social Media:</p>
          <div className="grid decoration-solid decoration-white">
            <a
              href="https://www.facebook.com/financifygroup?mibextid=LQQJ4d"
              target="_blank"
              rel
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/financify.ae/?igshid=MjEwN2IyYWYwYw%3D%3D"
              target="_blank"
              rel
            >
              Instagram
            </a>
            <a
              href="https://ae.linkedin.com/company/financify-mortgage"
              target="_blank"
              rel
            >
              Linkedin
            </a>
            <a
              href="https://www.youtube.com/channel/UCKxaFK18Slauz8zXfzdRfSQ"
              target="_blank"
              rel
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="line h-[1px] w-full bg-slate-400 mt-10 mb-10"></div>
      <div className="new-purchase pl-16 ">
        <h1 className='text-3xl font-["Montserrat"] capitalize font-[500]'>
          New Purchase:
        </h1>
        <div>
          <div>
            <p className="mt-10 font-['Montserrat'] font-medium text-1xl ">
              Buying a home is exciting but it may become tricky if you require
              a Mortgage. Whether you are searching for your first property or
              later, at Financify we aim to turn your property aspiration into
              reality based on our skillset and experience
            </p>
            <p className="mt-10 font-['Montserrat'] font-medium text-1xl">Mortgage can be difficult especially if customers:</p>
            <ul className="custom-bullets">
              <li>Have complexities in their profile</li>
              <li>Are not sure which lender / Financial Institution is best suited</li>
              <li>Need to move quickly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
