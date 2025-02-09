import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import RedirectRoute from "./RedirectRoute";
import Tools from "../pages/Tools/Tools";
import Dashboard from "../pages/Dashboard/Dashboard";
import Actions from "../pages/Actions/Actions";
import News from "../pages/News/News";
import Tables from "../pages/Tables/Tables";
import UserProfile from "../pages/UserProfile/UserProfile";

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
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/actions"
          element={
            <PrivateRoute>
              <Actions />
            </PrivateRoute>
          }
        />
        <Route
          path="/tables"
          element={
            <PrivateRoute>
              <Tables />
            </PrivateRoute>
          }
        />
        <Route
          path="/news"
          element={
            <PrivateRoute>
              <News />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
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
