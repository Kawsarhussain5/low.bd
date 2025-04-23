import React, { useEffect, useState } from 'react';
import LowyersCard from '../components/LowyersCard';
import { getLowyere, removelowyere } from '../utiliti';
import LowyereAppointCare from '../components/LowyereAppointCare';
import Emt from '../emt/Emt';

const LowyersAppoin = () => {
    const [appointLowyers,setAppointLowyers] = useState([])
    useEffect(( )=>{
     const saveLowyere = getLowyere()
     setAppointLowyers(saveLowyere)
    },[])

    const handleRemove=id=>{
        removelowyere(id)
        setAppointLowyers(getLowyere())
    }
    if(appointLowyers.length<1)return<Emt></Emt>
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-8 my-10'>
                <h1 className='text-4xl font-extrabold py-2'>My Today Appointments</h1>
                <p className='text-xl text-center font-medium text-gray-500'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
           <div className='py-5'>
            <div className='grid grid-cols-1  gap-10 mb-'>
            {
                appointLowyers.map(lowyere => <LowyereAppointCare
                    key={lowyere.License_Number}
                    lowyere={lowyere}
                    handleRemove={handleRemove}
                ></LowyereAppointCare>
                )
            }
           
            </div>
        </div>
         
    </div>
    );
};

export default LowyersAppoin;