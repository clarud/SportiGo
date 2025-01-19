import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function UpdateProfile() {
    const [formData, setFormData] = useState({
        skillLevel: "",
        preferredSport: "",
        status: "",
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("/profile", {
                    withCredentials: true,
                });
                const { skillLevel, preferredSport, status } = response.data;
                setFormData({ skillLevel, preferredSport, status });
            } catch (error) {
                console.error("Error fetching profile:", error.response?.data || error.message);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("/update-profile", formData, {
                withCredentials: true,
            });
            alert("Profile updated successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex h-screen w-screen bg-gray-100">
              {/* Sidebar */}
              <aside className="w-64 bg-orange-light text-white flex flex-col">
                <div>Logo goes here</div>
                <div className="px-6 py-4">
                </div>
                <nav className="flex-1 px-4 space-y-2">
                  <Link
                    to="/dashboard"
                    className="flex items-center px-3 py-2 text-white rounded-md hover:bg-gray-700"
                  >
                    Dashboard
                  </Link>
                  <a className="flex items-center px-3 py-2 text-white rounded-md bg-orange-dark hover:bg-gray-700">
                              Profile
                            </a>
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Log out
                    </button>
                  </div>
                </header>
        
                {/* Main Section */}
                <main className="flex-1 p-6">
                  <div className="bg-white shadow-lg rounded-lg gap-4 mb-6 h-full flex">
                    <div className="w-1/3 h-full items-center justify-center">
                        <img
                            src=""
                            className=" ml-6 mt-6 w-full aspect-[12/12] object-contain"
                            alt="Profile Picture"
                            />
                        <div className="ml-6 mt-6" />       
                        <button className="ml-6 mt-6 bg-orange-light shadow-lg w-1/2"> Upload Photo </button>
                    </div>
                    <div className="w-2/3 h-full">
                        <div className="ml-6 mt-6 w-full"/>       
                        <div className="md:max-w-md w-full px-4 py-4">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Update Profile</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-6 mb-8 flex items-center">
                                    <label className="text-gray-800 text-xl block mb-2 font-bold">
                                        Skill Level
                                    </label>
                                    <select name="skillLevel" value={formData.skillLevel} onChange={handleChange} className="ml-2 rounded-lg w-full h-1/3 text-gray-800 text-sm bg-white shadow-lg border border-orange-light focus:border-orange-light pl-2 pr-8 py-3 outline-none">
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </select>
                                </div>

                                <div className="mt-6 mb-8 flex items-center">
                                    <label className="text-gray-800 text-xl block mb-2 font-bold">
                                        Preferred Sport
                                    </label>
                                    <input
                                        type="text"
                                        name="preferredSport"
                                        value={formData.preferredSport}
                                        onChange={handleChange}
                                        className="ml-2 rounded-lg w-full h-1/3 text-gray-800 text-sm bg-white shadow-lg border border-orange-light focus:border-orange-light pl-2 pr-8 py-3 outline-none"
                                    />
                                </div>

                                <div className="mt-6 mb-8 flex items-center">
                                    <label className="text-gray-800 text-xl block mb-2 font-bold">
                                        Status
                                    </label>
                                    <select name="status" value={formData.status} onChange={handleChange} className="bg-white shadow-lg border border-orange-light ml-2 rounded-lg w-full h-1/3 text-gray-800 text-sm focus:border-orange-light pl-2 pr-8 py-3 outline-none">
                                        <option value="Available">Available</option>
                                        <option value="Busy">Busy</option>
                                    </select>
                                </div>
                                <button className="ml-6 mt-6 bg-orange-light shadow-lg w-1/2" type="submit">Update</button>
                            </form>
                    </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
    );
}
