import { useContext, useState, useEffect } from 'react';
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';
import Logout from '../component/Logout'

export default function Dashboard() {
  const {user, loading, fetchUserData} = useContext(UserContext)
  console.log("Current fetch:"+ user)

  useEffect(() => {
    if (!user) {
      fetchUserData(); // Fetch user data if not already available
    }
  }, [user, fetchUserData]);

  if (loading) {
    return <div>Loading...</div>; // Show a spinner or placeholder
  }


  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-light text-white flex flex-col">
        <div>Logo goes here</div>
        <div className="px-6 py-4">
        {!!user && (
              <h1 className="text-2xl font-bold">{user.name}</h1>
            )}
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-white rounded-md bg-orange-dark hover:bg-gray-700"
          >
            Dashboard
          </a>
          <Link to="/update-profile" className="flex items-center px-3 py-2 text-white rounded-md hover:bg-gray-700">
            Profile
          </Link>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-white rounded-md hover:bg-gray-700"
          >
            Matches
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 text-white rounded-md hover:bg-gray-700"
          >
            History
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search everywhere..."
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            {!!user && (
              <span className="text-gray-700 font-bold">Hi, {user.name}!</span>
            )}
            <Logout></Logout>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-1 p-6">
          <div className="bg-white shadow-lg rounded-lg gap-4 mb-6 h-1/3 flex">
            <button className="ml-6 mt-6 bg-green-400 shadow-lg h-3/4 w-1/3"> Find Match </button>
            <div className="ml=6 mt-6">
              <label className='text-gray-700 font-bold'>
                    Sport:
                    {!!user && <label className='ml-3 text-gray-700'>{user.sport}</label>}
                </label>
            </div>
          </div>
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2m0 18a8 8 0 10-8-8 8 8 0 008 8zm4.93-8H12V7.07a5 5 0 11-.93 4.93z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Matches</p>
                <p className="text-2xl font-bold">512</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2m0 18a8 8 0 10-8-8 8 8 0 008 8zm4.93-8H12V7.07a5 5 0 11-.93 4.93z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Skill Rating</p>
                <p className="text-2xl font-bold">$7,770</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2m0 18a8 8 0 10-8-8 8 8 0 008 8zm4.93-8H12V7.07a5 5 0 11-.93 4.93z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-700">Performance</p>
                <p className="text-2xl font-bold">256%</p>
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Performance</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p>Chart Placeholder</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
