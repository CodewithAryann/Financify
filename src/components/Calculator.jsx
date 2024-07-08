import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalculator } from 'react-icons/fa';

function Calculator() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [details, setDetails] = useState(null);

  const calculateMortgage = ({ loanAmount, interestRate, loanTerm }) => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    const monthlyPayment = 
      (principal * monthlyInterestRate) / 
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setDetails({ loanAmount, interestRate, loanTerm });
  };

  return (
    <div className='mt-10 bg-[url("src/assets/calculator-img.jpg")] w-full h-auto bg-cover rounded-tl-3xl rounded-tr-3xl p-10 flex flex-col items-center justify-center'>
      <div className='w-full h-20 flex justify-center items-center mb-5'>
        <h1 className='text-3xl font-bold text-white flex items-center gap-2'>
          <FaCalculator />
          Mortgage Calculator
        </h1>
      </div>
      <form onSubmit={handleSubmit(calculateMortgage)} className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Loan Amount:</label>
          <input 
            type='number' 
            className={`w-full p-3 border rounded ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'}`} 
            {...register('loanAmount', { required: true })} 
          />
          {errors.loanAmount && <p className='text-red-500 text-sm mt-1'>Loan amount is required</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Interest Rate (%):</label>
          <input 
            type='number' 
            step='0.01' 
            className={`w-full p-3 border rounded ${errors.interestRate ? 'border-red-500' : 'border-gray-300'}`} 
            {...register('interestRate', { required: true })} 
          />
          {errors.interestRate && <p className='text-red-500 text-sm mt-1'>Interest rate is required</p>}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Loan Term (Years):</label>
          <input 
            type='number' 
            className={`w-full p-3 border rounded ${errors.loanTerm ? 'border-red-500' : 'border-gray-300'}`} 
            {...register('loanTerm', { required: true })} 
          />
          {errors.loanTerm && <p className='text-red-500 text-sm mt-1'>Loan term is required</p>}
        </div>
        <button type='submit' className='w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300'>Calculate</button>
      </form>
      {monthlyPayment && (
        <div className='mt-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-gray-700 text-2xl font-semibold mb-4'>Monthly Payment: ${monthlyPayment}</h2>
          <div className='text-gray-600'>
            <p><strong>Loan Amount:</strong> ${details.loanAmount}</p>
            <p><strong>Interest Rate:</strong> {details.interestRate}%</p>
            <p><strong>Loan Term:</strong> {details.loanTerm} years</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;

