import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
       <>
    <div className='max-w-11/12 mx-auto'>
    <Navbar></Navbar>
    </div>
      <div className='min-h-[calc(100vh-720px)] max-w-11/12 mx-auto'>
      <Outlet></Outlet> 
      </div> 
    <Footer></Footer>

       </>
    );
};

export default MainLayout;