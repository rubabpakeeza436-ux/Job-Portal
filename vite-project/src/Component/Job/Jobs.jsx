import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/getAll", { withCredentials: true })
        .then(res => {
          console.log(res.data); 
          setJobs(res.data);
        });
    } catch (error) {
      Toaster.error(error);
    }
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-10 sm:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">All Jobs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.jobs && jobs.jobs.map(e => {
            return (
              <div
                key={e._id}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">{e.title}</h2>
                  <p className="text-gray-500 text-sm sm:text-base mb-1">{e.category}</p>
                  <p className="text-gray-500 text-sm sm:text-base mb-4">{e.country}</p>
                </div>
                <Link
                  to={`/job/${e._id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base transition"
                >
                  View Details →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
