import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-orange-100 to-white flex flex-col items-center justify-center text-center w-screen">
      <h1 className="text-7xl font-bold text-orange-light mb-4"> Welcome to SportiGo.</h1>
      <div className="p-8 max-w-md t">
        <p className="text-gray-400 text-1xl mb-6"> Your one stop spot to connect with sports pals </p>
        <div className="flex justify-center space-x-4">
          <Link to="/register" className="px-6 py-3 bg-orange-light text-white rounded-lg hover:bg-orange-dark transition"> Get Started </Link>
          <button className="px-6 py-3 bg-white text-orange-light rounded-lg hover:bg-orange-300 transition border-2 border-orange-light  "> Find Out More</button>
        </div>
      </div>
    </div>
  )
}
