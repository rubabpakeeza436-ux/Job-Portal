import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ApplicationForm = () => {
  const user = useSelector((state) => state.auth.user);
  const navigateTo = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    if (user && user.role === "Employer") {
      navigateTo("/");
    }
  }, [user, navigateTo]);

  const handleFileChange = (e) => {
    const resumeFile = e.target.files[0];
    setResume(resumeFile);
  };

  const handleApplication = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);
    formData.append("jobId", id);

    try {
      const res = await axios.post("http://localhost:4000/api/apps/postApplication", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      toast.success("Application submitted successfully");
       navigateTo("/application/me");
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 md:px-10 py-10 mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">Job Application</h1>
      <form className="space-y-6 sm:space-y-8" onSubmit={handleApplication}>
        <input
          type="text"
          placeholder="Name"
          className="border-b border-gray-400 outline-none p-2 text-lg sm:text-xl w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b border-gray-400 outline-none p-2 text-lg sm:text-xl w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border-b border-gray-400 outline-none p-2 text-lg sm:text-xl w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="border-b border-gray-400 outline-none p-2 text-lg sm:text-xl w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          placeholder="Cover Letter"
          className="border border-gray-400 outline-none w-full p-2 text-lg sm:text-xl"
          rows="6"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />
        <div className="mb-4">
          <label className="block text-lg sm:text-xl font-medium text-black mb-2">Select Resume</label>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 border-b border-gray-400 pb-2">
            <label
              htmlFor="resume"
              className="bg-gray-200 text-black text-base sm:text-lg px-3 py-1 cursor-pointer border border-black w-fit"
            >
              Choose File
            </label>
            <span className="text-black text-base sm:text-lg mt-2 sm:mt-0">
              {resume ? resume.name : "No file chosen"}
            </span>
          </div>
          <input
            id="resume"
            type="file"
            className="hidden"
            accept=".jpg, .png, .webp, .jpeg, .pdf, .doc, .docx"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white font-semibold py-2 text-xl sm:text-2xl rounded-lg"
          style={{ backgroundColor: "#1d4d4f" }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
