import React from 'react'
import Slider from "react-slick";
import logo from '../logo/8086855-removebg-preview-vmake.png';

function Navbar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Navbar */}
      <div>
        <nav className='flex justify-between items-center bg-[rgb(210,207,138,255)] p-4'>
          {/* Logo */}
          <div className='h-[50px] w-[50px]'>
            <img src={logo} alt="Museum Logo" className='h-full w-full object-contain' />
          </div>

          {/* Navbar Links */}
          <div>
            <ul className='flex justify-center items-center gap-5'>
              <li className='text-2xl font-serif cursor-pointer'>Home</li>
              <li className='text-2xl font-serif cursor-pointer'>Explore</li>
              <li className='text-2xl font-serif cursor-pointer'>Contact Us</li>
              <li className='text-2xl font-serif cursor-pointer'>Booking</li>
            </ul>
          </div>

          {/* Signup & Login */}
          <div className='flex gap-5'>
            <h1 className='text-2xl font-serif cursor-pointer'>SignUp</h1>
            <h1 className='text-2xl font-serif cursor-pointer'>Login</h1>
          </div>
        </nav>
      </div>

     
    </div>
  );
}

export default Navbar;
