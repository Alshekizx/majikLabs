import React from 'react';
import Image from 'next/image';
import Logo from '../images/logo.jpg'; // Use the direct path to the image

export default function Header() {
  return (
    <header className="z-[100] flex bg-[#000000] bg-opacity-50 flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20 py-4 fixed shadow-md w-full">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain" />
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center">
          <li className="cursor-pointer font-normal text-white hover:text-blue-600">Home</li>
          <li className="cursor-pointer font-normal text-white hover:text-blue-600">About</li>
          <li className="cursor-pointer font-normal text-white hover:text-blue-600">Projects</li>
          <li className="cursor-pointer font-normal text-white hover:text-blue-600">Blogs</li>
          <li className="cursor-pointer font-normal text-white hover:text-blue-600">Contact</li>
        </ul>
      </nav>

      {/* Appointment Button */}
      <div className="mt-4 md:mt-0">
        <button className="border-solid border-[1px] border-white text-white py-2 px-4 rounded-[20px] hover:text-[#000] hover:bg-white w-full md:w-auto">
          Book an appointment
        </button>
      </div>
    </header>
  );
}