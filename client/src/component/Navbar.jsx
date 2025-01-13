import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-orange-light p-4 fixed top-1 left-0 w-screen shadow-md z-50 rounded-3xl">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left-aligned Home link */}
                <div>
                    <Link to="/" className="text-white text-xl font-bold hover:text-orange-dark">
                        Home
                    </Link>
                </div>

                {/* Right-aligned Register and Login links */}
                <div className="flex space-x-4">
                    <Link to="/register" className="text-white hover:text-orange-dark">
                        Register
                    </Link>
                    <Link to="/login" className="text-white hover:text-orange-dark">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
  )
}
