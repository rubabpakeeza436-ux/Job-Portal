import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function MyJobs() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/getmyjobs", { withCredentials: true }).then(res => {
        console.log(res.data)
        setJobs(res.data.myJobs)
      })
    } catch (error) {
      toast.error(error)
    }
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800 text-center">
          My Jobs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-700">{job.title}</h2>
              <p className="text-gray-500 mb-2">{job.category}</p>
              <p className="text-gray-500 mb-4">{job.country}</p>
              <Link to={`/job/${job._id}`} className="text-blue-500 hover:text-blue-700 transition duration-300">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MyJobs
