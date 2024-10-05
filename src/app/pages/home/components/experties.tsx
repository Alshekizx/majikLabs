import React from 'react'

export default function Experties() {
  return (
    <div className='  pt-20 pb-15 px-4 md:px-10 lg:px-20'>
      <div>
        <h5>
          Expertise
        </h5>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container-wrap mt-10 w-[50%]'>

        <div>
            <div className='flex flex-row items-center mt-3  mb-3 '>
              <div className='dott'/>
              <p className='font-bold'>Development</p>
            </div>
            <span className='font-regular'>From web applications to mobile solutions, our development team crafts robust, scalable, and efficient digital products. We specialize in full-stack development using the latest technologies, ensuring that our solutions are future-proof and meet the specific needs of your business.</span>
        </div>

        <div>
            <div className='flex flex-row items-center mt-3  mb-3 '>
              <div className='dott'/>
              <p className='font-bold'>Project Management</p>
            </div>
            <span className='font-regular'>Our project management services ensure that your projects are delivered on time, within budget, and to the highest standards. We use Agile methodologies to keep the development process transparent and adaptable, ensuring a collaborative approach with our clients.</span>
        </div>

        <div>
            <div className='flex flex-row items-center mt-3 mb-3'>
              <div className='dott'/>
              <p className='font-bold'>Cloud Solutions</p>
            </div>
            <span className='font-regular'>We design and implement secure, scalable cloud infrastructure that optimizes performance and ensures reliability. Whether you're migrating existing systems to the cloud or building cloud-native applications, we provide solutions that enhance business agility and operational efficiency.</span>
        </div>

        <div>
            <div className='flex flex-row items-center mt-3 mb-3'>
              <div className='dott'/>
              <p className='font-bold'>Tech Consulting</p>
            </div>
            <span className='font-regular'>Our consulting services provide businesses with expert advice on leveraging technology to achieve their strategic objectives. From digital transformation strategies to system integrations, we help businesses navigate the complex technology landscape with confidence.</span>
        </div>
      </div>
    </div>
  )
}
