import { useContext } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';

const Logout = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await axios.post('/logout', {}, { withCredentials: true });
    setUser(null);

    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Logout
    </button>
  );
};

export default Logout;
