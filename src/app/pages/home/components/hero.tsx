import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import ThreeJs from '../../threeJs/threejs';
export default function Hero() {
  return (
    <div className='relative h-[100vh] bg-[#1f3640] text-white '>
       {/* Three.js Background */}
       <div className='fixed h-[100vh]  inset-0 z-0'>
        <ThreeJs />
      </div>
      <div className=' relative h-[100%] flex flex-col justify-center items-center pt-[15%] pb-10 ,'>
        <span className='text-[40px]'>Welcome to</span>
        <h1 className='text-[100px]'>Majik-Lab</h1>
        <div className='mt-[100px] w-[100%] flex flex-row justify-between items-center'>
          {/* GitHub */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='flex flex-row justify-center items-center'>
            <FaGithub size={30} /> <p className='pl-2'>GitHub</p>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='flex flex-row justify-center items-center'>
            <FaInstagram size={30} /> <p className='pl-2'>Instagram </p>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='flex flex-row justify-center items-center'>
            <FaTwitter size={30} /> <p className='pl-2'>Twitter</p>
          </a>
          <div className='object-contain w-[30%] '>
            Transforming ideas into cutting-edge digital solutions with Majik Lad's expert software development.
          </div>
        </div>
      </div>
    </div>
  );
}