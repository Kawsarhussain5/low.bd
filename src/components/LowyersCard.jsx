import React from 'react';
import { Link } from 'react-router';

const LowyersCard = ({lowyere}) => {
     const {ID,Image,Name,Speciality,Experience,License_Number} = lowyere 
    
    return (
        <div>
          <div className="card flex flex-row rounded-2xl  gap-8 bg-base-100 shadow-sm p-5">
  <img className=' rounded-2xl'
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  <div className=" flex flex-col gap-6">
    <div className='flex gap-12 '>
        <button className='btn rounded-3xl px-8 bg-green-100 text-green-600 font-medium'>Available</button>
        <button className='btn rounded-3xl px-8 text-blue-600 bg-blue-100 font-medium'>{Experience} Experience</button>
    </div>
    <h2 className="card-title text-3xl font-extrabold">{Name}</h2>
    <p className='text-xl text-gray-500 font-medium  border-b-1 border-dashed pb-2'>Specialist : {Speciality}</p>
    <p className='text-xl text-gray-500 font-medium '>License No :{License_Number}</p>
    <Link to={`/Lowyersdtails/${ID}`} className='text-center'><button className="btn rounded-4xl px-30 text-blue-500 border-blue-400 ">View Details</button></Link>
  </div>
     </div>
        </div>
    );
};

export default LowyersCard;