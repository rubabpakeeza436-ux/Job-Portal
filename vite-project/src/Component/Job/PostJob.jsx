import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createJobSuccess } from "../../Redux/jobSlice";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !desc ||
      !category ||
      !country ||
      !city ||
      !location ||
      salaryType === "default"
    ) {
      return toast.error("Please fill in all required fields.");
    }

    if (salaryType === "Fixed Salary" && !fixedSalary) {
      return toast.error("Please enter fixed salary.");
    }

    if (
      salaryType === "Ranged Salary" &&
      (!salaryFrom || !salaryTo || Number(salaryFrom) >= Number(salaryTo))
    ) {
      return toast.error("Enter a valid salary range.");
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/postJob",
        {
          title,
          description: desc,
          category,
          country,
          city,
          location,
          salaryType,
          fixedSalary,
          salaryFrom,
          salaryTo,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(createJobSuccess(response.data));
      toast.success("Job created successfully!");

     
      setTitle("");
      setDesc("");
      setCategory("");
      setCountry("");
      setCity("");
      setLocation("");
      setSalaryType("default");
      setFixedSalary("");
      setSalaryFrom("");
      setSalaryTo("");

      navigate("/job/me"); 
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data.message || "Job creation failed.");
      } else {
        toast.error("Job creation failed. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Post  New Job</h1>

      <form className="space-y-8" onSubmit={handleSubmit}>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Job Title"
            className="border-b border-gray-400 outline-none p-2 text-xl w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="border-b border-gray-400 outline-none p-2 text-xl w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled>Select Category</option>
            <option>Graphics & Design</option>
            <option>Web Development</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Mobile App Development</option>
            <option>Artificial Intelligence</option>
            <option>Video Animation</option>
            <option>Data Entry Operator</option>
            <option>MERN STACK Development</option>
          </select>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Country"
            className="border-b border-gray-400 outline-none p-2 text-xl w-full"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            className="border-b border-gray-400 outline-none p-2 text-xl w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

   
        <input
          type="text"
          placeholder="Location"
          className="border-b border-gray-400 outline-none w-full p-2 text-xl"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="border-b border-gray-400 outline-none w-full p-2 text-xl"
          value={salaryType}
          onChange={(e) => setSalaryType(e.target.value)}
        >
          <option disabled value="default">
            Select Salary Type
          </option>
          <option value="Fixed Salary">Fixed Salary</option>
          <option value="Ranged Salary">Ranged Salary</option>
        </select>

        
        {salaryType === "Fixed Salary" && (
          <input
            type="number"
            placeholder="Fixed Salary"
            className="border-b border-gray-400 outline-none w-full p-2 text-xl"
            value={fixedSalary}
            onChange={(e) => setFixedSalary(e.target.value)}
          />
        )}

        {salaryType === "Ranged Salary" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Salary From"
              className="border-b border-gray-400 outline-none p-2 text-xl w-full"
              value={salaryFrom}
              onChange={(e) => setSalaryFrom(e.target.value)}
            />
            <input
              type="number"
              placeholder="Salary To"
              className="border-b border-gray-400 outline-none p-2 text-xl w-full"
              value={salaryTo}
              onChange={(e) => setSalaryTo(e.target.value)}
            />
          </div>
        )}

        <textarea
          placeholder=" Description"
          className="border-b border-gray-400 outline-none w-full p-2 text-xl"
          rows="5"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

  
        <button
          type="submit"
          className="w-full bg-teal-800 text-white font-semibold py-3 text-2xl rounded hover:bg-teal-900 transition"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
