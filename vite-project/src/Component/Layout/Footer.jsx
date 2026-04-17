import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {
  const user = useSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <footer className="w-full bg-black text-white px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-center md:text-left">
          &copy; All Rights Reserved By <span className="font-semibold">JobHUB</span>
        </div>
        <div className="flex gap-4 text-xl justify-center">
          <Link to="/" target="_blank" aria-label="Facebook"><FaFacebook /></Link>
          <Link to="/" target="_blank" aria-label="YouTube"><FaYoutube /></Link>
          <Link to="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
          <Link to="/" target="_blank" aria-label="Instagram"><RiInstagramFill /></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
