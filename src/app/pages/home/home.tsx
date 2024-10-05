import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Hero from './components/hero';
import Experties from './components/experties';
import Work from './components/work';

function Home() {
  return (
    <div className='bg-[#111111] overflow-hidden'>
      <Header />
      {/* Apply position relative for z-index to take effect */}
      <div className='relative z-10'>
        <Hero />
      </div>
      {/* Higher z-index and also positioned */}
      <div className='relative z-20'>
        <Experties />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default Home;