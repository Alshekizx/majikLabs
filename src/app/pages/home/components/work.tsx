import React from 'react';

const works = [
  {
    title: 'Anclysis Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    buttonText: 'View Case Study',
    imageUrl: 'https://via.placeholder.com/300x200?text=Anclysis+App',
  },
  {
    title: 'Fortknox Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    buttonText: 'View Case Study',
    imageUrl: 'https://via.placeholder.com/300x200?text=Fortknox+App',
  },
  {
    title: 'Zenocide Application',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    buttonText: 'View Case Study',
    imageUrl: 'https://via.placeholder.com/300x200?text=Zenocide+App',
  },

  {
    title: 'xxx',
    description:
      'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    buttonText: 'View Case Study',
    imageUrl: 'https://via.placeholder.com/300x200?text=Zenocide+App',
  },
];

export default function Work() {
  return (
    <div className="py-20 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-10">
        <h5 className="text-2xl font-bold">Works</h5>
        <span className="text-blue-600 cursor-pointer">View all</span>
      </div>

      {/* Card Grid */}
      <div className='flex flex-row justify-between items-center'>
        <div className=' w-[50%]' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-[50%]">
          {works.map((work, index) => (
            <div key={index} className="bg-primary rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={work.imageUrl}
                alt={work.title}
              />
              <div className="p-6">
                <h5 className="text-xl font-semibold text-white mb-2">{work.title}</h5>
                <span className="text-gray-400 mb-6">{work.description}</span>
                <button className="bg-[#BB5838] text-white mt-3 px-4 py-2 rounded">
                  {work.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}