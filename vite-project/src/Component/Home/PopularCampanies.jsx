import React from 'react';
import { FaApple, FaMicrosoft } from 'react-icons/fa';
import { SiTesla } from "react-icons/si";

function PopularCompanies() {
  const companies = [
    {
      id: 1,
      title: "LEGEND COLLEGE",
      location: "Multan, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft className="text-3xl text-gray-600" />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla className="text-3xl text-gray-600" />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple className="text-3xl text-gray-600" />,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Top Companies</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((e) => (
            <div
              key={e.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition transform"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{e.icon}</div>
                <div className="text-left">
                  <p className="text-lg font-semibold">{e.title}</p>
                  <p className="text-sm text-gray-600">{e.location}</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Open Positions: {e.openPositions}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCompanies;
