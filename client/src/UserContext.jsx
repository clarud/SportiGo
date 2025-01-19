import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("/profile", { withCredentials: true });
      setUser(response.data); // Set user data manually
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/profile", { withCredentials: true });
        setUser(response.data); // Set user data if logged in
        console.log(response.data)
      } catch (error) {
        if (error.response?.status === 401) {
          console.error("Error checking authentication:", error); // Log the error
        }
      } finally {
        setLoading(false); // stop loading once the request is complete
      }
    };

    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node
};
