import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./Component/Register";
import Login from "./Component/Login";
import Footer from "./Component/Layout/Footer";
import Navbar from "./Component/Layout/Navbar";
import Home from "./Component/Home/Home";
import Jobs from "./Component/Job/Jobs";
import PostJobs from "./Component/Job/PostJob";
import MyJobs from "./Component/Job/MyJobs";
import JobDetails from "./Component/Job/JobDetails";
import ApplicationForm from './Component/Application/ApplicationForm';
import MyApplication from './Component/Application/MyApplication';
import NotFound from "./Component/NotFound/NotFound";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

 
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/job/getall"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        />

        <Route
          path="/job/post"
          element={
            <PrivateRoute allowedRoles={["Employer"]}>
              <PostJobs />
            </PrivateRoute>
          }
        />

        <Route
          path="/job/me"
          element={
            <PrivateRoute allowedRoles={["Employer"]}>
              <MyJobs />
            </PrivateRoute>
          }
        />

        <Route
          path="/job/:id"
          element={
            <PrivateRoute>
              <JobDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/application/:id"
          element={
            <PrivateRoute allowedRoles={["Job Seeker"]}>
              <ApplicationForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/application/me"
          element={
            <PrivateRoute>
              <MyApplication />
            </PrivateRoute>
          }
        />

       
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
