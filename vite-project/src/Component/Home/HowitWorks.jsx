import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-4xl text-blue-600 mb-4" />,
      title: "Create Account",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo cupiditate earum laborum autem excepturi.",
    },
    {
      id: 2,
      icon: <MdFindInPage className="text-4xl text-white mb-4" />,
      title: "Find a job/Post a job",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo cupiditate earum laborum autem excepturi.",
      active: true,
    },
    {
      id: 3,
      icon: <IoMdSend className="text-4xl text-blue-600 mb-4" />,
      title: "Create Account",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nemo cupiditate earum laborum autem excepturi.",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-10 text-black">How JobHUB works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-6  w-full h-64 rounded-lg shadow-md transition duration-300  ${
                step.active
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-800 hover:shadow-lg"
              }`}
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <p className="text-lg font-semibold mb-2">{step.title}</p>
                <p className="text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;