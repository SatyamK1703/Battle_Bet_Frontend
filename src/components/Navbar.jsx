import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900 text-gray-200 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold">Tournament Logo</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#" className="hover:text-cyan-400">About</a></li>
          <li><a href="#" className="hover:text-cyan-400">Events</a></li>
          <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
