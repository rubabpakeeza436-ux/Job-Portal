import React from 'react';
import { FaReact } from 'react-icons/fa';
import {
  MdAccountBalance,
  MdOutlineAnimation,
  MdOutlineDesignServices,
  MdOutlineWebhook,
} from 'react-icons/md';
import { TbAppsFilled } from 'react-icons/tb';
import { IoGameController } from 'react-icons/io5';
import { GiArtificialIntelligence } from 'react-icons/gi';

function PopularCategories() {
  const categories = [
    {
      id: 1,
      title: 'Graphics & Design',
      subTitle: '305 Open Positions',
      icon: <MdOutlineDesignServices className="text-3xl text-gray-600" />,
    },
    {
      id: 2,
      title: 'Mobile App Development',
      subTitle: '500 Open Positions',
      icon: <TbAppsFilled className="text-3xl text-gray-600" />,
    },
    {
      id: 3,
      title: 'Frontend Web Development',
      subTitle: '200 Open Positions',
      icon: <MdOutlineWebhook className="text-3xl text-gray-600" />,
    },
    {
      id: 4,
      title: 'MERN STACK Development',
      subTitle: '1000+ Open Postions',
      icon: <FaReact className="text-3xl text-gray-600" />,
    },
    {
      id: 5,
      title: 'Account & Finance',
      subTitle: '150 Open Positions',
      icon: <MdAccountBalance className="text-3xl text-gray-600" />,
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      subTitle: '867 Open Positions',
      icon: <GiArtificialIntelligence className="text-3xl text-gray-600" />,
    },
    {
      id: 7,
      title: 'Video Animation',
      subTitle: '50 Open Positions',
      icon: <MdOutlineAnimation className="text-3xl text-gray-600" />,
    },
    {
      id: 8,
      title: 'Game Development',
      subTitle: '80 Open Positions',
      icon: <IoGameController className="text-3xl text-gray-600" />,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Popular Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((e) => (
            <div
              key={e.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transform transition"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{e.icon}</div>
                <div className="text-left">
                  <p className="text-lg font-semibold">{e.title}</p>
                  <p className="text-sm text-gray-600">{e.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
