import { useState } from "react";
import logo from '/JobZeelogo.png';
import Image from '/register.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaRegUser, FaPencilAlt, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

function Register() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  axios.post('http://localhost:4000/api/register', { role, phone, name, email, password })
      .then((response) => {
        toast.success('Registered Successfully');
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
     
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-16 py-8 md:py-0">

        <div className="w-full md:w-[80%] mx-auto flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-60 mb-5" />
          <p className="text-3xl font-bold mb-5 text-center md:text-left">Create a new account</p>
        </div>

       
        <form onSubmit={handleSubmit} className="w-full md:w-[80%] mx-auto md:mx-0">

          <label className="block mb-4">
            Register As
            <div className="flex items-center rounded-md bg-gray-300 p-2 w-full">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full bg-gray-300 focus:outline-none"
              >
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
            </div>
          </label>

       
          <label className="block mb-4">
            Name
            <div className="flex items-center bg-gray-300 p-2 rounded-md w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full bg-gray-300 focus:outline-none"
              />
              <FaPencilAlt className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
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
            Phone Number
            <div className="flex items-center bg-gray-300 p-2 rounded-md w-full">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full bg-gray-300 focus:outline-none"
              />
              <FaPhone className="ml-2 text-2xl text-white p-1 rounded" style={{ backgroundColor: '#1d4d4f' }} />
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
            type="submit"
            className="mt-6 p-2 text-white text-xl font-bold rounded-md w-full"
            style={{ backgroundColor: '#1d4d4f' }}
          >
            Register
          </button>

       
          <button
            type="button"
            onClick={() => navigateTo('/login')}
            className="mt-8 p-2 text-xl rounded-md w-full border-2"
            style={{ borderColor: '#1d4d4f', color: '#1d4d4f' }}
          >
            Login Now
          </button>
        </form>
      </div>


      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 px-4 md:px-0">
        <img src={Image} alt="Register Illustration" className="max-h-[80%] object-contain" />
      </div>
    </div>
  );
}

export default Register;
