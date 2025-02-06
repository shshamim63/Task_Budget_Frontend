import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
