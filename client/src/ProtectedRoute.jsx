import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  return user ? children : <Navigate to="/login" />;
}

// Add PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node
};
