import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const usuario = localStorage.getItem("user");
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
