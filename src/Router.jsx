import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
