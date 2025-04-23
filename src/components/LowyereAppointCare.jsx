import React from 'react';



const LowyereAppointCare = ({lowyere,handleRemove}) => {
    const {ID,Name,Speciality,Fee} = lowyere 
    // console.log(lowyere)
    return (
        <div>
            
           <div>
           <div className='mt-5 bg-base-100 shadow-xl rounded-2xl p-12'>
                     <h1 className='text-3xl font-extrabold text-center text-gray-500 py-2'>{Name}</h1>
                     <div className='flex justify-between mt-12 border-b-1 py-3 border-gray-400' >
                        <p className='text-xl font-medium text-gray-500'>Specialist : {Speciality}</p>
                       <p className='text-xl font-medium text-gray-500'><span>Appointment Fee :</span>
                         {Fee} Taka
                       </p>
                       
                     </div>
                     <div className='text-center'> <button onClick={()=> handleRemove(ID)} className='btn btn-outline btn-secondary rounded-3xl w-11/12 mt-12'> 
                    Cancel Appointment
          </button></div>
             </div>
           </div>
        </div>
    );
};

export default LowyereAppointCare;