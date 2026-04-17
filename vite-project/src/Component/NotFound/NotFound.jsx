import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center">
        <img 
          src="/notfound.png" 
          alt="Not Found" 
          className="w-[600px] h-auto "
        />

        <Link 
          to="/" 
          className=" px-6 py-1 border-1 border-black text-xl font-semibold text-gray-700  hover:bg-gray-100 transition"
        >
          Return to Home!
        </Link>
      </div>
    </section>
  )
}

export default NotFound