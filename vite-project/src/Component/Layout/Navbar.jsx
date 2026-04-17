import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/Whitelogo.png';
import { persistor } from '../../Redux/Store'; 
import axios from 'axios';
import toast from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/authSlice';

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/logout', {
        withCredentials: true,
      });
      toast.success(response.data.message);
      dispatch(logout());
      await persistor.purge();
      navigate('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <nav className={user ? 'block bg-black text-white' : 'hidden'}>
      {user && (
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center bg-black relative">
         
          <img src={logo} alt="logo" className="h-20 sm:h-24" />


          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </div>

          <ul
            className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent z-10 transition-all duration-300 ease-in-out overflow-hidden ${
              show ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            } md:opacity-100 md:max-h-full`}
          >
            <li className="px-4 py-2">
              <Link to="/" onClick={() => setShow(false)}>HOME</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/job/getall" onClick={() => setShow(false)}>ALL JOBS</Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/application/me" onClick={() => setShow(false)}>
                {user.role === 'Employer' ? "APPLICANT'S APPLICATIONS" : 'MY APPLICATIONS'}
              </Link>
            </li>
            {user.role === 'Employer' && (
              <>
                <li className="px-4 py-2">
                  <Link to="/job/post" onClick={() => setShow(false)}>POST NEW JOB</Link>
                </li>
                <li className="px-4 py-2">
                  <Link to="/job/me" onClick={() => setShow(false)}>VIEW YOUR JOBS</Link>
                </li>
              </>
            )}
            <li className="px-4 py-2">
              <button
                onClick={handleLogout}
                className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
              >
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
