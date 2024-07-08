import React from 'react';

function Contactus() {
  return (
    <div className='bg-gray-200 py-10 rounded-tl-3xl rounded-tr-3xl mt-20'>
      <div className='max-w-6xl mx-auto flex mt-20'>
        {/* Left side - Form */}
        <div style={{ background: `linear-gradient(45deg, rgba(122,96,247,1) 0%, rgba(46,168,238,1) 100%)` }} className='w-1/2 pr-10 rounded-md shadow-md'>
          <h2 className='text-2xl font-bold mb-4 px-6 py-4 text-white'>Contact Us</h2>
          <form className='px-6 py-4' action='#' method='post'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-50'>Name *</label>
              <input style={{ backgroundColor: `#ffffff96` }} type='text' id='name' name='name' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-50'>Email *</label>
              <input style={{ backgroundColor: `#ffffff96` }} type='email' id='email' name='email' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-50'>Phone Number *</label>
              <input style={{ backgroundColor: `#ffffff96` }} type='tel' id='phone' name='phone' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='services' className='block text-sm font-medium text-gray-50'>Services</label>
              <select style={{ backgroundColor: `#ffffff96` }} id='services' name='services' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                <option value="">Select a service</option>
                <option value="new-purchase">New Purchase</option>
                <option value="remortgage-equity-release">Remortgage & Equity Release</option>
                <option value="mortgage-handover-properties">Mortgage For Handover Properties</option>
                <option value="overseas-mortgage">Overseas Mortgage</option>
                <option value="shariah-compliant-home-loan">Shariah-Compliant/Islamic Home Loan</option>
                <option value="building-finance">Building Finance</option>
                <option value="buy-to-let-mortgage">Buy To Let Mortgage</option>
                <option value="house-construction-finance">House Construction Finance</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='comments' className='block text-sm font-medium text-gray-50'>Comments</label>
              <textarea style={{ backgroundColor: `#ffffff96` }} id='comments' name='comments' rows='3' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
            </div>
            <button type='submit' className='bg-black text-white py-2 px-4 rounded-md uppercase hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50'>
              Submit
            </button>
          </form>
        </div>

        {/* Right side - Contact Details with Background Image */}
        <div className='w-1/2 pl-10'>
          <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }} className='bg-cover bg-center rounded-md text-white p-6'>
            <div className='bg-gray-800 bg-opacity-75 p-6 rounded-md'>
              <h2 className='text-2xl font-bold mb-4'>Contact Details</h2>
              <p>
                <strong>Phone:</strong><br />
                +971585899398<br />
                +971585655007<br />
                +971585658224
              </p>
              <p className='mt-4'>
                <strong>Email:</strong><br />
                info@financify.ae
              </p>
              <p className='mt-4'>
                <strong>Address:</strong><br />
                Office # 402C, Aspin Commercial Tower, Sheikh Zayed Road, Dubai
              </p>
              <h3 className='text-xl font-bold mt-6'>Our Services</h3>
              <ul className='list-disc list-inside'>
                <li>New Purchase</li>
                <li>Remortgage & Equity Release</li>
                <li>Mortgage For Handover Properties</li>
                <li>Overseas Mortgage</li>
                <li>Shariah-Compliant/Islamic Home Loan</li>
                <li>Building Finance</li>
                <li>Buy To Let Mortgage</li>
                <li>House Construction Finance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
