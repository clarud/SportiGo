import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();


  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
  e.preventDefault();
  const { email, password } = data;

  try {
    const { data: responseData } = await axios.post(
      "/login",
      { email, password },
      { withCredentials: true } // Include cookies
    );

    if (responseData.error) {
      toast.error(responseData.error); // Display backend error
    } else {
      setData({ email: "", password: "" }); // Clear form
      toast.success("Login successful");
      navigate("/dashboard"); // Redirect to dashboard
    }
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    toast.error(error.response?.data?.error || "Login failed");
  }
};

  return (

    <div className="bg-white w-screen">
      <div className="min-h-screen min-w-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          {/* Left Form Section */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={loginUser}>
              {/* Header */}
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Login</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don’t have an account?
                  <a
                    href="/register"
                    className="text-orange-light font-semibold hover:underline ml-1"
                  >
                    Sign up here
                  </a>
                </p>
              </div>

              {/* Email Input */}
              <div className="mb-8">
                <label className="text-gray-800 text-l block mb-2 font-bold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-lg w-full text-gray-800 text-sm bg-white shadow-lg border-b border-orange-light focus:border-orange-light pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              {/* Password Input */}
              <div className="mb-8">
                <label className="text-gray-800 text-l font-bold block mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="rounded-lg w-full text-gray-800 text-sm border-b bg-white shadow-lg border-orange-light focus:border-orange-light pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter password"
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="mt-12">
                <button
                  type="submit"
                  className="font-bold w-full shadow-xl py-2.5 px-4 text-l tracking-wide rounded-md text-white bg-orange-light hover:bg-orange-dark focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="w-full h-full flex items-center bg-[#000842] rounded-xl p-8">
            <img
              src=""
              className="w-full aspect-[12/12] object-contain"
              alt="Login illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
