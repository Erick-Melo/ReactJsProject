import { Navigate } from "react-router-dom";

function RedirectRoute({ children }) {
  const usuario = localStorage.getItem("user");
  if (usuario) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RedirectRoute;
