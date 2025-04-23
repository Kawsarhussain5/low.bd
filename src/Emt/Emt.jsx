import React from 'react';
import { Link } from 'react-router';

const Emt = () => {
    return (
        <div>
             <div className="card  bg-gray-300 card-xs shadow-sm mt-20">
  <div className="card-body flex justify-center items-center py-20  gap-9 ">
    <h2 className="card-title text-4xl font-extrabold">NO one has  been appointed</h2>
    <p className='text-xl font-medium'> please go to the homepage and maka and appointment with some onr</p>
   <div>
   <Link to="/"> <button className='btn bg-green-500 text-white rounded-3xl w-96 '>bact to home </button></Link>
  
  </div>
</div>
            </div>
           
           
        </div>
    );
};

export default Emt;