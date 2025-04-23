import React, { useEffect, useState } from 'react';
import LowyersCard from './LowyersCard';

const Lowyers = ({lowyers}) => {
    // console.log(lowyers)
    const [showLowyers,setShowLowyers] = useState([])
    const [showAllLowyers,setShowAllLowyers]=useState(false)
    useEffect(()=>{
        if(showAllLowyers){
            setShowLowyers(lowyers)
        }else{
            setShowLowyers(lowyers.slice(0,6))
        }
        
    },[lowyers,showAllLowyers])
    return (
        <div>
           <div className='flex flex-col justify-center items-center mt-14 gap-6'>
            <h1 className='text-4xl font-extrabold'>Our Best Lawyers</h1>
            <p className='max-w-3/4 text-xl text-gray-500 text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine  checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
           </div>
           <div className=' py-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                showLowyers.map(lowyere => 
                <LowyersCard 
                  key={lowyere.License_Number}
                  lowyere={lowyere}
                ></LowyersCard> )
            }
          
            </div>
        </div>
            <div className='text-center'>
            <button onClick={()=>{
                setShowAllLowyers(prv=>!prv)
                if(showAllLowyers)window.scrollTo(0,450)

            }} className='btn text-white bg-green-600 rounded-3xl px-15'>{showAllLowyers?'show lese':'Show All Lawyer'}</button>
            </div>
    </div>
    );
};

export default Lowyers;