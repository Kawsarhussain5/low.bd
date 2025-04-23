import React from 'react';
import heroImg from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div

        className=''
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '700px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        borderRadius:'20px'
      }}
    >
        <div className='flex flex-col justify-center items-center gap-16 '>
           <h1 className='text-5xl font-extrabold w-3/4'>It avoids subjective claims or  exaggeration that might raise red  flags legally</h1>
           <p className='text-xl font-medium '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
        </div>
    );
};

export default Hero;