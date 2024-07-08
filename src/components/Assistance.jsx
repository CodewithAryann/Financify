import React from "react";
import { MdEmail } from "react-icons/md";

function Assistance() {
  return (
    <div className="pr-20 pl-20">
      <div
        style={{ backgroundSize: `100% 100%`, padding: ` 70px 0px !important` }}
        className='need-help relative overflow-hidden w-full h-[30vw] Assistance bg-[url("https://financify.ae/wp-content/uploads/2023/06/Rectangle-1687@2x.png")]'
      >
        <div className="help "></div>
        <div className="help-2 overflow-hidden"></div>
        <div className="text-center mt-20">
          <h1 className='text-3xl font-["Montserrat"] font-semibold uppercase text-white '>
            Need Assistance ?
          </h1>
          <p className='font-["Montserrat"] w-30 text-[12px] mt-4 mb-4 text-white'>
            Whether you’d like to make a Mortgage enquiry or simply have a
            question about our services,<br></br>
            we’re available
          </p>
          <h2 className='text-[20px] font-["Montserrat"] uppercase font-semibold text-zinc-100 mt-5'>
            Apply For Free Consultation
          </h2>
        </div>
        <div>
            <div>
            <i><MdEmail /></i>
            <h1>info@financify.ae</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Assistance;
