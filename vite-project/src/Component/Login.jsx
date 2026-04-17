import { useState } from "react";
import logo from '/JobZeelogo.png';
import Image from '/login.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import app from '../../firebase.js';
import { useDispatch } from "react-redux";
import { setUser } from "./../Redux/authSlice.js";
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { FaRegUser, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const resFG = await signInWithPopup(auth, provider);
    const userData = {
      username: resFG.user.displayName,
      email: resFG.user.email,
      password: "1234567890",
    };
    try {
      const res = await axios.post("http://localhost:4000/api/google", userData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });
      dispatch(setUser(res.data.user));  
      toast.success("Logged in Successfully using Google!");
      navigateTo("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(
    "http://localhost:4000/api/login",
    { role, email, password },
    {
      withCredentials: true, // 👈 cookie save ke liye
      headers: { "Content-Type": "application/json" }, // 👈 force JSON type
    }
  )
    .then((response) => {
      toast.success("Login Successfully");
      dispatch(setUser(response.data.user));
      navigateTo("/");
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    });
};


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
     
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16 py-8 md:py-0">
        
  
        <div className="w-full md:w-[80%] mx-auto flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-60 mb-5" />
          <p className="text-3xl font-bold mb-5 text-center md:text-left">Login to your account</p>
        </div>

        
        <form onSubmit={handleSubmit} className="w-full md:w-[80%] mx-auto md:mx-0">

      
          <label className="block mb-4">
            Login As
            <div className="flex items-center rounded-md bg-gray-300 p-2 w-full">
              <select value={role} onChange={(e) => setRole(e.target.value)} className="block w-full bg-gray-300 focus:outline-none">
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
            </div>
          </label>

     
          <label className="block mb-4">
            Email
            <div className="flex items-center bg-gray-300 p-2 rounded-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full bg-gray-300 focus:outline-none"
              />
              <FaEnvelope className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
            </div>
          </label>

       
          <label className="block mb-4">
            Password
            <div className="flex items-center bg-gray-300 p-2 rounded-md w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full bg-gray-300 focus:outline-none"
              />
              <FaLock className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
            </div>
          </label>


          <button
            type="button"
            className="mt-7 p-2 text-xl font-bold rounded-md w-full border-2 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out border-[#1d4d4f] text-[#1d4d4f]"
            onClick={handleGoogle}
          >
            Continue with Google
          </button>

   
          <button
            type="submit"
            className="mt-8 p-2 text-xl text-white font-bold rounded-md w-full"
            style={{ backgroundColor: '#1d4d4f' }}
          >
            Login
          </button>


          <button
            type="button"
            className="mt-8 p-2 text-xl font-bold rounded-md w-full border-2"
            style={{ borderColor: '#1d4d4f', color: '#1d4d4f' }}
            onClick={() => navigateTo('/register')}
          >
            Register Now
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 px-4 md:px-0">
        <img src={Image} alt="Login Illustration" className="max-h-[80%] object-contain" />
      </div>
    </div>
  );
}

export default Login;
