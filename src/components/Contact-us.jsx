import React from 'react';

function Contactus() {
  return (
    <div className='bg-gray-200 py-10'>
      <div className='max-w-4xl mx-auto flex'>
        {/* Left side - Form */}
        <div className='w-1/2 pr-10 bg-white rounded-md shadow-md'>
          <h2 className='text-2xl font-bold mb-4 px-6 py-4  rounded-t-md'>Contact Us</h2>
          <form className='px-6 py-4' action='#' method='post'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name *</label>
              <input type='text' id='name' name='name' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email *</label>
              <input type='email' id='email' name='email' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>Phone Number *</label>
              <input type='tel' id='phone' name='phone' required className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='services' className='block text-sm font-medium text-gray-700'>Services</label>
              <input type='text' id='services' name='services' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' />
            </div>
            <div className='mb-4'>
              <label htmlFor='comments' className='block text-sm font-medium text-gray-700'>Comments</label>
              <textarea id='comments' name='comments' rows='3' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
            </div>
            <button type='submit' className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'>
              Submit
            </button>
          </form>
        </div>

        <div className='w-1/2 pl-10 bg-cover bg-center'>
          <div style={{backgroundImage:`url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}} className=' bg-opacity-75 text-white px-6 py-10 bg-cover'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
