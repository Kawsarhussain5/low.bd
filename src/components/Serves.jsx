import React from 'react';
import servisDoctor from '../assets/success-doctor.png'
import servisRevew from '../assets/success-review.png'
import servisPatien from '../assets/success-patients.png'
import servisStaffs from '../assets/success-staffs.png'

import CountUp from 'react-countup';

const Serves = () => {
   

    return (

        <div>
            <div className='text-center mt-28'>
            <h1 className='text-5xl font-extrabold py-8'>We Provide Best Law Services</h1>
            <p className='text-xl font-medium pb-8'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
             <div className="stat flex flex-col justify-center items-center gap-3 bg-gray-200 rounded-3xl py-8 text-center">
    <div className="stat-title "><img src={servisDoctor} alt="" /></div>
    <div className="stat-value text-5xl"><CountUp end={199} duration={25}></CountUp>+</div>
    <div className="stat-desc text-xl font-medium text-gray-400">Total Lawrer</div>
  </div>
  <div className="stat  flex flex-col justify-center items-center gap-3 bg-gray-200 rounded-3xl py-8 text-center">
    <div className="stat-title"><img src={servisRevew} alt="" /></div>
    <div className="stat-value  text-5xl"><CountUp end={483} duration={30}></CountUp>+</div>
    <div className="stat-desc text-xl font-mediu text-gray-400">Total Reviews</div>
  </div>
  <div className="stat  flex flex-col justify-center items-center gap-3 bg-gray-200 rounded-3xl py-8 text-center">
    <div className="stat-title"><img src={servisPatien} alt="" /></div>
    <div className="stat-value text-5xl"><CountUp end={1900} duration={50}></CountUp>+</div>
    <div className="stat-desc text-xl font-mediu text-gray-400">Cases Initiated</div>
  </div>
  <div className="stat  flex flex-col justify-center items-center gap-3 bg-gray-200 rounded-3xl py-8 text-center">
    <div className="stat-title"><img src={servisStaffs} alt="" /></div>
    <div className="stat-value text-5xl"><CountUp end={321} duration={30}></CountUp>+</div>
    <div className="stat-desc text-xl font-mediu text-gray-400">Total Stuffs</div>
  </div> 
        </div>
        </div>
      
    );
};

export default Serves;