import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addAppoin } from '../utiliti';

const LowyersDtails = () => {
   const data = useLoaderData ()
   const {id} = useParams()
    const lowyereDtale = data.find(lowyere=>lowyere.ID===parseInt(id))
    const {
        ID,
        Image,
        Name,
        Speciality,
        Experience,
        License_Number,
        Availability,
        Fee} =lowyereDtale

    // console.log(lowyereDtale)
    // console.log(id)
    const handleAppoint=()=>{
       addAppoin(lowyereDtale)
    }
    
    return (
      
        <div className='py-12'>
            <div className="card my-12  bg-gray-200 card-xs shadow-sm">
  <div className="card-bod flex flex-col justify-center items-center gap-8 py-12 px-5 ">
    <h2 className="card-title text-4xl font-extrabold">Lawyer’s Profile Details</h2>
    <p className='font-medium text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. <br />Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
   
  </div>
</div>

           
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
                 <div className='flex gap-6'>
                 <p className='text-xl text-gray-500 font-medium '>Specialist : {Speciality}</p>
                 <p className='text-xl text-gray-500 font-medium '>License No :{License_Number}</p>
                 </div>
                 <p>
                    <span className='font-bold text-gray-500'>Availability</span> :  {Availability.map(abal=><button className='btn bg-amber-100 text-amber-600 rounded-3xl px-6 mr-6'>{abal}</button>)}
                 </p>
                 <p><span className='font-bold text-gray-500'>Consultation Fee: : </span><span className='font-bold text-green-500'> Taka : {Fee}</span></p>
                 {/* <Link to={`/Lowyersdtails/${ID}`} className='text-center'><button className="btn rounded-4xl px-30 text-blue-500 border-blue-400 ">View Details</button></Link> */}
               </div>
                  </div>
                     <div className='mt-12 bg-base-100 shadow-xl rounded-2xl p-12'>
                     <h1 className='text-3xl font-extrabold text-center text-gray-500 py-2 border-b-1 border-dashed border-gray-400'>Book an Appointment</h1>
                     <div className='flex justify-between mt-12 border-b-1 py-3 border-gray-400' >
                        <p className='text-xl font-medium text-gray-500'>Availability</p>
                        <button className='btn text-green-500 bg-green-100 px-12 rounded-3xl'>Lawyer  Available Today</button>
                     </div>
                     <div className='text-center mt-6'><p className='btn text-amber-500 bg-amber-100 rounded-3xl text-center px-20 w-11/12'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p></div>
                    <div className='mt-8 text-center '> <Link to='/Lowyersappoin'>
                    <button className='btn text-white rounded-3xl bg-green-500 w-10/12 font-bold ' onClick={handleAppoint}>Book Appointment Now</button></Link></div>
                  <div>
                     </div>

                  </div>
          
        </div>
    );
};

export default LowyersDtails;