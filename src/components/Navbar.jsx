import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar p-0">
  <div className="navbar-start">
    <div className="dropdown pr-1">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/' className={({isActive})=>(isActive?'text-red-300':'')}>Home</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300':'')} to='/mybookings'>My-Bookings</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300':'')} to='/blogs'>Blogs</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300':'')} to='/contact'>Contuct Us</NavLink>
      </ul>
    </div>
    <div className='flex justify-center items-center gap-4'>
      <img src={logoImg} alt="logoImg" />
      <span className='text-4xl font-extrabold'>Law.BD</span>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold flex gap-8 ">
      <NavLink  className={({isActive})=>(isActive?'text-red-300 underline':'')} to='/'>Home</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300 underline':'')}to='/mybookings'>My-Bookings</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300 underline':'')} to='/blogs'>Blogs</NavLink>
      <NavLink  className={({isActive})=>(isActive?'text-red-300 underline':'')} to='/contact'>Contuct Us</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink>
    <button className="btn btn-active btn-success rounded-3xl px-7 py-5 hover:text-white hover:bg-lime-500">Contact Now</button>
    </NavLink>
  </div>
</div>
    );
};

export default Navbar;