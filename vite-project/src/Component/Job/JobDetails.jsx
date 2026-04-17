import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/${id}`, { withCredentials: true })
      .then((res) => {
        setJob(res.data.job);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Job Details
      </h3>

      <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 border border-gray-200">
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Title: <span className="font-normal text-gray-600">{job.title}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Category: <span className="font-normal text-gray-600">{job.category}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Country: <span className="font-normal text-gray-600">{job.country}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          City: <span className="font-normal text-gray-600">{job.city}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Location: <span className="font-normal text-gray-600">{job.location}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Description: <span className="font-normal text-gray-600">{job.description}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-3 text-gray-700">
          Job Posted On: <span className="font-normal text-gray-600">{job.jobPosted}</span>
        </p>
        <p className="text-base sm:text-lg font-bold mb-6 text-gray-700">
          Salary:{" "}
          {job.fixedSalary ? (
            <span className="font-normal text-gray-600">{job.fixedSalary}</span>
          ) : (
            <span className="font-normal text-gray-600">
              {job.salaryFrom} - {job.salaryTo}
            </span>
          )}
        </p>

        <div className="mt-4">
          {user && user.role === "Employer" ? null : (
            <Link
              to={`/application/${job._id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition duration-300 ease-in-out"
            >
              Apply Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
