import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext); // Access user state from context

  return (
    <nav>
      <Link to="/">Home</Link>
      {!user ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/create-profile">Create Profile</Link>
          <Link to="/update-profile">Update Profile</Link>
        </>
      )}
    </nav>
  );
}
