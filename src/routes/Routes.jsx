import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import RedirectRoute from "./RedirectRoute";
import Tools from "../pages/Tools/Tools";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/tools"
          element={
            <PrivateRoute>
              <Tools />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
      </Routes>
    </Router>
  );
}
