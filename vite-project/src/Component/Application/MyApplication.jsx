import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ResumeModal from "./ResumeModal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MyApplications() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const [applications, setApplications] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const getApps = async () => {
    try {
      let res;
      if (user && user.role === "Employer") {
        res = await axios.get("http://localhost:4000/api/apps/employer/getall", {
          withCredentials: true,
        });
        console.log(res);
      } else {
        res = await axios.get("http://localhost:4000/api/apps/jobseeker/getall", {
          withCredentials: true,
        });
      }
      setApplications(res.data.myApplications);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getApps();
  }, []);

  const deleteApp = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/apps/deletejob/${id}`, {
        withCredentials: true,
      });
      toast.success("Deleted Successfully");
        navigate("/"); 
      getApps();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const openModal = (url) => {
    setimageUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {user?.role === "Job Seeker" ? "My Applications" : "Applications Received"}
        </h3>

        {applications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) =>
              user?.role === "Job Seeker" ? (
                <JobSeekerCard
                  key={app._id}
                  element={app}
                  deleteApplication={deleteApp}
                  openModal={openModal}
                />
              ) : (
                <EmployerCard key={app._id} element={app} openModal={openModal} />
              )
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-10">
            {user?.role === "Job Seeker"
              ? "You have not applied to any jobs yet."
              : "No applications received yet."}
          </p>
        )}

        {modalOpen && <ResumeModal imageUrl={imageUrl} onClose={closeModal} />}
      </div>
    </section>
  );
}

export default MyApplications;

// Job Seeker View
const JobSeekerCard = ({ element, deleteApplication, openModal }) => (
  <div className="bg-white rounded-xl shadow-md p-6 space-y-3 hover:shadow-lg transition">
    <p><strong>Name:</strong> {element.name}</p>
    <p><strong>Email:</strong> {element.email}</p>
    <p><strong>Phone:</strong> {element.phone}</p>
    <p><strong>Address:</strong> {element.address}</p>
    <p><strong>Cover Letter:</strong> {element.coverLetter}</p>
    <Link to={`/job/${element.appliedAd}`} className="text-blue-600 underline">
      View Job Posting
    </Link>
    <div>
      <img
        src={element.resume.url}
        alt="resume"
        className="w-32 h-auto rounded border cursor-pointer hover:scale-105 transition"
        onClick={() => openModal(element.resume.url)}
      />
    </div>
    <button
      onClick={() => deleteApplication(element._id)}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Delete
    </button>
  </div>
);

// Placeholder EmployerCard Component
const EmployerCard = ({ element, openModal }) => (
  <div className="bg-white rounded-xl shadow-md p-6 space-y-3 hover:shadow-lg transition">
    <p><strong>Job Title:</strong> {element.jobTitle}</p>
    <p><strong>Applicant:</strong> {element.name}</p>
    <p><strong>Email:</strong> {element.email}</p>
    <p><strong>Phone:</strong> {element.phone}</p>
    <p><strong>Cover Letter:</strong> {element.coverLetter}</p>
    <div>
      <img
        src={element.resume.url}
        alt="resume"
        className="w-32 h-auto rounded border cursor-pointer hover:scale-105 transition"
        onClick={() => openModal(element.resume.url)}
      />
    </div>
  </div>
); 