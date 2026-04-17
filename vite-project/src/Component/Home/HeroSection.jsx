import React from "react";
import { FaSuitcase, FaBuilding, FaUsers, FaUserPlus } from "react-icons/fa";

function HeroSection() {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase className="text-3xl text-blue-600" />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding className="text-3xl text-blue-600" />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers className="text-3xl text-blue-600" />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus className="text-3xl text-blue-600" />,
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-0 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find a job that suits
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            your <span className="text-blue-600">interests and skills</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover thousands of job opportunities that align with your
            passion and professional goals. Join now and build your career.
          </p>
        </div>

      
        <div className="flex-1">
          <img
            src="/heroS.jpg"
            alt="hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {details.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>{item.icon}</div>
              <p className="text-2xl font-bold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;